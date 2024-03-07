function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }


let randomLength = 7
let listOfItems = []




for(var i = 0; i< randomLength; i++){
    listOfItems.push(getRandomInt(1,6))
}
console.log(listOfItems)
let listLength = listOfItems.length


let lastIndex
let answer = 0
for(var i = 1; i< listLength; i++){
    for (let j = listOfItems.length - i -1; j >= 0; j--) {
        if (listOfItems[j] === listOfItems[listOfItems.length - i]) {
            lastIndex = j;
            break; 
        }
    }
    if(answer < lastIndex + 1){
        answer = lastIndex + 1
    }
}

console.log(answer)