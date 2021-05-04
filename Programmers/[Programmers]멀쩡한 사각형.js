function solution(w, h) {
    
    //최대 공약수 구하는 함수
    function gcf(w, h){
        const mod = w % h; //가로길이 세로로 나눈 나머지 값
        if(mod === 0) return h; // 나머지가 0일 때 나눠준 수 (h) return
        return gcf(h,mod); //다음 계산으로 나눠준 수(h)와 나머지값 넣어줌
    }
    
    const willRemove = w + h - gcf(w, h); //사각형에서 대각선으로 이어진 사각형의 개수 구하는 공식
    return (w*h) - willRemove; // 전체 사각형 너비에서 대각선에 겹치는 사각형의 개수 빼줌
}