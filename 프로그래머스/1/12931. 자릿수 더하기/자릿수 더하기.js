function solution(n) {
 const array = String(n).split('')
 return array.reduce((a,c) => a + Number(c),0)}