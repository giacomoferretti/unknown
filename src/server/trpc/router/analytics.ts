import { z } from "zod";

import { publicProcedure, router } from "../trpc";

export const analyticsRouter = router({
  getBySlug: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.qrCodes.findFirst({ where: { slug: { equals: input } } });
  }),
  // hello: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? "world"}`,
  //     };
  //   }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
});
