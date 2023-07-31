function solution(n) {
    let sum = 0;
    let numString = n.toString();

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }

    return sum;
}



