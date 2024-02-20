const example="3+2+3+1+1+3"

let numbersList=[]
for(var i=0; i<example.length; i++){
    if(example[i]!="+"){
        numbersList.push(example[i])
    }
}
numbersList.sort()

console.log(numbersList)

let answer=""

numbersList.map((value,index)=>{
    if(index!=numbersList.length-1){
        answer+=value + "+"
    }else{
        answer+=value
    }

})
console.log(answer)