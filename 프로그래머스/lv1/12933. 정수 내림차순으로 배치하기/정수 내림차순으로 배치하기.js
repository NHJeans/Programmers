function solution(n) {
    let number = n.toString().split('') 
    let sortedNum = number.sort((a, b) => b - a);
    return parseInt(sortedNum.join(''))
}