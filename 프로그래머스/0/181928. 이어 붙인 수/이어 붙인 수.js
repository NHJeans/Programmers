function solution(num_list) {
  const { odd, even } = num_list.reduce(
    (acc, num) => {
      if (num % 2 === 0) {
        acc.even += num.toString();
      } else {
        acc.odd += num.toString();
      }
      return acc;
    },
    { odd: '', even: '' }
  );

  const oddNumber = parseInt(odd, 10);
  const evenNumber = parseInt(even, 10);

  return oddNumber + evenNumber;
}