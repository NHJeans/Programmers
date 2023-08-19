function solution(arr, divisor) {
  var answer = [];

  arr.forEach((num) => {
    num % divisor === 0 ? answer.push(num) : null;
  })
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer.sort((a, b) => a - b);
}