function solution(n) {
    let sqrtNum = Math.sqrt(n)
    if (sqrtNum === Math.floor(sqrtNum)) {
        return (sqrtNum + 1) * (sqrtNum + 1)
    } else 
        return -1
}