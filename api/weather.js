import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    try {
        const filePath = path.join(process.cwd(), 'api', 'weatherData.json');
        const data = await readFile(filePath, 'utf-8');
        const json = JSON.parse(data);

        res.status(200).json(json);
    } catch (error) {
        console.error('Error reading weather.json:', error);
        res.status(500).json({ message: 'Error loading weather data' });
    }
}
