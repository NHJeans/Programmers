function solution(num_list) {
    let odd = 0; // 홀수합
    let even = 0; // 짝수합

    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            even += num_list[i];
        } else {
            odd += num_list[i];
        }
    }
    return (odd > even) ? odd : even;
}
