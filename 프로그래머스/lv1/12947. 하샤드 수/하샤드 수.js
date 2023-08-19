function solution(x) {
    let sum = 0
    let splitNum = x.toString().split('').map(Number)
    splitNum.forEach((i) => {
        sum += i;
    }) 
    return x % sum === 0 ? true : false
}