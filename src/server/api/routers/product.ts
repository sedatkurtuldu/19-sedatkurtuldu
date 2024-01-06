
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

});
