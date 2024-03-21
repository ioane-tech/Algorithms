function WealthFinder(arrays){
    let maxWealth = 0
    let WealthCounter = 0
    for(const customer of arrays){
        for(var i = 0 ; i < customer.length; i++){
            WealthCounter += customer[i]
        }
        if(maxWealth < WealthCounter){
            maxWealth = WealthCounter
        }
        WealthCounter = 0
    }
    return maxWealth
}

console.log(WealthFinder([[1,2,3],[3,2,2],[22,2,1]]))