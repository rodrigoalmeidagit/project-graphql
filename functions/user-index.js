const { usersList } = require('../data/db')

function userIndex(filter) {
  if (!filter) -1

  const { id, email } = filter;
  if (id) {
    return usersList.findIndex(u => u.id === id)
  } else if (email) {
    return usersList.findIndex(u => u.email === email)
  }

  return -1
}

module.exports = {
  userIndex
}