#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os
import shutil
import sys

#
# Delete the content of a folder (mainly used to clean an app's dist/ folder)
#

scriptFile = os.path.realpath(__file__)

if len(sys.argv) == 1:
    print('Provide folder to clean')
    print('Usage: {} <folder>'.format(os.path.split(scriptFile)[1]))
    sys.exit(1)

folderPath = os.path.realpath(sys.argv[1])
parentPath, folderName = os.path.split(folderPath)

while not os.path.basename(parentPath) == 'packages':
    parentPath, appName = os.path.split(parentPath)

appName = appName[4:]

shutil.rmtree(folderPath, ignore_errors=True)
os.mkdir(folderPath)

print('Cleaned "{}" folder in {}'.format(folderName, appName))
