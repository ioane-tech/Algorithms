function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }
  
  const randomInteger = getRandomInt(1, 10);
  console.log(randomInteger)


  let answer=0
  for(var i = 0; i < randomInteger; i++){
    let plusOrMminus=getRandomInt(0,1)
    if(plusOrMminus===1){
        console.log("++X")
        answer+=1
    }
    else{
        console.log("--X")
        answer-=1
    }
  }

  console.log(answer)





