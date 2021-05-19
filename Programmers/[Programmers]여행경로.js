function solution(tickets){
   let path = {};
   let answer = [];
    
    for(let i = 0; i<tickets.length; i++){
        const departure = tickets[i][0]; //출발지
        const arrival = tickets[i][1]; //도착지
        
        if(path[departure]){ //만약 저장된 정보가 있다면
            path[departure].push(arrival); //기존배열에 도착지 추가로 넣어줌
        }else{ //만약 저장된 정보가 없다면
            path[departure] = [arrival]; //새 배열안에 도착지 넣어서 값으로 할당
        }
    }
    
    for(const x in path){
        path[x].sort(); //path 객체 돌면서 각 배열 정렬
    }
    
    const dfs = (current) => {
        const location = path[current]; //현재 위치에서 갈 수 있는 경로들의 배열
        
        while(location && location.length){
            dfs(location.shift())
        }
        
        answer.push(current); // 경로들의 배열이 비어있다면 answer에 현재 위치 push (모든 경로를 다 탐방했을 때)
    }
    
    dfs("ICN"); //ICN 공항이 항상 출발지 이기 때문에
    return answer.reverse(); //가장 마지막 경로부터 answer에 push 해주었으므로
}