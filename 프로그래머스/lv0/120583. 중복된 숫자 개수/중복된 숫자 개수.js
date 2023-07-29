function solution(array, n) {
    // 1. 배열이 주어진다.
    // 2. n값을 찾는다.
    // 3. n값의 갯수를 return한다
    return array.filter(item => item === n).length
}