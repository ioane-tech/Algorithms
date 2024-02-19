function isEven(num){
    return num % 2 === 0
  }
  
  function calculateEvenListMedian(arr){
    return Math.floor((arr[arr.length / 2] + (arr[(arr.length / 2) - 1])) /2)
  }
  
  
  function findMedian(arr) {
    const answerList = [];
    let eachMedianList = [];

    for (let i = 0; i < arr.length; i++) {
        eachMedianList.push(arr[i]);
        eachMedianList.sort((a, b) => a - b);

        if (eachMedianList.length === 1) {
            answerList.push(eachMedianList[0]);
        } else if (isEven(eachMedianList.length)) {
            answerList.push(calculateEvenListMedian(eachMedianList));
        } else {
            answerList.push(eachMedianList[Math.floor(eachMedianList.length / 2)]);
        }
    }

    return answerList;
}

console.log(findMedian([5, 15, 1, 3])); 
  