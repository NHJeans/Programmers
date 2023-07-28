function solution(my_string) {
    // /[배열]/ 정규 표현식의 시작과 끝을 나타내는 구분자
    return my_string.replace(/['a','e','i','o','u']/g,'')
}
