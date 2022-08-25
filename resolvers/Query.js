const { usersList, profiles } = require('../data/db')

const { userIndex } = require('../functions/user-index')

module.exports = {
  users() {
    return usersList
  },

  getUser(_, { filter }) {
    const selectedUser = userIndex(filter)

    if (selectedUser < 0) null

    return usersList[selectedUser]

    // const selected = usersList
    //   .filter(u => u.id === id)
    // return selected ? selected[0] : null

    //selected[0] pq o filter retorna um array
  },

  profiles() {
    return profiles
  },

  profile(_, { id }) {
    const selectedProfile = profiles
      .filter(p => p.id === id)

    return selectedProfile
      ? selectedProfile[0]
      : null
  }
}
