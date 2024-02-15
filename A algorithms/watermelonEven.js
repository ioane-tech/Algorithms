function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const randomInteger = getRandomInt(1, 100);
  console.log(randomInteger);
  
  let answer=""
  
  for(var i = 0; i<randomInteger-1; i++){
    if(randomInteger/i===Math.round(randomInteger/i)){
      if(i%2===0 && (randomInteger/i)%2===0){
        answer="yes"
      }
      if(answer===""){
        answer="no"
       }
    }
  }
  console.log(answer)