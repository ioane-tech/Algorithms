var calPoints = function(operations) {
    let record = [];
    let answer = 0;

    for (let i = 0; i < operations.length; i++) {
        let current = operations[i]


        if (Number.isInteger(parseInt(current))) {
            record.push(parseInt(current))
        } else if (current === '+') {
            record.push(record[record.length - 2] + record[record.length - 1])
        } else if (current === 'D') {
            record.push(2 * record[record.length - 1])
        } else {
            record.pop()
        }
    }

    record.forEach(x => answer += x)
    return answer
};
console.log(calPoints(["5","2","C","D","+"]))