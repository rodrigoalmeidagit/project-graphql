const { nextId, usersList } = require('../data/db')

module.exports = {
  newUser(_, { data }) {

    const emailAlreadyUsed = usersList.some(e => e.email === data.email)

    if (emailAlreadyUsed) {
      throw new Error(`E-mail ${data.email} já cadastrado!`)
    }

    const newUser = {
      id: nextId(),
      ...data,
      profile: 1,
      status: 'ACTIVE',
    }

    usersList.push(newUser)
    return newUser
  },

  deleteUser(_, { id }) {
    const findUser = usersList.findIndex(u => u.id === id)

    if (findUser < 0) null

    const deleted = usersList.splice(findUser, 1)

    return deleted ? deleted[0] : null
  },

  updateUser(_, args) {
    const findUser = usersList.findIndex(u => u.id === args.id)

    if (findUser < 0) null

    const userUpdated = {
      ...usersList[findUser],
      ...args
    }

    usersList.splice(findUser, 1, userUpdated)

    return userUpdated
  }
}
