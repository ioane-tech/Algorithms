const wordsList=["word","localization","internationalization","pneumonoultramicroscopicsilicovolcanoconiosis"]

let answerList=[]

wordsList.map((value)=> {
    if(value.length>10){
        answerList.push(value[0] +(value.length-2).toString() + value[value.length-1])
    }else{
        answerList.push(value)
    }
    return answerList
})

console.log(answerList)