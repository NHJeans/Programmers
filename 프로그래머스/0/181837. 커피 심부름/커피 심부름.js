function solution(order) {
    //아메리카노 4500원 // 카페라떼 5000원
    //아무거나는 아메리카노
    const prices = {
        americano: 4500,
        cafelatte: 5000
  };
  let totalAmount = 0;

  order.forEach(item => {
    if (item === 'anything') {
      totalAmount += prices.americano;
    }
    else if (item.includes('americano')) {
      totalAmount += prices.americano;
    }
    else if (item.includes('cafelatte')) {
      totalAmount += prices.cafelatte;
    }
  });

  return totalAmount;
}
