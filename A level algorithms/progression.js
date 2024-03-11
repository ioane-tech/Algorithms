var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b)=> a - b)
    console.log(arr)
    let answer = true
    for(var i = 0; i < arr.length-2; i++){
        if(Math.abs(arr[i+1] - arr[i]) === Math.abs(arr[i+2] - arr[i+1])){
            answer = true
        }else{
            answer = false 
            break;
        }
    }
    return answer
};

console.log(canMakeArithmeticProgression([-68,-96,-12,-40,16]))