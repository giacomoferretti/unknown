import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/server/db/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;

    res.send(JSON.stringify({ success: false, error: "no slug" }));

    return;
  }

  const data = await prisma.qrCodes.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ success: false, error: "slug not found" }));

    return;
  }

  await prisma.qrCodes.update({
    where: { slug: slug },
    data: { hits: { increment: 1 } },
  });

  return res.json({ success: true, data: "ok" });
};

export default handler;
