function solution(n) {
    // 최대공약수를 구하는 함수
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    // 최소공배수를 구하는 함수
    const lcm = (a, b) => (a * b) / gcd(a, b);
    // n과 6의 최소공배수를 구하고, 이를 6으로 나눈 값이 피자 판 수
    return lcm(n, 6) / 6;
}