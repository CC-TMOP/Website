#! /bin/bash
JS_PATH=~/Website/demo/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC_INDEX=${JS_PATH}src/Index/
JS_PATH_SRC_MOP=${JS_PATH}src/Mop/

CSS_PATH=~/Website/demo/static/css/
CSS_PATH_DIST=${CSS_PATH}dist/
CSS_PATH_SRC=${CSS_PATH}src/

find $JS_PATH_SRC -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DIST}main.js
find $JS_PATH_SRC_MOP -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DIST}index.js

find $CSS_PATH_SRC -type f -name '*.css' | sort  | xargs cat > ${CSS_PATH_DIST}main.css
