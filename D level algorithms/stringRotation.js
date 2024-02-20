/*
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. 
Rotating a character means replacing it with another character that is a certain number of steps away 
in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every 
alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and 
every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note 
that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.

Signature
string rotationalCipher(string input, int rotationFactor)

Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000

Output
Return the result of rotating input a number of times equal to rotationFactor.

Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?

Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
*/



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