function maxCandies(arr, k) {
  let result = 0

  let myList = arr
  
  for(var i = 0; i < k; i++){
    myList.sort((a, b) => a - b)
    console.log(myList)
    result += myList[myList.length - 1]
    
    let itemReplacer = Math.floor(myList[myList.length-1] / 2)
    
    myList.splice(myList.length - 1, 1);
    myList.push(itemReplacer);
 

  }
  
  return result
}

//[1,1,5,7]

console.log(maxCandies([1,5,7,1], 4))