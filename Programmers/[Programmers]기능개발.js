function solution(progresses, speeds) {
    let answer = [0]; // answer[0]초기값 필요하므로 0으로 셋팅
    let daysOfLeft = []; //남은 일수를 담을 배열
    
    //남은 일수를 새로운 배열로 만듬
    for(let i = 0; i<progresses.length; i++){
        let days = Math.ceil((100 - progresses[i]) / speeds[i]);
        daysOfLeft.push(days);
    }
    
    
    let maxDays = daysOfLeft[0]; //기능 순서 맨 앞에서부터 진행되어야 하므로 daysOfLeft[0] 넣어줌
    for(let i = 0, j = 0; i < daysOfLeft.length; i++){
        //현재 남은일수보다 maxDays가 크거가 같을때 
        if(maxDays >= daysOfLeft[i]){
            answer[j] += 1; // 이미 완료되었거나 진행되어야 하는 차례이므로 1더해줌
        }else{ // 현재 남은일수보다 maxDays가 작을 때 (
            maxDays = daysOfLeft[i]; // 현재 진행중인 작업이 maxDays 이므로
            j++; //answer에 새로운 index 추가
            answer[j] = 1; //새로운 index값에 1할당해줌
        } 
    }
    
    return answer;
}