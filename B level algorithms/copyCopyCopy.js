function randomInt(min,max){
    min=Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)+min)
}


const listLength=randomInt(1,10)

let listOfNums=[]

for(var i=0; i < listLength; i++){
    listOfNums.push(randomInt(1,6))
}
console.log(listLength)
console.log(listOfNums)

let differentNumList=[]

listOfNums.map(value=>{
    if(!differentNumList.includes(value)){
        differentNumList.push(value)
    }
})
console.log(differentNumList.length)