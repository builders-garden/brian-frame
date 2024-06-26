import { headers } from "next/headers";

export function currentURL(pathname: string): URL {
  const headersList = headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  try {
    return new URL(pathname, `${protocol}://${host}`);
  } catch (error) {
    return new URL("http://localhost:3001");
  }
}

export function vercelURL() {
  return process.env.VERCEL_URL
    ? `https://brian-frame.builders.garden`
    : "http://localhost:3001";
}
