function solution(price) {
    if(500000 <= price) {
        price *= (0.80)
    } else if(300000 <= price) {
        price *= (0.90)
    } else if(100000 <= price) {
        price *= (0.95)
    }
    return Math.floor(price);
}