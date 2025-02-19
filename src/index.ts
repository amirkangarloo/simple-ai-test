import { streamText } from "ai";
import { createOllama } from 'ollama-ai-provider';

const ollama = createOllama({}); // default lessen on port  11434 on localhost

const model = ollama('phi3');


export const answerMyQuestion = async (
  prompt: string,
) => {
  const { textStream } = await streamText({
    model,
    prompt,
  });
    
    for await (const text of textStream) {
      process.stdout.write(text);
    }

  return textStream;
};

const answer = await answerMyQuestion(
  "what is the meaning of life?",
);

console.log(answer);