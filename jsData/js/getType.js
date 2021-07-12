export default function(data) { // default: 기본통로로 나가는 모듈. 이름 없어도됨. 하나의 파일에서 하나만 내보낼 수 있음
  return Object.prototype.toString.call(data).slice(8, -1)
}