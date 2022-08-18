let id = 1
function nextId() {
  return id++
}


const usersList = [{
  id: nextId(),
  name: 'Rodrigo Almeida',
  email: 'row@row.com',
  age: 40,
  wage_real: 15.000,
  vip: true,
  profile: 1,
  status: "ACTIVE"
},
{
  id: nextId(),
  name: 'Irma Almeida',
  email: 'irma@row.com',
  age: 68,
  wage_real: 5.000,
  vip: true,
  profile: 2,
  status: "INATIVE"
},
{
  id: nextId(),
  name: 'Nereu Almeida',
  email: 'nereu@row.com',
  age: 75,
  wage_real: 10.000,
  vip: true,
  profile: 1,
  status: "BLOCK"
}
];

const profiles = [
  {
    id: 1,
    profile: 'basic'
  },
  {
    id: 2,
    profile: 'administrator'
  }
]

module.exports = { usersList, profiles, nextId }
