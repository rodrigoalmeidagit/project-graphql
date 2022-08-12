const { profiles } = require('../data/db')

module.exports = {
  wage(user) {
    return user.wage_real
  },
  profile(user) {
    const selectedProfile = profiles.filter(p => p.id === user.profile)
    return selectedProfile ? selectedProfile[0] : null
  }
}