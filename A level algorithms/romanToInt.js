var romanToInt = function(s) {


    let answer = 0

    for(var i = 0; i < s.length; i++){
        if(s[i]=="I" && s[i+1] == "V"){
            answer += 4
            i ++
        }else if(s[i]=="I" && s[i+1] == "X"){
            answer += 9
            i ++
        }else if(s[i]=="X" && s[i+1] == "L"){
            answer += 40
            i ++
        }else if(s[i]=="X" && s[i+1] == "C"){
            answer += 90
            i ++
        }else if(s[i]=="C" && s[i+1] == "D"){
            answer += 400
            i ++
        }else if(s[i]=="C" && s[i+1] == "M"){
            answer += 900
            i ++
        }else{
            s[i] === "I"? answer += 1 : 
            s[i] === "V"? answer+= 5 : 
            s[i] === "X"? answer+= 10 : 
            s[i] === "L"? answer+= 50 :
            s[i] === "C"? answer+= 100 :
            s[i] === "D"? answer+= 500 :
            answer+= 1000   
        }
        

    }
    return answer
};

console.log(romanToInt("IX"))