function randomInt(min,max){
    min=Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)+min)
}


const listLength=randomInt(1,10)

let listOfNums=[]

for(var i=0; i < listLength; i++){
    listOfNums.push(randomInt(0,1))
}
console.log(listLength)
console.log(listOfNums)


let gapCounter=0
let answer=0
for (let i = 0; i < listLength; i++) {
        if(listOfNums[i]===0){
            gapCounter+=1
            if(answer<gapCounter){
                answer=gapCounter
            }
        }else if(listOfNums[i]===1){
            gapCounter=0
        }

}
console.log(answer)