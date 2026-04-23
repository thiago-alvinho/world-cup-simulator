import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';

// Converte a URL do módulo atual para um caminho de sistema de arquivos
const __filename = fileURLToPath(import.meta.url);
// Pega o diretório onde este arquivo (fileSystem.js) está (ex: src/utils)
const __dirname = path.dirname(__filename);

// Define o caminho para a pasta data subindo um nível (..) e entrando em data
const basePath = path.resolve(__dirname, '..', 'data');

export async function writeData(filename, data) {
    const filePath = path.join(basePath, `${filename}.json`);
    try {
        await fs.writeFile(filePath, JSON.stringify(data));
    } catch (error) {
        console.error("There's been an error trying to write some file:", error);
        throw error;
    }
}

export async function readData(filename) {
    const filePath = path.join(basePath, `${filename}.json`);
    try {
        const data = await fs.readFile(filePath);
        return JSON.parse(data);
    } catch (error) {
        console.error("There's been an error trying to read some file:", error);
        throw error;
    }
}
