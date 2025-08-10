
const fs = require('fs');
const path = require('path');

function collectFilesRecursively(startDir, includeExtensions, excludeDirectories) {
  const collectedFilePaths = [];

  function walk(dir) {
    const directoryEntries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of directoryEntries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (excludeDirectories.some((excluded) => fullPath.includes(excluded))) {
          continue;
        }
        walk(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (includeExtensions.has(ext)) {
          collectedFilePaths.push(fullPath);
        }
      }
    }
  }

  walk(startDir);
  return collectedFilePaths;
}

function removeCommentOnlyLines(fileContent) {
  const lines = fileContent.split(/\r?\n/);
  const outputLines = [];

  let isInBlockComment = false; // /* ... */
  let isInJsxBlockComment = false; // {/* ... */}

  for (const originalLine of lines) {
    const line = originalLine; // keep original for output
    const trimmed = line.trim();

    if (trimmed === '') {
      outputLines.push(line);
      continue;
    }

    if (isInJsxBlockComment) {
      if (trimmed.includes('*/}')) {
        const after = trimmed.split('*/}')[1] || '';
        if (after.match(/\S/)) {
          outputLines.push(line);
        }
        isInJsxBlockComment = false;
      }
      continue;
    }

    if (isInBlockComment) {
      if (trimmed.includes('*/')) {
        const after = trimmed.split('*/')[1] || '';
        if (after.match(/\S/)) {
          outputLines.push(line);
        }
        isInBlockComment = false;
      }
      continue;
    }

    if (trimmed.startsWith('//')) {
      continue;
    }

    if (trimmed.startsWith('{/*') && trimmed.endsWith('*/}')) {
      const beginsWithJsxComment = trimmed.indexOf('{/*') === 0;
      const endsWithJsxComment = trimmed.lastIndexOf('*/}') === trimmed.length - 3;
      if (beginsWithJsxComment && endsWithJsxComment) {
        continue;
      }
    }

    if (trimmed.startsWith('{/*')) {
      const hasEndOnSameLine = trimmed.includes('*/}');
      if (!hasEndOnSameLine) {
        isInJsxBlockComment = true;
        continue;
      }
      const after = trimmed.split('*/}')[1] || '';
      if (!after.match(/\S/)) {
        continue;
      }
    }

    if (trimmed.startsWith('/*')) {
      const hasEndOnSameLine = trimmed.includes('*/');
      if (!hasEndOnSameLine) {
        isInBlockComment = true;
        continue;
      }
      const after = trimmed.split('*/')[1] || '';
      if (!after.match(/\S/)) {
        continue;
      }
    }

    outputLines.push(line);
  }

  return outputLines.join('\n');
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');

  const includeExtensions = new Set([
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.mjs',
    '.cjs',
    '.css',
  ]);

  const excludeDirectories = [
    path.join(projectRoot, 'node_modules'),
    path.join(projectRoot, '.next'),
    path.join(projectRoot, 'public'),
    path.join(projectRoot, '.git'),
    path.join(projectRoot, 'out'),
  ];

  const files = collectFilesRecursively(projectRoot, includeExtensions, excludeDirectories);

  let changedFileCount = 0;
  for (const filePath of files) {
    try {
      const original = fs.readFileSync(filePath, 'utf8');
      const updated = removeCommentOnlyLines(original);
      if (updated !== original) {
        fs.writeFileSync(filePath, updated, 'utf8');
        changedFileCount += 1;
      }
    } catch (error) {
      console.error(`Failed processing ${filePath}:`, error.message);
    }
  }

  console.log(`Processed ${files.length} files; modified ${changedFileCount} files.`);
}

if (require.main === module) {
  main();
}


