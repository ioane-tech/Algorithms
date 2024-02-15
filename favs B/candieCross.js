function generateRandomString(length) {
    const letters = 'LRUD';
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

const moveNum=getRandomInt(1,15)

let moveList=[]
for(var i=0; i<moveNum;i++){
    moveList.push(generateRandomString(1))
}
console.log(moveNum)
console.log(moveList)


let isUp=0
let isRight=0

moveList.map((value,index)=>{
    if(value==="R"){
        isRight+=1
    }
    else if(value==="U"){
        isUp+=1
    }
    else if(value==="D"){
        isUp-=1
    }
    else{
        isRight-=1
    }
})
if(isUp===1 && isRight===1){
    console.log("YES")
}else{
    console.log("NO")
}