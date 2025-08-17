import { PrismaClient } from "@prisma/client";
import lanchoneteData from './json/lanchonete.json';

const prisma = new PrismaClient();

async function main() {
  console.log("🔼 PRISMA SEED");

  console.log('SEED FOOD MENU PRODUCT');
  
  await prisma.foodMenuProduct.deleteMany();

  await prisma.foodMenuProduct.createMany({
    data: lanchoneteData.map((product) => product)
  });

  console.log("✅ PRISMA SEED SUCCESS");
}

main()
  .catch((e) => {
    console.error("❌ PRISMA SEED ERROR", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });