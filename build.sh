#!/usr/bin/env bash
# Build the Chrome extension and Firefox Addon
cd src
zip -FS -X -r ../build/disable_wysiwyg.zip img/*.png *.js*
cd ..
