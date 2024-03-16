var judgeCircle = function(moves) {
    let moveUp = 0
    let moveLeft = 0
    let answer = false
    for(var i = 0; i < moves.length; i++){
        if(moves[i]== "U"){
            moveUp+=1
        }else if(moves[i]== "D"){
            moveUp-=1
        }else if(moves[i]== "L"){
            moveLeft +=1
        }else if(moves[i]== "R"){
            moveLeft -=1
        }
    }
    if(moveLeft === 0 && moveUp === 0){
        answer = true
    }
    return answer
};

console.log(judgeCircle(["U","D"]))