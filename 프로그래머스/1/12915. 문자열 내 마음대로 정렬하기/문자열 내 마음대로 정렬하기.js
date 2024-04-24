function solution(strings, n) {
    return strings.map(i => i[n] + i).sort().map(i => i.slice(1));
}