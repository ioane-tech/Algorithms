var average = function(salary) {
    let answer = 0
    if (salary.length === 0) {
        return [];
    }
    let minElement = Math.min(...salary);
    let maxElement = Math.max(...salary);
    
    let minIndex = salary.indexOf(minElement);
    salary.splice(minIndex, 1);

    let maxIndex = salary.indexOf(maxElement);
    salary.splice(maxIndex, 1);

    for(var i = 0; i < salary.length; i++){
        answer += salary[i]
    }

    answer = answer / salary.length

    return answer
};
console.log(average([1000,2000,3000]))