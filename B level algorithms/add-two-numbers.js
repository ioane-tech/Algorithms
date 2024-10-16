function addTwoNumbers (l1) {
    let answer = false
    let changesList = []

    for(let i = 0; i < l1.length; i++){
        if(l1[0] !== 5){
            answer = false 
            break;
        }else{
            if(changesList.length == 0){
                changesList.push(l1[0])
            }else{
                if(l1[i] == 10){
                    if(changesList.includes(5)){
                        answer = true
                        let index = changesList.indexOf(5)
                        changesList.splice(index, 1)
                    }else{
                        answer = false;
                        break;
                    }
                }else if(l1[i] == 20){
                    let fivesCount = l1.filter(value => value === 5).length
                    if((changesList.includes(5) && changesList.includes(10)) || fivesCount >=3 ){
                        if(changesList.includes(5) && changesList.includes(10)){
                            answer = true
                            let index5= changesList.indexOf(5)
                            let index10 = changesList.indexOf(10)
                            changesList.splice(index5, 1)
                            changesList.splice(index10, 1)
                        }else{
                            for(let i = 0; i <3  ;i++){
                                let index = changesList.indexOf(5)
                                changesList.splice(index, 1)
                            }
                            answer = true
                        }
                    }else{
                        answer = false;
                        break;
                    }
                }
                changesList.push(l1[i])
            }
          
        }
    }

    return answer;
}

let answer = addTwoNumbers([5,5,5,10,20])
console.log(answer) 