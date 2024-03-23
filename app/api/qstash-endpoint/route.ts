import { NextRequest, NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";

async function handler(req: NextRequest) {
  await new Promise((r) => setTimeout(r, 1000));
  let prompt: string;
  let address: string;
  let id: number;

  const data = await req.json();

  await fetch('https://firstqstashmessage.requestcatcher.com/test', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
  });
  await new Promise(resolve => setTimeout(resolve, 500));
  

  return NextResponse.json({ name: "John Doe Serverless" });
}

export const POST = verifySignatureAppRouter(handler);

// body -> parametri
// brian api call
// salvare su redis risultato brian api call con id