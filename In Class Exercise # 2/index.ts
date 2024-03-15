// Name: Aryan Jajadiya
// Student ID: 100894608
// ICE : 02
// File: index.ts

import promptSync from "prompt-sync"; // Import prompt-sync as default
import { add, subtract, multiply, divide } from "./calculator"; // Import specific functions from calculator

const userPrompt = promptSync(); // No need for require, use import instead

const readInput = () => {
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  const option: string = userPrompt(">> "); // Ensure option is a string

  if (option !== "5") {
    console.log("Enter the first number");
    const a: number = Number(userPrompt(">> ")); // Ensure a is a number

    console.log("Enter the second number");
    const b: number = Number(userPrompt(">> ")); // Ensure b is a number

    let c: number;
    switch(option){
      case "1": {
        c = add(a, b);
        console.log(`a + b = ${c}`);
      }
      break;

      case "2": {
        c = subtract(a, b);
        console.log(`a - b = ${c}`);
      }
      break;

      case "3": {
        c = multiply(a, b);
        console.log(`a * b = ${c}`);
      }
      break;

      case "4": {
        c = divide(a, b);
        console.log(`a / b = ${c}`);
      }
      break;

      default: // Handle unexpected input
        console.log("Invalid option");
        break;
    }    

    readInput();
  }
}

readInput();

console.log("Thank you for using calculator. Good Bye");
