var romanToInt = function(s) {
    let answer = 0;
    let roman = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    
    let i = s.length -1;
    while(i >= 0){
        if(roman[s[i]] > roman[s[i-1]]){ // 뒤의 숫자가 앞의 숫자보다 클 때 (예외 규칙 거르는 조건)
            answer += roman[s[i]] - roman[s[i-1]];
            i --; // 두 숫자의 차를 더해주었으므로 인덱스 - 1 해주어야함
        }else{ //예외 규칙이 아닐 땐 해당 숫자 더해줌
            if(roman[s[i]]) answer += roman[s[i]];
        }
        i--;
    }
    
    return answer;
};