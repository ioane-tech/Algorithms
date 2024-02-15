let numList=[1,1,3,1]

console.log(numList)
let answer
for(var i=1; i<numList.length;i++){
    if(numList[0]!=numList[i]){
        answer="yes"
        break;
    }else{
        answer="no"
    }
}
console.log(answer)