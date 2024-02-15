function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
}


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function generateRandomString(length) {
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomString += letters.charAt(randomIndex);
    }
    
    return randomString;
}
const lettersList=letters.split("")


let numOfLetters=getRandomInt(1,7)
let testString=[]
for(var i=0;i<numOfLetters;i++){
    testString.push(generateRandomString(1))
}
console.log(numOfLetters)
testString.sort()
console.log(testString)


let answerCounter=0
let countback=numOfLetters
for(var i=0;i<numOfLetters;i++){
    if(countback===0){
        break
    }
    for(var j=0;j<lettersList.length;j++){
        if(testString[0]===lettersList[j]){
            answerCounter+=1

            const countA = testString.filter(letter => letter === testString[i]).length;
            countback-=countA

            const lettersToRemove = testString[0];
            const filteredLetters = testString.filter(letter => !lettersToRemove.includes(letter));
            testString=filteredLetters
            if(testString.length===0){
                break
            }
        }else{
            answerCounter+=1
        }
    }
}
console.log(answerCounter)    
