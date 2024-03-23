import { NextRequest, NextResponse } from "next/server";
import { createNewBrianTask } from "../../../lib/qstash-write";

export const POST = async (req: NextRequest) => {
  const secret = req.headers.get("x-secret");
  if (secret !== process.env.SECRET) {
    return NextResponse.json({
      success: false,
      message: "Invalid secret",
    });
  }
  const body = await req.json();
  const { prompt, address, id } = body;
  console.log("Creating task...", {
    id,
    prompt,
    address,
  });
  if (!prompt || !address || !id) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing required body parameters",
      },
      {
        status: 400,
      }
    );
  }

  await createNewBrianTask(id, prompt, address);

  return NextResponse.json({ success: true });
};
