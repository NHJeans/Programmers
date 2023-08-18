function solution(s) {
    const obj = {};
    const splited = s.split('');

    return splited.map((v, i) => {
        if (obj[v] !== undefined) {
            const result = i - obj[v];
            obj[v] = i;
            return result;
        } else {
            obj[v] = i;
            return -1;
        }
    });
}