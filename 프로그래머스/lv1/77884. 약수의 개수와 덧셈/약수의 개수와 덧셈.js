function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i <= right; i++) {
        let Count = 0;   
        // i의 약수를 찾아 약수 개수를 계산
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                Count++;
            }
        }
        if (Count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}
