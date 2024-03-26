var multiply = function(num1, num2) {
    let answer = ""

    let numFirst = 0
    let numSecond = 0

    numFirst = num1
    numSecond = num2

    answer = `${numFirst * numSecond}`
    console.log(typeof answer)
    return answer
};
console.log(multiply("2","3"))