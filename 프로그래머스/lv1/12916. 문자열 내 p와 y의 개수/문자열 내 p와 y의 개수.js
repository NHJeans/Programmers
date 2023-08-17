function solution(s) {
    let result = s.toLowerCase();
    return result.split('p').length === result.split('y').length ? true : false
    
}