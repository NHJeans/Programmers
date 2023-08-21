function solution(arr, divisor) {
  var answer = [];

  arr.forEach((num) => {
    num % divisor === 0 && answer.push(num);
  })
   return (answer.length === 0) ? [-1] : answer.sort((a,b)=>a-b)
}


