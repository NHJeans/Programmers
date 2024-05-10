function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((num, i) => {
        if (signs[i]) {
            answer += num;
        } else {
            answer -= num;
        }
    })
    return answer
}

