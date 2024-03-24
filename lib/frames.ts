import { createFrames } from "frames.js/next";
import { pinataFdk } from "./pinata";
import { vercelURL } from "../app/utils";

export const frames = createFrames({
  basePath: "/",
  middleware: [
    async (ctx, next) => {
      console.log("Middleware");
      const url = new URL(ctx.request.url);
      const body = await ctx.request
        .clone()
        .json()
        .catch(() => {
          throw new Error("Invalid body");
        });
      console.log(body);
      if (vercelURL().includes("localhost")) {
        return next();
      }
      const { isValid } = await pinataFdk.validateFrameMessage(body);
      if (!isValid) {
        console.error("Invalid frame message", body, url.pathname);
        throw new Error("Invalid frame message");
      }
      console.log("Sending analytics", body, url.pathname);
      try {
        await pinataFdk.sendAnalytics("brian-frame", body, url.pathname);
      } catch (e) {
        console.error("Analytics error", e);
        throw e;
      }
      console.log("Sent analytics");
      return next();
    },
  ],
});
