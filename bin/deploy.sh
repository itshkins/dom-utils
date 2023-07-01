#!/bin/bash

COMMIT_MESSAGE="${1?:error - provide commit message}"
PROJECT_DIR="$(realpath "$(dirname "$0")/..")"

git add . \
  && npm version patch \
  && git add package.json \
  && git commit -m "$COMMIT_MESSAGE" \
  && git push \
  && npm publish
