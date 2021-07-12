import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'Jaegon'},
  { userId: '2', name: 'Winter'}
]

const usersB = [
  { userId: '1', name: 'Jaegon'},
  { userId: '3', name: 'Minjoo'}
]

const usersC = usersA.concat(usersB)
console.log('concat: ', usersC)
console.log('uniqBy: ', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy: ', usersD)

const users = [
  { userId: '1', name: 'Jaegon' },
  { userId: '2', name: 'Winter' },
  { userId: '3', name: 'Saerok' },
  { userId: '4', name: 'Minjoo' },
  { userId: '5', name: 'Yeonwoo' }
]

const foundUser = _.find(users, { name: 'Saerok' })
const foundUserIndex = _.findIndex(users, { name: 'Saerok' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'Jaegon' })
console.log(users)