const { nextId, usersList } = require('../data/db')

module.exports = {
  newUser(_, args) {

    const emailAlreadyUsed = usersList.some(e => e.email === args.email)

    if (emailAlreadyUsed) {
      throw new Error(`E-mail ${args.email} já cadastrado!`)
    }

    const newUser = {
      id: nextId(),
      ...args,
      profile: 1,
      status: 'ACTIVE',
    }

    usersList.push(newUser)
    return newUser
  }
}
