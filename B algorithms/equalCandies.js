function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }



const boxQuantity=5
let candiesEachBox=[]

for(var i=0; i<boxQuantity;i++){
    candiesEachBox.push(getRandomInt(1,10))
}
console.log(candiesEachBox)


let minNumOfCandies=candiesEachBox[0]
for(var i=0; i<candiesEachBox.length;i++){
    if(i!=candiesEachBox.length-1){
        if(candiesEachBox[i]<candiesEachBox[i+1]){
            if(candiesEachBox[i]<minNumOfCandies){
                minNumOfCandies=candiesEachBox[i]
            }

        }else{
            if(candiesEachBox[i+1]<minNumOfCandies){
                minNumOfCandies=candiesEachBox[i+1]
            }
        }
    }
}
console.log(minNumOfCandies)


let eatenCandiesCounter=0
for(var i=0; i<candiesEachBox.length;i++){
    let eatenCandieFromEachBox=0
    if(candiesEachBox[i]>minNumOfCandies){
        eatenCandieFromEachBox=candiesEachBox[i]-minNumOfCandies
        eatenCandiesCounter+=eatenCandieFromEachBox
    }
}
console.log(`minimum number of eaten candies: ${eatenCandiesCounter}`)