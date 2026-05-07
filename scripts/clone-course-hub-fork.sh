#!/usr/bin/env bash
# Part B — Clone YOUR fork of the Sciences Po course hub and add upstream.
#
# Usage:
#   ./scripts/clone-course-hub-fork.sh YOUR_GITHUB_USERNAME [DEST_DIR]
#
# Example:
#   ./scripts/clone-course-hub-fork.sh janesmith
#   ./scripts/clone-course-hub-fork.sh janesmith ~/Developer
#
# DEST_DIR defaults to ~/Desktop. The repo will be cloned into:
#   DEST_DIR/geopolitics-ai-scpo-hub

set -euo pipefail

UPSTREAM_URL="https://github.com/AABK6/geopolitics-ai-scpo-hub.git"

if [[ "${1:-}" == "" || "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  echo "Usage: $0 YOUR_GITHUB_USERNAME [DEST_DIR]"
  echo "  YOUR_GITHUB_USERNAME  — your GitHub login (the fork owner)"
  echo "  DEST_DIR              — where to clone (default: ~/Desktop)"
  exit 1
fi

GH_USER="$1"
DEST_DIR="${2:-$HOME/Desktop}"
REPO_NAME="geopolitics-ai-scpo-hub"
CLONE_PATH="${DEST_DIR}/${REPO_NAME}"
FORK_URL="https://github.com/${GH_USER}/${REPO_NAME}.git"

mkdir -p "$DEST_DIR"

if [[ -e "$CLONE_PATH" ]]; then
  echo "Already exists: $CLONE_PATH"
  echo "Skip clone. Configuring remotes inside that folder..."
  cd "$CLONE_PATH"
else
  echo "Cloning fork: $FORK_URL"
  echo "Into: $CLONE_PATH"
  git clone "$FORK_URL" "$CLONE_PATH"
  cd "$CLONE_PATH"
fi

echo ""
echo "Checking remotes..."
if git remote get-url upstream &>/dev/null; then
  echo "Remote 'upstream' already set to: $(git remote get-url upstream)"
else
  echo "Adding upstream: $UPSTREAM_URL"
  git remote add upstream "$UPSTREAM_URL"
fi

echo "Fetching upstream (teacher repo)..."
git fetch upstream

echo ""
echo "—— Done ——"
echo "Repo path: $CLONE_PATH"
echo ""
echo "Your remotes should look like this:"
git remote -v
echo ""
echo "Next (Part C): copy your site into: $CLONE_PATH/projects/group-2/"
echo "  Example rsync from this monorepo:"
echo "  rsync -a --delete \\"
echo "    \"$(dirname "$0")/../projects/group-2/\" \\"
echo "    \"$CLONE_PATH/projects/group-2/\""
