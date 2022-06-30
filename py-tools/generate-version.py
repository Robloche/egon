#!/usr/bin/python3
# -*- coding: utf-8 -*-

#
# Generate a version number from current datetime and write it to build/public/version.json
#

import os
import sys
from datetime import datetime, timezone

print('Version generation is currently disabled')
sys.exit(1)

repoRootPath = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
coreBuildPath = os.path.join(repoRootPath, 'build')

if not os.path.isdir(coreBuildPath):
    print('Error: {} not found or not a directory'.format(coreBuildPath))
    sys.exit(1)

if 'REACT_APP_VERSION' not in os.environ:
    print('Error: No version number found in environment variables')
    sys.exit(1)

versionFile = os.path.join(coreBuildPath, 'version.json')
version = os.environ['REACT_APP_VERSION']
date = datetime.now(timezone.utc).strftime('%Y-%m-%d %Hh%M')

if version == '':
    print('Error: Empty version number found in environment variables')
    sys.exit(1)

with open(versionFile, 'w') as f:
    f.write('{{"version": "{}", "date": "{}"}}'.format(version, date))

print('Version file generated with {} at {} (UTC) in build folder'.format(version, date))
