var mergeAlternately = function(word1, word2) {
    var answer = ''

    var bigestlength = 0
    if(word1.length>word2.length){
        bigestlength = word1.length
    }else{
        bigestlength = word2.length
    }
    for(var i = 0; i<bigestlength; i++){
        if(word1[i]){
            answer += word1[i]
        }
        if(word2[i]){
            answer += word2[i]
        }
       
    }

    return answer

};

console.log(mergeAlternately("abc","dfgt"))