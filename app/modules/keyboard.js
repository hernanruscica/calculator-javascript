const $d = document;

/*add one digit to the operator */
function addDigitToOperator(operator, digit){
    console.log(operator.length)
    if (operator.length < 10){
        operator += digit; 
    }
    return operator;
}

/*subtract the rightest digit to the operator */
function subtDigitToOperator(operator){
    if (operator.length > 0){
        operator = operator.slice(0, -1);
    }
    return operator;
}
/*add or remove the minus sign*/
function toggleMinusSign(operator){
    if (operator[0] == '-'){
        console.log("tiene signo menos");
        operator = operator.replace("-", "");
    }else{
        operator = "-" + operator;
        console.log("no tiene signo menos");
    }
    return operator;
}

/*add the signs of the operations to the end*/
function addSignToTheEnd(operator, sign){

    return operator + sign;
}

function drawBottomScreen(screen, newData){
    let $screen = document.querySelector(screen);        
    $screen.innerHTML = newData;    
}



let operator01 = "", operator02 = "41";
/* tests
operator01 = addDigitToOperator(operator01, "1");
operator02 = subtDigitToOperator(operator02);
console.log(`Operador 1: ${operator01}\nOperador 2: ${operator02}\n `)*/
drawBottomScreen(".screen-botton", operator01);
/*drawBottomScreen(".screen-top", operator02);*/



//recives the class of the buttons, in this case "button" itself.
export function readKeyboard(buttonClass, screenClass){
    let $buttons = $d.querySelectorAll(buttonClass);
    $buttons.forEach((btn) => {
        console.log(btn);
        btn.addEventListener("click", (e) => {
            console.log(`click en ${e.target.id}`);
            switch (e.target.id){
                case "0": case "1": case "2": case "3": case "4": case"5": 
                case "6": case "7": case "8": case "9": 
                    operator01 = addDigitToOperator(operator01, e.target.innerHTML);
                    drawBottomScreen(".screen-botton", operator01);
                break;
                case "back":
                    operator01 = subtDigitToOperator(operator01);
                    drawBottomScreen(".screen-botton", operator01);
                break;
                case "C": case "CE":
                    operator01 = "";
                    drawBottomScreen(".screen-botton", operator01);
                break;
                case "+/-":
                    operator01 = toggleMinusSign(operator01);
                    drawBottomScreen(".screen-botton", operator01);
                break;
                case "+": 
                    operator01 = addSignToTheEnd(operator01, "+");
                    drawBottomScreen(".screen-top", operator01);
                    drawBottomScreen(".screen-botton", operator02);
                break;
                case "-": 
                case "x": 
                case "/":

                break;
            }

            
        })
    });
    
}


