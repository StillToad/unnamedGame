import fs from 'fs';
import path from 'path';

const directoryPath = path.join(__dirname, 'submodules');

async function importAllModules() {
    const files = fs.readdirSync(directoryPath);
    const modules = {};

    for (const file of files) {
        if (file.endsWith('.js')) {
            const modulePath = `./submodules/${file}`;
            const importedModule = await import(modulePath);

            // Loop through each export of the imported module
            Object.keys(importedModule).forEach(exportKey => {
                // Use the name of the export as the key in the modules object
                modules[exportKey] = importedModule[exportKey];
            });
        }
    }

    return modules;
}

const Utils = await importAllModules();
export default Utils;
