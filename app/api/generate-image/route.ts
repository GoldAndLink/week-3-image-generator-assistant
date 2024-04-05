import {NextApiRequest, NextApiResponse} from 'next';
import OpenAI from 'openai';

export  async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { prompt } = req.body;
            const openai = new OpenAI();

            const response = await openai.images.generate({
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            })

            const imageUrl = response.data
            console.log(imageUrl)
            res.status(200).json({ imageUrl });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to generate image' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
