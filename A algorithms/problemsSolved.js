function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }
  
  const randomInteger = getRandomInt(1, 1000);
  console.log(randomInteger)


  let surenessList=[]

  let randomSurnessList=[]
  for(var i = 0; i < randomInteger; i++){
    for(var j = 0; j < 3; j++){
        let randomSurness=getRandomInt(0,1)
        randomSurnessList.push(randomSurness)
      }
    surenessList.push(randomSurnessList)
    randomSurnessList=[]
  }
  console.log(surenessList)


  let answersCounter=0

  surenessList.map(value=>{
    let eachSurnessCounter=0
    value.map(eachSurness=>{
        if(eachSurness===1){
            eachSurnessCounter+=1
        }
    })
    if(eachSurnessCounter>=2){
        answersCounter+=1
    }
  })
  console.log(`they will solve ${answersCounter} problem`)