#!/usr/bin/env bash
FILES=$(git diff --cached --name-only --diff-filter=ACMR "src/**/*.ts" "src/**.ts" | sed 's| |\\ |g')
[ -z "$FILES" ] && exit 0

echo $FILES
# Prettify all selected files
echo "$FILES" | xargs ./node_modules/.bin/tslint -c ./tslint.json -t stylish --fix

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0
