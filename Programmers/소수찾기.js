function solution(numbers) {
    let answer = 0;
    
    // 만들어진 조합을 저장할 Set(중복 값을 제외해야 하므로 Set을 이용함)
    let nums = new Set();
    
    // numbers가 문자열로 주어지기 때문에 배열로 만들어줌
    numbers = numbers.split('');
    
    // 소수인지 아닌지를 판별하는 함수
    const isPrime = n => {
        if(n < 2){
            return false;
        }
        for(let i = 2; i<= Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            } 
        }
        return true;
    }
    
    // 모든 경우의 수 구하는 함수
    const permutation = (curr, numberArr) => {
        if(curr.length > 0){ // curr이 있을 때 (여기서 curr은 만들어진 숫자 조합)
            if(!nums.has(Number(curr))){ //Set에 존재하지 않는다면
                nums.add(Number(curr)); //Set에 추가해줌
                if(isPrime(Number(curr))){ // curr이 소수라면
                	// answer 1만큼 증가시켜줌
                    answer++; 
                };
            }
        }
        
        for(let i = 0; i<numberArr.length; i++){
        	// numberArr과 동일한 배열 slice로 만듬
            let tempArr = numberArr.slice(0);
            
            // 원소 하나씩 순서대로 자름
            tempArr.splice(i,1);
            
            // curr = 받아온 문자열 curr과 numberArr의 현재 인덱스에 위치한 숫자 더해준 값
            // numberArr = 복사한 numberArr(tempArr), splice로 잘린 상태임
            permutation(curr+numberArr[i], tempArr);
        }
    }
    
    // curr의 초기값은 '' 빈 문자열임
    permutation('', numbers);
    
    return answer;
}