function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1) + min);
}
  const randomParticipants = getRandomInt(1, 10);
  console.log(randomParticipants)


function getRandomInt(min, randomParticipants) {
    min = Math.ceil(min);
    max = Math.floor(randomParticipants);
    return Math.floor(Math.random() * (randomParticipants - min+1) + min);
}
  const lowestScoreBarier = getRandomInt(1, 10);
  console.log(lowestScoreBarier)




let particiapantsScores=[]
for(var i =0; i<randomParticipants;i++){
    particiapantsScores.push(getRandomInt(0,20))
}
console.log(particiapantsScores)


let howManyStudentsPassed=0
particiapantsScores.map(value=>{
    if(value>=lowestScoreBarier){
        howManyStudentsPassed+=1
    }
})
console.log(howManyStudentsPassed)