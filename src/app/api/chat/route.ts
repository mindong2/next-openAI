// chat에 대한 기본 설정
// https://sdk.vercel.ai/docs/guides/frameworks/nextjs-app

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
