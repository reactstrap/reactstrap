#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */
const path = require('path');
const { copy } = require('fs-extra');
const glob = require('glob');

// copies all .d.ts files to esm/ directory
// This can go away once there are no explicit .d.ts files
async function typescriptCopy(from, to) {
  const files = glob.sync('**/*.d.ts', { cwd: from });
  files.map(async (file) => {
    const fromFilePath = path.resolve(from, file);
    const toFilePath = path.resolve(to, file);
    await copy(fromFilePath, toFilePath);
  });
}

async function copyDtsFiles() {
  const from = path.resolve(__dirname, '../types');
  const to = path.resolve(__dirname, '../esm');
  await typescriptCopy(from, to);
}

console.log('Copying local d.ts files to esm directory');
copyDtsFiles();
