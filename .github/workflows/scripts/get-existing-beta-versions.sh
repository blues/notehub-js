#!/usr/bin/env bash
# bash boilerplate
# Script to retrieve existing beta versions from npm and determine the next beta version.

readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
function l { # Log a message to the terminal.
    echo
    echo -e "[$SCRIPT_NAME] ${1:-}"
}

set -e

# Ensure a valid version was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <current-version>"
  exit 1
fi

CURRENT_VERSION=$1
echo "Current project version: $CURRENT_VERSION"

# Query npm for existing versions of the package
EXISTING_VERSIONS=$(npm show @blues-inc/notehub-js versions --json)
echo "Existing versions on npm: $EXISTING_VERSIONS"

# Extract current version without any existing beta suffix
BASE_VERSION=$(echo "$CURRENT_VERSION" | sed -E 's/-beta\.[0-9]+$//')
echo "Base version: $BASE_VERSION"

# Extract only the beta versions for the current base version (e.g., 1.0.23-beta.X)
CURRENT_BETA_VERSIONS=$(echo "$EXISTING_VERSIONS" | jq -r '.[]' | grep -E "^${BASE_VERSION}-beta\.[0-9]+$" || true)
echo "Current beta versions: $CURRENT_BETA_VERSIONS"

# Determine the next beta version number
if [ -z "$CURRENT_BETA_VERSIONS" ]; then
  NEXT_BETA_VERSION=1
else
  # Extract numeric suffixes of all beta versions, sort, and get the highest
  HIGHEST_BETA_VERSION=$(echo "$CURRENT_BETA_VERSIONS" | sed -E 's/.*-beta\.([0-9]+)$/\1/' | sort -n | tail -n 1)
  NEXT_BETA_VERSION=$((HIGHEST_BETA_VERSION + 1))
fi

# Set the new version as `MAJOR.MINOR.PATCH-beta.N`
NEW_VERSION="${BASE_VERSION}-beta.$NEXT_BETA_VERSION"
echo "Next beta version: $NEW_VERSION"

# Save the new version as a GitHub environment variable
echo "new_version=$NEW_VERSION" >> $GITHUB_ENV