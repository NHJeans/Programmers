function solution(money) {
    let coffeeMax = Math.floor(money / 5500);
    let change = money % 5500;
    return [coffeeMax, change];
}