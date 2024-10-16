/*
Subsequence Strings Print 1 if A is a substring* of B and 0 otherwise.
*We say that a string A is a substring of a string B when
we can create A by removing some (maybe none) elements from B, 
preserving the order of remaining elements.
*/

function Subsequence(A, B){
    let isSubstring = 0

    let AString = A.split('')
    let BString = B.split('')
    
    console.log(AString)
    console.log(BString)

    let AStringIndex = 0

    for(let i = 0; i < BString.length; i ++){
        if(BString[i] == AString[AStringIndex]){
            AStringIndex +=1
        }
        if(AStringIndex > AString.length -1){
            isSubstring = 1
            break;
        }
    }

    return isSubstring
}

console.log(Subsequence("abc", 'abc'))




/*
Number of Number
A template is given. A template consists of n characters, 
each of which is either a digit or a question mark. Each question mark can be changed 
to a digit so that we obtain n digit number that fits the template. It is guaranteed that n <= 100.
Print the number of possible solutions. Return 0 if there is no question mark
*/

function NumberOfNumber(string){
    let answer = 0
    
    const chars = string.split('')

    let questionMarkCounter =  chars.filter((value)=> value == '?')    

    if(questionMarkCounter.length == 0){
        answer = 0
    }else{
        answer = Math.pow(10,questionMarkCounter.length)
    }

    return answer
}

console.log(NumberOfNumber(readline()))



