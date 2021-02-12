let sizes = ['tall', 'grande', 'venti'];
let drinkTypes = ['cappucino', 'latte', 'mocha'];
let dairyChoices = ['2%', 'Skim', 'Almond Milk'];

function CoffeeOrder(first, last, size = [], drinkType = [], drizzle, whippedCream, sweetener, coldFoam, dairy = []) {
    this.firstName = first;
    this.lastName = last;
    this.size = size;
    this.drinkType = drinkType;
    this.drizzle = drizzle;
    this.whippedCream = whippedCream;
    this.sweetener = sweetener;
    this.dairy = dairy;

    this.displayOrder = function() {
        let order = `${this.firstName} ${this.lastName} has ordered a ${size} ${drinkType} with`;
        let dairyChoice = ` and ${this.dairy}.`;

        if (this.drizzle) {
            order += ' drizzle ';
        }
        if (this.whippedCream) {
            order += ' whipped cream';
        }
        if (this.sweetener) {
            order += ' sweetener';
        }
        if (this.coldFoam) {
            order += ' coldFoam';
        }
        return order + dairyChoice;
    };
}


let firstOrder = new CoffeeOrder('Jordan', 'Campbell', sizes[1], drinkTypes[2], false, true, true, true, dairyChoices[2]);

let secondOrder = new CoffeeOrder('Sam', 'Carrera', sizes[2], drinkTypes[1], false, true, false, true, dairyChoices[1]);


document.getElementById("orders").innerHTML = firstOrder.displayOrder() + "<br>" + secondOrder.displayOrder();