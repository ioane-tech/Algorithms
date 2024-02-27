const firstRow = ["a","b","c"]

const secondRow = ["?","a","b"]

const thirdRow = ["b","c","a"]


let questionMarkIndex

let answer
for(var i = 0; i < firstRow.length; i++){
    questionMarkIndex = secondRow.indexOf('?')
    if(firstRow[questionMarkIndex] == "a" && thirdRow[questionMarkIndex] == "b"){
        answer = "c"
    }else if(firstRow[questionMarkIndex] == "a" && thirdRow[questionMarkIndex] == "c"){
        answer = "b"
    }else{
        answer = "a"
    }
}
console.log(answer)