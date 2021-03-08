
const twoSum = function(nums, target) {
    let answer = [];

    for(let i = 0; i<nums.length; i++){
        for(let k = i+1; k<nums.length; k++){
            
            if(nums[i] + nums[k] === target){
                answer.push(i);
                answer.push(k);
                return answer;
            }else{
                continue;
            }
        }
    }
};