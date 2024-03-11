var arraySign = function(nums) {
    let answer = 0
    let product = 1

    for(var i = 0; i < nums.length; i++){
        product *= nums[i]
    }
    if(product > 0){
        answer = 1
    }else if(product == 0){
        answer = 0
    }else if(product < 0){
        answer = -1
    }
    return answer
};

console.log(arraySign([-1,-2,-3,-4,3,2,1]))