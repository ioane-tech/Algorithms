function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }
  
  const randomInteger = getRandomInt(1, 5);
  console.log(randomInteger)


let word=" i hate"

let answer=''

for(var i=0; i<randomInteger;i++){
    answer+=word
    if(i!=randomInteger-1){
        answer+=" that"
    }else{
        answer+=" it"
    }
    if(word===" i hate"){
        word=" i love"
    }else{
        word=" i hate"
    }
}
console.log(answer)