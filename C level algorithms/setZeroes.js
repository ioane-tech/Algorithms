var setZeroes = function(matrix) {
    let answer = matrix.map(row => [...row])

    for(var j = 0; j < matrix.length; j++){
        for(var i = 0; i < matrix[j].length; i++){
            if(matrix[j][i] === 0){
                answer[j].fill(0)
                for(const eachZero of answer){
                    eachZero[i] = 0
                }
                break;
            }
        }
    }
    return answer
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))