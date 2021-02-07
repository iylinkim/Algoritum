function hanoi(n, from, to, temp){
    if(n >= 1){
        hanoi(n-1, from, temp, to);
        console.log(`${from}기둥에서 맨위의 블럭을 ${to}기둥으로 이동`);
        hanoi(n-1, temp, to, from);
    }
}
hanoi(4,'A','C','B');

