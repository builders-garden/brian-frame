import { Client } from "@upstash/qstash";

const qstashClient = new Client({
  // Add your token to a .env file
  token: process.env.QSTASH_TOKEN!,
});

export async function startBackgroundJob(prompt: string, address: string, id: number) {
  await qstashClient.publishJSON({
    "url": "https://localhost:3000/api/worker", // deploy on vercel and change the url
    body: {
      "prompt": prompt,
      "address": address,
      "id": id
    }
  });
}