function solution(numbers) {
    let sortedNum = numbers.sort((a, b) => b - a);
    return sortedNum[0] * sortedNum[1]
    }
   