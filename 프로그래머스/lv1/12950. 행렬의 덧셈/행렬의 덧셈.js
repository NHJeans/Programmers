function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((e, j) => e + arr2[i][j]));
}