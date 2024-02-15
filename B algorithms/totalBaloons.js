function generateRandomString(length) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomString += letters.charAt(randomIndex);
    }
    
    return randomString;
}


const randomString = generateRandomString(5);
console.log(randomString);


let totalBaloonsCounter=0
let firstlySolvedList=[]
for (let i = 0; i < randomString.length; i++) {
    if(!firstlySolvedList.includes(randomString[i])){
        firstlySolvedList.push(randomString[i])
        totalBaloonsCounter+=2
    }else{
        totalBaloonsCounter+=1
    }
}
console.log(totalBaloonsCounter)