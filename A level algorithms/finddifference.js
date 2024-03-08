var findTheDifference = function(s, t) {
    let answer = ''

    for(var i = 0; i < t.length; i++){
        if(s.includes(t[i])){
            
            s = s.replace(t[i],"")
            continue;
        }else{
            answer = t[i]
            break;
        }
    }
    return answer
};

console.log(findTheDifference("abc","abcd"))