var strStr = function(haystack, needle) {
    let answer = 0
    if(haystack.includes(needle)){
        answer = haystack.indexOf(needle)
        return answer
    }else{
        answer = -1
    }
    return answer
};

console.log(strStr("sadbaddr","sad"))