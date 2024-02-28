function removeQount(string){

    let array = string.split("");
    

    let answer = ""

    let xInARowCounter = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "x") {
            xInARowCounter++;
            if (xInARowCounter === 3) {
                answer ++
                array.splice(i, 1);
                console.log(array)
                xInARowCounter = 0; 
                i = -1; 
            } 
        } else {
            xInARowCounter = 0;
        }

    }

    return answer
}

console.log(removeQount("xxxxxixxxxo"))