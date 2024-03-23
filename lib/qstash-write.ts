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
  const message = await qstashClient.publishJSON({
    url: "https://c17b-2001-b07-a72-af71-a8fc-d40c-69fd-b9c6.ngrok-free.app/api/brian-worker",
    body: {
      prompt,
      address,
      id,
    },
  });
  console.log("Task created:", message);
}
