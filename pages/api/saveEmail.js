import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        const filePath = path.join(process.cwd(), 'public/data.json');

        try {
            const jsonData = fs.readFileSync(filePath, 'utf-8');
            const data = JSON.parse(jsonData);

            data.emails.push(email);

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

            res.status(200).json({ message: 'Email saved successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error saving email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
