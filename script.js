let num1 = parseFloat(prompt("Enter number1:"));
let num2 = parseFloat(prompt("Enter number2:"));
let operator = prompt("Enter operator(/,*,-,+):");

function calculate(a,b,op){
    let result;

    if (op === "+"){
        result = a+b ; 
    }else if(op === "*"){
        result = a*b;
    }else if(op === "-"){
        result = a-b;
    }else if(op === "/"){
        if (b === 0){
            result = "Can't devide by zero";
        }else{
            result = a/b;
        }
    }else {
        result = "operator is not defind"
    }
    return result;
}

alert ("answer :" + calculate(num1,num2,operator));