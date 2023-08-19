function solution(price, money, count) {
  let total = 0;
    
  for (let i = 1; i <= count; i++) {
    total += price * i;
  } 
  let result = total - money;
  
  if (result < 0) {
    result = 0;
  }
  return result;
}
