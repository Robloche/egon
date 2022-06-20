#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os
import sys

# diff-locales.py <locales-sources folder> fr en
# reads <locales-sources folder>/fr.csv and <locales-sources folder>/en.csv, then produces keys that are missing or in excess in en.csv

LOCALES_SOURCE_EXTENSION = '.csv'
CSV_SEPARATOR = u';'

# Parse command line
languages = []
if len(sys.argv) == 4:
    localSourcesPath = os.path.abspath(sys.argv[1])
    languages = sys.argv[2:]
else:
    print('Provide application root folder and two languages to get the diff.')
    sys.exit(1)

# Read CSV source and store keys for all languages
keys = {}
for lang in languages:
    langSet = set()
    keys[lang] = langSet
    print('Processing "{}"...'.format(lang))

    file = os.path.join(localSourcesPath, '{}{}'.format(lang, LOCALES_SOURCE_EXTENSION))
    if not os.path.isfile(file):
        print('"{}" not found'.format(file))
        sys.exit(1)

    # Read file and parse keys
    with open(file) as f:
        for line in f:
            key = line.decode('utf-8').strip().split(CSV_SEPARATOR)[0]
            langSet.add(key)

# Compare keys
print('Comparing keys...')

def displayIfNotEmpty(keys, type, lang):
    if len(keys) > 0:
        print('\nFollowing keys are {} in "{}":'.format(type, lang))
        print('\n'.join(map(str, sorted(keys))))

[lang1, lang2] = languages
missingKeys = keys[lang1] - keys[lang2]
excessKeys = keys[lang2] - keys[lang1]

if len(missingKeys) + len(excessKeys) == 0:
    print('"{}" and "{}" have the same keys'.format(*languages))
else:
    displayIfNotEmpty(missingKeys, 'missing', lang)
    displayIfNotEmpty(excessKeys, 'in excess', lang)

print('\nAll done!')
