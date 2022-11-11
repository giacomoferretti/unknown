import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const example = await prisma.qrCodes.upsert({
    where: { slug: "qr" },
    update: {},
    create: {
      slug: "qr",
    },
  });

  console.log({ example });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
