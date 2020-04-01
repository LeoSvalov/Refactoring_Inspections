class Animal {
    constructor(age: number, name: string){
    }

    eat(food: string[],  // food that animal eats
        water: string,  // water that animal drinks
        candies:  string // candies that make animal happy
    ): void {}
}

let Max = new Animal(23, 'Max');
let Daisy = new Animal(12, 'Daisy');

Max.eat(['Apple','Fish'],"potable","MilkyWay");
Daisy.eat(['Pork','Meat'],"potable", "Mars");