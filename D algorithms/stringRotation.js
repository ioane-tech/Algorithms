function isLetter(eachPart){
    return eachPart >= "a" && eachPart <= "z"
 }
 
 function isNum(eachPart){
    return /\d/.test(eachPart);
 }
 
 
 
 function rotationalCipher(input, rotationFactor) {
   const allLetter = "abcdefghijklmnopqrstuvwxyz"
   const numRange = 9
   const letterRange=25
   
   let result =""
 for (let i = 0; i < input.length; i++) {
     let eachPart = input[i];
     let indexOfCharacter;
     
     if (isLetter(eachPart)) {
         indexOfCharacter = allLetter.indexOf(eachPart);
     } else if (isNum(eachPart)) {
         indexOfCharacter = parseFloat(eachPart);
     }
 
     let indexAfterRotation = indexOfCharacter;
     let rotationLeft = rotationFactor;
     let stepCounter = 0;
 
     if (isLetter(eachPart)) {
         while (stepCounter !== rotationFactor) {
             if (indexAfterRotation + 1 === letterRange) {
                 indexAfterRotation = 0;
                 stepCounter += 1;
             } else {
                 indexAfterRotation += 1;
                 stepCounter += 1;
             }
         }
         result += allLetter[indexAfterRotation];
         stepCounter = 0;
     } else if (isNum(eachPart)) {
         while (stepCounter !== rotationFactor) {
             if (indexAfterRotation + 1 === numRange) {
                 indexAfterRotation = 0;
                 stepCounter += 1;
             } else {
                 indexAfterRotation += 1;
                 stepCounter += 1;
             }
         }
         result += indexAfterRotation;
     }
     else{
        result += eachPart
     }
 }
   
   return result;
 }
 
 
 console.log(rotationalCipher("abc-23", 3))