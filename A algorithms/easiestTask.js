function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
  }
  
  const peopleAsked = getRandomInt(1, 10);
  console.log(peopleAsked)

let answersList=[]
for(var i=0; i<peopleAsked; i++){
    const hardOrEasy = getRandomInt(0, 1);
    answersList.push(hardOrEasy)
}
console.log(answersList)


let answer=""
for (const value of answersList) {
  if (value === 1) {
    answer = "HARD";
    break;
  } else {
    answer = "EASY";
  }
}
console.log(answer)
