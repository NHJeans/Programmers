function solution(num_list) {
    let newArray = [];
    num_list.forEach((array) => {
        newArray.unshift(array);
    });
    return newArray;
}
