import { sum, subt, mul, div } from "./modules/math.js";
import {readKeyboard} from "./modules/keyboard.js";

let val01 = 7, val02 = 2;
console.log(`La suma entre ${val01} y ${val02} es ${sum(val01, val02)}`);
console.log(`La resta entre ${val01} y ${val02} es ${subt(val01, val02)}`);
console.log(`La multiplicacion entre ${val01} y ${val02} es ${mul(val01, val02)}`);
console.log(`La division entre ${val01} y ${val02} es ${div(val01, val02)}`);

console.log(readKeyboard(".button", ".screen-top"));
