// function converter(targetNum, base){
//     let stack = [],
//         rem,
//         str = '',
//         digits = '0123456789ABCDEF';

//     while(targetNum > 0){
//         rem = Math.floor(targetNum % base);
//         stack.push(rem);
//         targetNum = Math.floor(targetNum / base);
//     }
//     // console.log(stack);
//     while(stack.length){
//         str += digits[stack.pop()];
//     }

//     return str;
// }

// console.log(converter(20,5));

function converter(num, base) {
  let stack = [],
    rem,
    str = "",
    digits = '0123456789ABCDEF';

  while (num > 0) {
    rem = Math.floor(num % base);
    stack.push(rem);
    num = Math.floor(num / base);
  }

  console.log(stack);
  while (stack.length) {
    str += digits[stack.pop()];
  }

  return str;
}

console.log(converter(29, 8));
