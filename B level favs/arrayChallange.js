let array = [0,4,22,4,14,4,2]
let length = array.length
let newArray = array
let answer = false

let orders = []

for(var i = 0; i < length; i++){
    if( i % 2 == 1){
        orders.push(Math.min(...newArray))
        let maxIndex = newArray.indexOf(Math.min(...newArray))
        newArray.splice(maxIndex,1)
    }else{
        orders.push(Math.max(...newArray))
        let maxIndex = newArray.indexOf(Math.max(...newArray))
        newArray.splice(maxIndex,1)
    }
}  

for(var i = 0; i < orders.length; i++){
    if( i % 2 == 1){
       if(orders[i-1]>orders[i]<orders[i+1] ){
        console.log(orders[i])
            answer = true
       }else if(i == orders.length-1){
            if(orders[i-1]>orders[i])
            answer = true
       }else{
            answer = false
            break;
       }
    }else{
       
    }
}    
console.log(orders)
console.log(answer)
