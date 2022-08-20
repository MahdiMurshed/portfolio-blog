import * as trpc from "@trpc/server";
import { getData } from "../../utils/utility";
export const appRouter = trpc.router().query("getPosts", {
  async resolve() {
    return getData();
  },
});

export type AppRouter = typeof appRouter;
