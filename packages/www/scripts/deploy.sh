#!/usr/bin/env bash
set -e

CURRENT_BRANCH="$(git symbolic-ref --short -q HEAD)"
BUILD_DIR="public/"

success() {
  echo -e "\033[32;1m$1"
}

error() {
  echo -e "\033[31;1m$1"
}

if [ -z "$S3PATH" ]; then
  echo "S3PATH not set, defaulting to current branch ${CURRENT_BRANCH}"
  S3PATH=$CURRENT_BRANCH
fi

if [ "$S3PATH" == "latest" ]; then
  echo "building site without prefix..."
  S3PATH=${S3PATH} npm run build
else
  echo "building site with prefix - '${S3PATH}'..."
  S3PATH=${S3PATH} npm run build -- --prefix-paths
fi

if [ ! -d $BUILD_DIR ]; then
  error "Build directory does not exist. Stopping deploy < / 3"
  exit 1
fi

if [ "$S3PATH" == "latest" ]; then
  echo "backing up current site..."
  npm run s3:backup
fi

echo "deploying site..."
S3PATH=${S3PATH} npm run s3:upload

success "pushed site to $S3PATH"
