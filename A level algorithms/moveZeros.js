var moveZeroes = function(nums) {
    let zeroCOunter = 0
    for(var i = 0 ; i < nums.length; i++){
        if(nums[i]=== 0){
            nums.splice(i,1)
            nums.push(0)
            i = -1
        }
    }
    return nums
};
console.log(moveZeroes([0,1,0,3,12]))