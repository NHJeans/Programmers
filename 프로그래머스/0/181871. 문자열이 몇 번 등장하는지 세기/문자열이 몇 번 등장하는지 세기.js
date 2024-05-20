function solution(myString, pat) {
  let count = 0;
  let patLen = pat.length;

  for (let i = 0; i <= myString.length - patLen; i++) {
    console.log(myString.length - patLen)
    if (myString.slice(i, i + patLen) === pat) {
      console.log('i=>',i,'i + patLen =>', i + patLen)
      count++;
    }
  }

  return count;
}