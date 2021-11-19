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

function drawScreen(screen, newData){
    let $screen = document.querySelector(screen);        
    $screen.innerHTML = newData;    
}



let operator01 = "", operator02 = "";
/* tests
operator01 = addDigitToOperator(operator01, "1");
operator02 = subtDigitToOperator(operator02);
console.log(`Operador 1: ${operator01}\nOperador 2: ${operator02}\n `)*/
drawScreen(".screen-botton", operator01);
/*drawBottomScreen(".screen-top", operator02);*/



//recives the class of the buttons, in this case "button" itself.
export function readKeyboard(buttonClass, screenClass){
    let $buttons = $d.querySelectorAll(buttonClass);
    let btnLast = "", btnCurrent = "", state = "";
    $buttons.forEach((btn) => {
        
        btn.addEventListener("click", (e) => {            
            btnLast = btnCurrent;
            btnCurrent = e.target.name
            console.clear();
            console.log(`click actual en ${btnCurrent}\nClick anterior en ${btnLast}`);            
            switch (e.target.name){
                
                case "number": 
                    operator01 = addDigitToOperator(operator01, e.target.id);
                break;                

                case "mods":                  
                    console.log("mods: modificando lo ingresado");
                break;
                
                case "operation":            
                    drawScreen(".screen-top", operator01 + e.target.id);                                            
                    operator01 = operator01 + operator02;
                break;
            }    
            
            drawScreen(".screen-botton", operator01);
            console.log(state);
        })
    });
    
}


