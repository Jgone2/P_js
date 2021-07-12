// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법
// 문자 데이터로만 관리됨.

import myData from '../myData.json'

console.log(myData)

const user = {
  name: 'Jaegon',
  age: 85,
  emails: [
    'Amy@gmail.com',
    'neo@zillinks.com'
  ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str) // js의 실제 데이터로 다시 분석
console.log('obj', obj)