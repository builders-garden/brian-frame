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
  await qstashClient.publishJSON({
    url: `${vercelURL()}/api/brian-task`, // deploy on vercel and change the url
    body: {
      prompt,
      address,
      id,
    },
  });
  console.log("Task created", {
    id,
    prompt,
    address,
  });
}
