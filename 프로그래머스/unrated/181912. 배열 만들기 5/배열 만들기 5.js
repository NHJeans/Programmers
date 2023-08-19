function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i = 0; i < intStrs.length; i++) {
        let str = intStrs[i];
        let substr = str.substr(s, l);
        let num = parseInt(substr);
        if (num > k) {
            answer.push(num);
        }
    }
    return answer;
}