class Display {
    constructor(displayLastValue, displayCurrentValue) {
        this.displayLastValue = displayLastValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.lastValue = "";
        this.currentValue = "";
        this.operationType = undefined;
        this.signs = {
            sum : "+",
            subt: "-",
            mul : "x",
            div : "/"
        }
    }

    deleteNumber (){
        this.currentValue = this.currentValue.slice(0, -1);
        this.showValues();
    }
    deleteAll (){
        this.currentValue = "";
        this.lastValue = "";
        this.operationType = undefined;
        this.showValues();
    }

    compute (operationType){
        this.operationType !== 'equal' && this.calculate();
        this.operationType = operationType;
        this.lastValue = this.currentValue || this.lastValue;       

        this.currentValue = "";
        
        this.showValues();
    }

    addNumber (number){
        if (number == "." && this.currentValue.includes(".")) return;
        this.currentValue = this.currentValue.toString() + number.toString();
        this.showValues();
    }
    showValues (){        
            this.displayCurrentValue.textContent = this.currentValue;
            this.displayLastValue.textContent = `${ !isNaN(this.lastValue) ? this.lastValue : ''}  ${this.signs[this.operationType] || ''}`;     
    }
    calculate () {
        this.lastValue = parseFloat(this.lastValue);
        this.currentValue = parseFloat(this.currentValue);
        if (isNaN(this.currentValue) || isNaN(this.lastValue)) return;
            this.currentValue = this.calculator[this.operationType](this.lastValue, this.currentValue);
    }
}