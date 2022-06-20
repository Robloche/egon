#!/usr/bin/python3
# -*- coding: utf-8 -*-

import json
import os
import sys

#
# Generates locales and write them to src/locales/
#
# Usage: generate-locales.py <app folder> [-l=<lang1>,<lang2>,...]
#
# Reads from <repo root folder>/locales-sources/core-<lang>.csv and writes to src/locales/<lang>/translation.json
#

scriptFile = os.path.realpath(__file__)
repoRootPath = os.path.dirname(os.path.dirname(scriptFile))
localesSourcePath = os.path.join(repoRootPath, 'locales-sources')
localesTargetPath =  os.path.join(repoRootPath, 'packages', 'ntg-core', 'src', 'locales')
LOCALES_SOURCE_EXTENSION = '.csv'
LOCALES_TARGET_FILENAME = 'translation.json'
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
            [key, value] = line.strip().split(CSV_SEPARATOR)
            keys = key.split(KEY_SEPARATOR)
            subObj = jsonObj
            for k in keys[:-1]:
                if k not in subObj:
                    subObj[k] = {}
                subObj = subObj[k]
            subObj[keys[-1]] = value.replace(r'\n', '\n')
    return jsonObj

# Parse command line
languages = []
features = []
if len(sys.argv) == 1:
    print('Provide application name and, optionally, one or more features and one or more languages')
    print('Usage: {} <app name> [-f=<feature1>,<feature2>,...] [-l=<lang1>,<lang2>,...]'.format(os.path.split(scriptFile)[1]))
    sys.exit(1)
else:
    for option in sys.argv[2:]:
        [name,value]=option.split('=')
        if name == '-f':
            features = value.split(',')
        if name == '-l':
            languages = value.split(',')

    if len(languages) == 0:
        languages = getAvailableLanguages()
        if len(languages) == 0:
            print('No language provided and no locales found in {}'.format(localesSourcePath))
            sys.exit(1)

appName = sys.argv[1]
sources = [CORE_NAME] + list(map(lambda f: 'feature-' + f, features)) + ['app-' + appName]

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
        jsonObj = readFile(file, jsonObj)

    # Write JSON file
    target = os.path.join(localesTargetPath, lang, LOCALES_TARGET_FILENAME)
    createFolderIfNotExist(target)
    content = json.dumps(jsonObj, sort_keys=True, indent=2)
    with open(target, 'w') as f:
        f.write(content)

print('All done!')
