#!/bin/bash

find ../src/ -name "*.js" | xargs cat | cat > nucleus.combined.js
java -jar ../lib/yuicompressor-2.4.7.jar nucleus.combined.js > nucleus.min.js
