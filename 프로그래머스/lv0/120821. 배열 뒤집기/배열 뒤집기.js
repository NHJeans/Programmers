function solution(num_list) {
    let newArray = [];
    num_list.forEach((i) => {
        newArray.unshift(i);
    });
    return newArray;
}
