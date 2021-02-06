function makeIntoBinary(num){
    let stack = [],
        remainder,
        binaryString = '';
    
    while(num > 0){
        remainder = Math.floor(num % 2);
        stack.push(num);
        num = Math.floor(num % 2);
    }

    while(!stack.length === 0){
        binaryString += stack.pop().toString();
    }

    return binaryString;
}

console.log(makeIntoBinary(21));