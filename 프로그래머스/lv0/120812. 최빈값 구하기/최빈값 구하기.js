
function solution(array) {
let m = new Map();
//array = [1, 2, 3, 3, 3, 4]
for (let n of array) m.set(n, (m.get(n) || 0)+1);
console.log(m);
//Map(4) { 1 => 1, 2 => 1, 3 => 3, 4 => 1 }
console.log([...m]);
//[ [ 1, 1 ], [ 2, 1 ], [ 3, 3 ], [ 4, 1 ] ]

m = [...m].sort((a,b)=>b[1]-a[1]);//내림차순
console.log(m);
//[ [ 3, 3 ], [ 1, 3 ], [ 2, 1 ], [ 4, 1 ] ]
//[[1,1]]
//[[3,2]]
//적어도 숫자가 2개이상이여야
// if(m.length ===1){
// return m[0][0];
// }else if(m[0][1]!==m[1][1]){
// return m[0][0]
// }else if(m[0][1]===m[1][1]){
// return -1;
// }

return (m.length === 1 || m[0][1] > m[1][1]) ? m[0][0] : -1;

}

//console.log([...myMap]);// [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]

console.log(solution([1, 2, 3, 3, 3, 4]));//3
// console.log(solution([1, 1, 2, 2]));//-1
// console.log(solution([1]));//1


// const myMap = new Map();
// myMap.set('one',1);
// myMap.get('one')=1
// myMap.set('two',2);
// myMap.set('three',3);


// console.log(myMap);//Map(3) { 'one' => 1, 'two' => 2, 'three' => 3 }
// console.log(...myMap);//[ 'one', 1 ] [ 'two', 2 ] [ 'three', 3 ]
// console.log([...myMap]);// [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]
