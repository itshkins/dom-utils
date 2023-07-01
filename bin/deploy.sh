#!/bin/bash

COMMIT_MESSAGE="${1?:error - provide commit message}"
PROJECT_DIR="$(realpath "$(dirname "$0")/..")"

npm version patch -f \
  && git add . \
  && git commit -m "$COMMIT_MESSAGE" \
  && git push \
  && npm publish
