#!/bin/bash

PROJECT_DIR="$(realpath "$(dirname "$0")/..")"

cd "$PROJECT_DIR" && \
  npm version patch \
  && git add . \
  && git commit -m "$1" \
  && git push \
  && npm publish
