/*recibe strings y devuelve numbers */
export function sum(op01, op02){
    return (parseInt(op01, 10) + parseInt(op02, 10));
}
export function subt(op01, op02){
    return op01 - op02;
}
export function mul(op01, op02){
    return op01 * op02;
}
export function div(op01, op02){
    return op01 / op02;
}

/*recibe los operandos y la operacion como strings y devuelve numbers con la operacion hecha*/
export function operate(op01, op02, operation){
    let num01 = (op01 != "")? parseFloat(op01) : 0;
    let num02 = (op02 != "")? parseFloat(op02) : 0;
    let result = undefined;
    switch (operation){
        case "+":
            result = num01 + num02;
        break;
        case "-":
            result = num01 - num02;
        break;
        case "x":
            result = num01 * num02;
        break;
        case "/":
            result = num01 / num02;
        break;
        case "=":
            result = num01;
        break;
    }
    return result;
}