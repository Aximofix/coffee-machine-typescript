import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small)");
  });

  it("should serve coffee with change if more money inserted", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 5;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small) with change 3.00");
  });

  it("should not serve coffee if less money inserted", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 1;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Not enough money");
  });

  it("should give an error if the drink cost = 0", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 0;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 1;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Error: invalid price");
  });

  it("should give an error if the drink cost < 0", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = -5;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 0;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Error: invalid price");
  });

  it("should add 0.10 € to cost if amount of sugar = 3", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 3;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2.1;
    const hasLoyaltyCard = false;
    const currentHour = 10;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small)");
  });

  it("should add 0.20 € to cost if amount of sugar = 4", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 4;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2.2;
    const hasLoyaltyCard = false;
    const currentHour = 10;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small)");
  });

  it("should add 0.30 € to cost if amount of sugar = 5", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 5;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2.3;
    const hasLoyaltyCard = false;
    const currentHour = 10;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small)");
  });

  it("should give an error if amount of sugar > 5", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 6;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2;
    const hasLoyaltyCard = false;
    const currentHour = 10;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Error: too much sugar");
  });

  it("should give free drink if has loyalty card and is 5th serve and the drink is small", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 0;
    const hasLoyaltyCard = true;
    const currentHour = 10;


    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small)");
  });

  it("should give free drink if has loyalty card and is 5th serve and the drink is medium", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "medium";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2;
    const hasLoyaltyCard = true;
    const currentHour = 10;


    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (medium) with change 2.00");
  });

  it("should not give free drink if has loyalty card and is 5th serve and the drink is large", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "large";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 5;
    const hasLoyaltyCard = true;
    const currentHour = 10;


    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (large) with change 2.00");
  });

  it("should add 0.50 € to cost if drink size is medium", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "medium";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2.5;
    const hasLoyaltyCard = false;
    const currentHour = 10;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (medium)");
  });
  
  it("should give discount if its happy hour", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2;
    const hasLoyaltyCard = false;
    const currentHour = 15;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small) with change 0.40");
  });

  it("should add 0.20 € to cost if the drink has milk", () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = true;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2.5;
    const hasLoyaltyCard = false;
    const currentHour = 10;


    
    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small) with change 0.30");
  });
});
