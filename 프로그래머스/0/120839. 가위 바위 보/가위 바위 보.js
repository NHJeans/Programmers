function solution(rsp) {
    const winMap = {
        '2': '0', 
        '0': '5',
        '5': '2'  
    };
    let result = [];

    for (let char of rsp) {
        result.push(winMap[char]);
    }
    return result.join('');
}
