const { prisma } = require("./database.js");
const { products } =  require('./products.json');

async function main() {
  await Promise.all(
    products.map(async (product) =>
      await prisma.product.upsert({
        where: { code: product.code },
        update: {},
        create: product
      })
    )
  );
}

main()
  .then(async () => {
    console.log('Seeding successful');

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })