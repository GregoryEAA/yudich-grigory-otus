const fs = require('fs').promises;
const path = require('path');

async function tree(dirPath) {
    let result = {
        files: [],
        dirs: [],
    };

    async function walk(currentPath) {
        const entries = await fs.readdir(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            let entryPath = path.join(currentPath, entry.name);
            entryPath = entryPath.replace(/\\/g, '/');

            if (entry.isDirectory()) {
                result.dirs.push(entryPath);
                await walk(entryPath);
            } else if (entry.isFile()) {
                result.files.push(entryPath);
            }
        }
    }

    await walk(dirPath);
    return result;
}

const folderPath = process.argv[2] || '.';
tree(folderPath)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => console.error('Error:', error));
