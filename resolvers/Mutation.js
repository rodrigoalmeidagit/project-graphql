const { nextId, usersList } = require('../data/db')

module.exports = {
  newUser(_, { name, email, age }) {
    const newUser = {
      id: nextId(),
      name,
      email,
      age,
      profile: 1,
      status: 'ACTIVE',
    }

    usersList.push(newUser)
    return newUser
  }
}
