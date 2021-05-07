function solution(n, times) {
    times.sort((a,b) => a-b); // 이진탐색을 위해선 배열 정렬되어 있어야 하므로
    
    let min = 1,
        max = times[times.length-1] * n, //가장오래걸리는 심사관 * 심사 받을 사람 인원
        mid = Math.floor((min+max)/2); // 최솟값과 최대값의 중간값
    
    while(min <= max){
            //mid분 동안 입국심사 받는 인원 구하기
            const people = times.reduce((acc, time) => acc + Math.floor(mid/time),0);
            
            if(people >= n){ // 주어진 인원 수 보다 클 때
                max = mid - 1; 
            }else{ // 주어진 인원 수 보다 작을 때
                min = mid + 1;
            }
            
            mid = mid = Math.floor((min+max)/2); //중간값 다시 구해줌
    }
    
    return min; // 최소시간을 구하는 문제였으므로 min return
}