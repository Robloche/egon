#!/usr/bin/python3
# -*- coding: utf-8 -*-

import json
import os
import sys

#
# Generates locales and write them to src/locales/
#
# Usage: generate-locales.py [-l=<lang1>,<lang2>,...]
#
# Reads from <repo root folder>/locales-sources/core-<lang>.csv
# Writes to src/locales/<lang>/translation.json
#

scriptFile = os.path.realpath(__file__)
repoRootPath = os.path.dirname(os.path.dirname(scriptFile))
localesSourcePath = os.path.join(repoRootPath, 'locales-sources')
localesTargetPath =  os.path.join(repoRootPath, 'src', 'locales')
LOCALES_SOURCE_EXTENSION = '.csv'
LOCALES_TARGET_EXTENSION = '.json'
CORE_NAME = 'core'
CSV_SEPARATOR = u';'
KEY_SEPARATOR = u'.'

def getAvailableLanguages():
    if not os.path.isdir(localesSourcePath):
        return []

    return [os.path.splitext(os.path.basename(f))[0][5:] for f in os.listdir(localesSourcePath) if f.startswith(CORE_NAME + '-')]

# Takes an absolute path as argument
def createFolderIfNotExist(path):
    directory = os.path.dirname(path)
    if not os.path.exists(directory):
        os.makedirs(directory)

def readFile(file, jsonObj):
    with open(file, encoding='utf-8') as f:
        for line in f:
            try:
                [key, value] = line.strip().split(CSV_SEPARATOR)
                keys = key.split(KEY_SEPARATOR)
                subObj = jsonObj
                for k in keys[:-1]:
                    if k not in subObj:
                        subObj[k] = {}
                    subObj = subObj[k]
                subObj[keys[-1]] = value.replace(r'\n', '\n')
            except ValueError:
                print('Missing CSV separator in file {} on line "{}"'.format(os.path.basename(file), line))
                raise
    return jsonObj

# Parse command line
languages = []
if len(sys.argv) > 1:
    for option in sys.argv[2:]:
        [name,value]=option.split('=')
        if name == '-l':
            languages = value.split(',')

if len(languages) == 0:
    languages = getAvailableLanguages()
    if len(languages) == 0:
        print('No language provided and no locales found in {}'.format(localesSourcePath))
        sys.exit(1)

sources = [CORE_NAME]

# Read CSV sources and write JSON for all languages
for lang in languages:
    print('Processing "{}"...'.format(lang))

    # Initialize translation dic for current language
    jsonObj = {}

    # Merge all sources
    for source in sources:
        file = os.path.join(localesSourcePath, '{}-{}{}'.format(source, lang, LOCALES_SOURCE_EXTENSION))
        if not os.path.isfile(file):
            print('"{}" not found'.format(file))
            continue

        print('Reading "{}"...'.format(file))

        # Read file and build JSON object
        try:
            jsonObj = readFile(file, jsonObj)
        except:
            print('Aborting')
            sys.exit(1)

    # Write JSON file
    target = os.path.join(localesTargetPath, '{}{}'.format(lang, LOCALES_TARGET_EXTENSION))
    createFolderIfNotExist(target)
    content = json.dumps(jsonObj, sort_keys=True, indent=2)
    with open(target, 'w') as f:
        f.write(content)

print('All done!')
