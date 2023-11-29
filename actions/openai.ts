import { SecretString } from "apps/website/loaders/secretString.ts";
import { ObjectStorage } from "../storage/kv.ts";
import type { Choice } from "../utils/types.ts";

export interface Props {
  openAIKey: SecretString;
  prompt: string;
  sectionId: string;
  url: string;
  type: "section" | "seo";
}

function createMessages(
  action: string,
  html: string,
): { role: string; content: string }[] {
  return [
    {
      "role": "system",
      "content": "You are a tailwind and TSX expert assistant.",
    },
    { "role": "system", "content": "You only respond with what is asked." },
    {
      "role": "system",
      "content":
        "You only respond with HTML section and the HTML section only.",
    },
    { "role": "system", "content": "You must use tailwind." },
    {
      "role": "system",
      "content": "You must set daisyUI tokens to define colors.",
    },
    { "role": "system", "content": "You must return a detailed version." },
    { "role": "system", "content": "You must create a responsive HTML." },
    { "role": "system", "content": "You must close all your HTML tags." },
    {
      "role": "system",
      "content": "You must create a component that will be used in a campaign.",
    },
    {
      "role": "system",
      "content": "You should not return simplified HTML version.",
    },
    {
      "role": "system",
      "content": "You should use simple and interesting HTML animations.",
    },
    {
      "role": "system",
      "content": "You must use HTML without any web framework.",
    },
    {
      "role": "system",
      "content":
        "You must keep the content on the same language as the source.",
    },
    {
      "role": "user",
      "content":
        `Create a HTML section for one ${action} from this html: ${html}`,
    },
  ];
}

const htmlRegex = /(<section([\s\S]+)<\/section>)/i

export default async function LoadAdminData(
  { openAIKey, sectionId, prompt, url }: Props,
  _req: Request,
): Promise<string[] | null> {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${openAIKey}`,
  };
  const payload = {
    "model": "gpt-4-1106-preview",
    "n": 2,
    "messages": createMessages(prompt, await (await fetch(url)).text()),
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  const data = response.json();
  const choices = (await data)["choices"] as Choice[];
  
  if (!choices) {
    return null;
  }
  htmlRegex

  const matchChoices = choices.map((x) => htmlRegex.exec(x.message.content)).filter(x => x != null);

  if (matchChoices.length === 0) {
    return null;
  }
  const processedChoices = matchChoices.map((x) => x![0]);
  await ObjectStorage.set([sectionId], processedChoices);

  return processedChoices;
}
