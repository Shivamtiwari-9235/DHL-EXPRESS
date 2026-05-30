#!/bin/bash
set -e

echo "Installing client dependencies..."
cd client
npm ci --prefer-offline --no-audit
echo "Building client..."
npm run build
echo "Build completed successfully"
