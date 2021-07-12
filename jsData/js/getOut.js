import _ from 'lodash'  // From `node_modules`!
import checkType from './getType'
// import {random, userInfo as ui} from './getRandom'  // 이름을 지정해야하는 통로로 import되는 모듈은 {}안에 함수명을 사용하여야함. 여러곳에서 사용가능
import * as R from './getRandom'  // 와일드카드(Wildcard Character, *)는 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호를 가리킨다.

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
// console.log(random(), random())
// console.log(ui)
console.log(R)