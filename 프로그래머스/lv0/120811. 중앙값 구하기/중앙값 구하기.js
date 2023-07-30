function solution(array) {
    let sorted_num = array.sort((a, b) => a - b);
    let mid_num = Math.floor(sorted_num.length / 2);
    return sorted_num[mid_num]
}