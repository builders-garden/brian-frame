import { Client } from "@upstash/qstash";
import { vercelURL } from "../app/utils";

const qstashClient = new Client({
  // Add your token to a .env file
  token: process.env.QSTASH_TOKEN!,
});

export async function createNewBrianTask(
  id: string,
  prompt: string,
  address: string
) {
  const res = await fetch(
    `https://qstash.upstash.io/v2/publish/https://brian-frame.builders.garden/api/brian-worker`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.QSTASH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        address,
        id,
      }),
    }
  );
  const response = await res.json();
  console.log(response);
}
