const { nextId, usersList } = require('../../data/db')
const { userIndex } = require('../../functions/user-index')

module.exports = {
  newUser(_, { data }) {
    const emailAlreadyUsed = usersList.some(
      e => e.email === data.email
    )

    if (emailAlreadyUsed) {
      throw new Error(
        `E-mail ${data.email} já cadastrado!`
      )
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

  deleteUser(_, { filter }) {
    const findUser = userIndex(filter)

    if (findUser < 0) null
    const deleted = usersList.splice(findUser, 1)

    return deleted ? deleted[0] : null
  },

  updateUser(_, { filter, data }) {
    const findUser = userIndex(filter)

    if (findUser < 0) null

    usersList[findUser].name = data.name
    usersList[findUser].email = data.email
    usersList[findUser].age = data.age

    // const userUpdated = {
    //   ...usersList[findUser],
    //   ...data
    // }
    // usersList.splice(findUser, 1, userUpdated)

    return usersList[findUser]
  }
}
