function solution(n){
    let binaryString = '';
    let arr = [];
    let remainder;

    while(n > 0){
        remainder = Math.floor(n%2);
        arr.push(remainder);
        n = Math.floor(n/2);
    }

    while(arr.length !== 0){
        binaryString += arr.pop().toString();
    }
    return binaryString;
}

console.log('binary number: ' + solution(21));
