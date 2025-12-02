import { PrismaClient } from "@prisma/client";
import lanchoneteData from './json/lanchonete.json';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log("🔼 PRISMA SEED");

  console.log('• SEED FOOD MENU PRODUCT');
  
  await prisma.foodMenuProduct.deleteMany();

  await prisma.foodMenuProduct.createMany({
    data: lanchoneteData.map((product) => product)
  });

  const userAdmin = await prisma.user.findFirst({ where: { cpf: '00000000000' } });

  if(!userAdmin){
    console.log('• SEED - USER ADMIN');

    const password = await bcrypt.hash('123456', 10);

    await prisma.user.create({ data: {
      cpf: '00000000000',
      name: 'Administrador do Sistema',
      password: password,
    }});
  }

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