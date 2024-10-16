const list1 = [1,4,6,2,7,1]
const list2 = [3,10,6,14,7,1]


for(let i = 0; i < list2.length; i++){
    list1.push(list2[i])
}

list1.sort((a, b) => a-b)

console.log(list1)

