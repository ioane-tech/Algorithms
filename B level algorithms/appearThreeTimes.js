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

let answer
let quantityOfEachElement
for (let i = 0; i < listLength; i++) {
    if(listOfNums.length==0){
        break
    }
    const value = listOfNums[0];
    quantityOfEachElement = listOfNums.filter(item => item === value).length;
    if (quantityOfEachElement >= 3) {
        console.log(quantityOfEachElement);
    } else {
        console.log(-1);
    }

    listOfNums = listOfNums.filter(item => item !== value);
    console.log(listOfNums)
}
