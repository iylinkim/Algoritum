function solution(n) {
    const rem = ["4","1","2"];
    let answer = "";
    
    while(n > 0){
        let temp = n % 3;
        n = Math.floor(n / 3);
        
        if(temp === 0) n--;  
        
        answer = rem[temp] + answer;
    }
    return answer;
}