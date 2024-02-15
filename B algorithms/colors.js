function generateRandomString(length) {
    const letters = 'RBG';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomString += letters.charAt(randomIndex);
    }
    
    return randomString;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }

let firstRow=[]
let secondRow=[]

const columnQuantity=getRandomInt(1,10)

for(var i=0; i<columnQuantity;i++){
    firstRow.push(generateRandomString(1))
    secondRow.push(generateRandomString(1))
}

console.log(columnQuantity)
console.log(firstRow)
console.log(secondRow)

let answer = "YES";

for (let i = 0; i < firstRow.length; i++) {
        if (firstRow[i] === "R") {
            if (secondRow[i] !== "R") {
                answer = "NO";
                i = firstRow.length;
            }
        } else if (firstRow[i] !== "R") {
            if( secondRow[i] === "R"){
                answer = "NO";
                i = firstRow.length;
                j = secondRow.length;
            }
        }
}


console.log(answer);
