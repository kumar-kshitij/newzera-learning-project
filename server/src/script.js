const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      id: 1,
      name: 'Byung ho',
      occupation: 'Photographer',
      website: 'www.hoarts.com'
    }
  })
  console.log('new user created :', newUser)
}

main()
  .catch((e) => {
    console.log(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
