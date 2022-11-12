import { router } from "../trpc";
import { analyticsRouter } from "./analytics";

export const appRouter = router({
  analytics: analyticsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
