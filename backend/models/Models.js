import fs from 'fs';
import path from 'path';

const directoryPath = path.join(__dirname, 'submodules');

async function importAllModules() {
    const files = fs.readdirSync(directoryPath);
    const modules = {};

    for (const file of files) {
        if (file.endsWith('.js')) {
            const moduleName = file.slice(0, -3); // Remove the .js extension
            modules[moduleName] = await import(`./submodules/${file}`);
        }
    }

    return modules;
}
const Models = await importAllModules();
export default Models
