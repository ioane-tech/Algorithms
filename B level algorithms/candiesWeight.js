function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }

const tesCases=getRandomInt(1,6)
console.log("test Cases "+ tesCases)


let candiesWeights=[]
let allBoxList=[]
for(var i=0;i<tesCases;i++){
    let numOfCandies=getRandomInt(1,5)
    console.log(numOfCandies)
    for(var j=0;j<numOfCandies;j++){
        candiesWeights.push(getRandomInt(1,2))
    }
    console.log(candiesWeights)
    allBoxList.push(candiesWeights)
    candiesWeights=[]
}
console.log(allBoxList)

let answersList=[]
allBoxList.map((value,index)=>{
    let listOfOne=[]
    let listOfTwo=[]
    for(var i=0;i<value.length;i++){
        if(value[i]===1){
            listOfOne.push(1)
        }else{
            listOfTwo.push(2)
        }
    }

    if(listOfTwo.length==0){
        if(listOfOne.length%2==0){
            answersList.push("yes")
        }else{
            answersList.push("No")
        }
    }
    else if(listOfTwo.length==1){
        if(listOfOne.length!=0 && listOfOne.length%2==0){
            answersList.push("Yes")
        }else{
            answersList.push("No")
        }
    }
    else if(listOfOne.length==0){
        if(listOfTwo.length%2==0){
            answersList.push("yes")
        }else{
            answersList.push("No")
        }
    }else{
        if(listOfTwo.length%2==0 && listOfOne.length%2==0){
            answersList.push("Yes")
        }else{
            answersList.push("No")
        }
    }


})
console.log(answersList)