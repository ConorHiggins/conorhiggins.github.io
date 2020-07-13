#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
echo "Move to dist directory"
cd dist
# mv *.* ../

# if you are deploying to a custom domain
echo 'Now deploying'

# # git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:ConorHiggins/conorhiggins.github.io.git master

cd -