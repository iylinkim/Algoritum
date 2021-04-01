const permute = (nums) => {
	let result = [];
    
    const permutation = (arr, tempArr = []) => {
    	if(arr.length === 0){
        	result.push(tempArr);
        }
        
        for(let i = 0; i<arr.length; i++){
        	let curr = arr.slice();
            let next = curr.splice(i,1);
            permutation(curr, tempArr.concat(next));
        }
    }
    
    permutation(nums);
    
    return result;
}