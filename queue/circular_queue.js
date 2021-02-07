const nameList = ['Camila','Melvin','Max','Jenny','Reina','Julie'];

function hotPotato(nameList, num){
    const group = [];
    let eliminated = '';

    nameList.forEach(people => group.push(people));

    while(group.length > 1){
        for(let i = 0; i<num; i++){
            group.push(group.shift());
        }
        console.log(group);
        eliminated = group.shift();
        console.log(`${eliminated}(을)를 게임에서 퇴장시킵니다.`);
    }
    return group.shift();
}

const winner = hotPotato(nameList, 7);
console.log(`승자는 ${winner}입니다.`);
