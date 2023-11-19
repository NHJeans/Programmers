function solution(t, p) {
    let answer = 0;
    const pNum = parseInt(p);

    for (let i = 0; i <= t.length - p.length; i++) {
        const subStr = t.substring(i, i + p.length);
        const subNum = parseInt(subStr);

        if (subNum <= pNum) {
            answer++;
        }
    }
    return answer;
}