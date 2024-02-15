function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }
const firstTestCase=[
    [getRandomInt(0,15),getRandomInt(0,15)],
    [getRandomInt(0,15),getRandomInt(0,15)],
    [getRandomInt(0,15),getRandomInt(0,15)],
    [getRandomInt(0,15),getRandomInt(0,15)],
    [getRandomInt(0,15),getRandomInt(0,15)],
]
console.log(firstTestCase)
let answer
let maxQuality=0

firstTestCase.map((value,index)=>{
    if(value[0]<10){
        if(value[1]>maxQuality){
            answer=index
            maxQuality=value[1]
        }
    }
})
console.log(answer)