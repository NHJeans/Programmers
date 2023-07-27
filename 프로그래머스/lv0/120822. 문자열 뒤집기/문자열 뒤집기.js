function solution(my_string) {
    let newArray = [];
    my_string.split('').forEach((c) => {
    newArray.unshift(c); 
});
    return newArray.join('');
}