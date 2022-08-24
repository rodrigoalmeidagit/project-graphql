const { usersList, profiles } = require('../data/db')

module.exports = {
  users() {
    return usersList
  },

  getUser(_, { id }) {
    const selected = usersList
      .filter(u => u.id === id)
    return selected ? selected[0] : null
  },

  profiles() {
    return profiles
  },

  profile(_, { id }) {
    const selectedProfile = profiles
      .filter(p => p.id === id)
    return selectedProfile ? selectedProfile[0] : null
  }
}