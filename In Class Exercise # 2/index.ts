import * as promptSync from "prompt-sync";
import * as calculator from "./calculator";

const prompt = promptSync();

const readInput = () => {
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  const option = prompt(">> ");

  if (option !== "5") {
    console.log("Enter the first number");
    const a = Number(prompt(">> "));

    console.log("Enter the second number");
    const b = Number(prompt(">> "));

    let c: number;
    switch(option){
      case "1": {
        c = calculator.add(a, b);
        console.log(`a + b = ${c}`);
      }
      break;

      case "2": {
        c = calculator.subtract(a, b);
        console.log(`a - b = ${c}`);
      }
      break;

      case "3": {
        c = calculator.multiply(a, b);
        console.log(`a * b = ${c}`);
      }
      break;

      case "4": {
        c = calculator.divide(a, b);
        console.log(`a / b = ${c}`);
      }
      break;
    }    

    readInput();
  }
}

readInput();

console.log("Thank you for using calculator. Good Bye");
