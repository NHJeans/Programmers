function solution(price) {
    if (price >= 500000) {
        price -= price * 0.2; // 20% 할인
    } else if (price >= 300000) {
        price -= price * 0.1; // 10% 할인
    } else if (price >= 100000) {
        price -= price * 0.05; // 5% 할인
    }
    return Math.floor(price);
}