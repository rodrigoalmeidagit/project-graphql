const { profiles } = require('../../data/db')

module.exports = {
  profile(user) {
    const selectedProfile = profiles.filter(p => p.id === user.profile)
    return selectedProfile ? selectedProfile[0] : null
  }
}