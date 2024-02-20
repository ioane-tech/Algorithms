let givenWord="code"

let secondWord="ledoc"


let translatioonedWord=""
for(var i = givenWord.length-1 ; i>=0; i--){
    translatioonedWord+=givenWord[i]
}
console.log(translatioonedWord)


let answer
if(translatioonedWord===secondWord){
    answer="YES"
}else{
    answer="NO"
}
console.log(answer)