function solution(sides) {
    //1. sides의 길이는 3
    //2. 3개의 index중에 가장 큰 값 선별
    //3. 이외의 2개의 값에서 더한 값이 가장 큰 값보다 크면 리턴 1
    //4. 가장 큰 값이 더한 두변의 길이보다 크면 리턴 2
    sides.sort((a, b) => a - b);
    if (sides[0] + sides[1] > sides[2]){
        return 1
    } else 
        return 2
}
