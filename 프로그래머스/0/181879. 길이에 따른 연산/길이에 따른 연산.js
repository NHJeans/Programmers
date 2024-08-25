function solution(num_list) {
    const listLength = num_list.length >= 11;
    const listSum = num_list.reduce((acc, cur) => 
    listLength ? acc + cur : acc * cur, listLength ? 0 : 1);
    return listSum;
}