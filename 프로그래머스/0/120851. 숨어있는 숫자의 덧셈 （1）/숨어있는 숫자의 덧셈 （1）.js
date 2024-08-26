function solution(my_string) {
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    return my_string
        .split('')                 
        .filter(char => num.includes(char))
        .reduce((sum, n) => sum + Number(n), 0);
}