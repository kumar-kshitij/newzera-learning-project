const fs = require('fs')
const path = require('path')

async function addProfilePicture(parent, args, context, info) {
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        id: args.id
      }
    })
    if (!user)
      return {
        success: false,
        user: null
      }

    let picURL = null

    if (args.pic) {
      const { createReadStream, filename } = await args.pic

      const newFilename = filename.replace('rn_image_picker_lib_temp_', '')

      await new Promise((resolve, reject) => {
        const stream = createReadStream()
        stream.pipe(fs.createWriteStream(path.join(__dirname, '../../public', newFilename)))
        stream.on('end', resolve)
        stream.on('error', reject)
      })

      picURL = '/static/' + newFilename
    }

    const updateUser = await context.prisma.user.update({
      where: {
        id: args.id
      },
      data: {
        picURL
      }
    })

    return {
      success: true,
      user: updateUser
    }
  } catch (error) {
    console.log(error)
  }
  return {
    success: false,
    user: null
  }
}

module.exports = {
  addProfilePicture
}
