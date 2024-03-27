var multiply = function(num1, num2) {
    let answer = ""

    let numFirst = 0
    let numSecond = 0

    numFirst = num1
    numSecond = num2

    answer = `${BigInt(numFirst * numSecond)}`
    console.log(typeof answer)
    return answer
};
console.log(multiply("2903284902384092384092384092384902384092348","339024720947029374092374092374092374902374092374092374"))