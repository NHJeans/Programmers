function solution(n, k) {
    let yang = n * 12000;
    let drink = k * 2000;
    let dicountEvent = Math.floor(n / 10) * 2000; 
    return yang + drink - dicountEvent;
}
