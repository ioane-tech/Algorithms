let smallBear=4
let largeBear=9

console.log(smallBear)
console.log(largeBear)

let yearCounter=0

for(var i=0; i<100; i++){
    yearCounter+=1
    smallBear=smallBear*3
    largeBear=largeBear*2
    if(smallBear>largeBear){
        break;
    }
}
console.log(yearCounter)
