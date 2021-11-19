
const $calculator = document.querySelector(".calculator");
/*Valor anterior*/
const $screenTop = document.querySelector(".screen-top");
/*Valor actual*/
const $screenBotton = document.querySelector(".screen-botton");
const $keys = $calculator.querySelectorAll("button");

const display = new Display($screenTop, $screenBotton);

$keys.forEach((elem) => {    
    elem.addEventListener("click", (e) => {
        if (e.target.name == "number"){
            display.addNumber(e.target.id);
        }        
        if (e.target.id == "back"){
            display.deleteNumber();
        }
        if (e.target.id == "C"){
            display.deleteAll();
        }
        if (e.target.name == "operation"){            
            display.compute(e.target.id);
        }
    });
});



