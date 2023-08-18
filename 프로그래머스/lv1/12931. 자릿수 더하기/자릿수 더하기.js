function solution(n) {
    let array = String(n).split('').map(Number);
    let sum = 0;
    
    array.forEach(num => {
        sum += num;
    });
    return sum;
}