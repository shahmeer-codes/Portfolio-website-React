import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '../src/assets/pics');

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile() && fullPath.match(/\.(png|jpg|jpeg)$/i)) {
            const parsedPath = path.parse(fullPath);
            const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

            try {
                await sharp(fullPath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
                
                console.log(`Converted: ${entry.name} -> ${parsedPath.name}.webp`);
                
                // Delete the original file
                await fs.unlink(fullPath);
            } catch (error) {
                console.error(`Error processing ${fullPath}:`, error);
            }
        }
    }
}

async function run() {
    console.log('Starting image conversion to WebP...');
    await processDirectory(directoryPath);
    console.log('Finished converting images.');
}

run();
