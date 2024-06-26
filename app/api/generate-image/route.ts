import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { message, style, quality } = await req.json();
  const prompt = `Generate an image that describes the following painting: ${message}`;
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt.substring(0, Math.min(prompt.length, 1000)),
    size: "1024x1024",
    quality: quality ?? "standard",
    style: style ?? "natural",
    response_format: "url",
    n: 1,
  });
const imageUrl = response.data[0].url;
return new Response(JSON.stringify({ imageUrl }));
}
