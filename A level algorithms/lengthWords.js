var lengthOfLastWord = function(s) {
    let answer = 0
    let wordsList = s.split(" ")
console.log(wordsList)
    let nonLetterRegex = /^[a-zA-Z]+$/
    for(var i = wordsList.length-1; i >= 0; i--){
        if( nonLetterRegex.test(wordsList[i])){
            answer = wordsList[i].length
            break;
        }else{
            wordsList.pop()
            console.log(wordsList)
        }
    }
  
    
    return answer
};

console.log(lengthOfLastWord("my name is ioane  "))