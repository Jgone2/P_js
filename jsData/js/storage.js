const user = {
  name: 'Jaegon',
  age: 85,
  emails: [
    'Amy@gmail.com',
    'neo@zillinks.com'
  ]
}

// localStorage.setItem('user', user)
// localStorage.setItem('user1', JSON.stringify(user))
// console.log(localStorage.getItem('user1'))
// console.log(JSON.parse(localStorage.getItem('user1')))
const str = localStorage.getItem('user1')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user1', JSON.stringify(obj))

// localStorage.removeItem('user')