var isMonotonic = function(nums) {
    let answer = false

    for(var i = 0; i < nums.length-1; i++){
            if(nums[i]<=nums[i+1]){
                answer = true
            }else{
                answer = false
                break;
            }
    }
    if(answer==false){
        for(var i = 0; i < nums.length-1; i++){
      
            if(nums[i]>=nums[i+1]){
                answer = true
            }else{
                answer = false
                break;
            }
        }
    }
    return answer
};

console.log(isMonotonic([1,2,2,3]))