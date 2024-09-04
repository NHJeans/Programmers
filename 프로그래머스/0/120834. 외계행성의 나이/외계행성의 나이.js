function solution(age) {
    let alphabet = "abcdefghij";
    let answer = '';
    
    for (let digit of String(age)) {
        answer += alphabet[digit];
    }
    
    return answer;
}