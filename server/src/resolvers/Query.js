async function user(parent, args, context, info) {
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        id: args.id
      }
    })
    return user
  } catch (error) {
    console.log(error)
  }
  return null
}

module.exports = {
  user
}
