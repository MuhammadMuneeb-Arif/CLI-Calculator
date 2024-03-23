#! /usr/bin/env node

import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { message: "ENTER FIRST VALUE", type: "number", name: "Num1" },
  { message: "ENTER SECOND VALUE", type: "number", name: "Num2" },
  {
    message: " select one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction ", "Multiplication", "Division"],
  },
]);
let result: number;

switch (answers.operator) {
  case "Addition":
    result = answers.Num1 + answers.Num2;
    console.log("the answer for addition is :" + result);
    break;
  case "Subtraction ":
    result = answers.Num1 - answers.Num2;
    console.log("the answer for subtraction is :" + result);

    break;
  case "Multiplication":
    result = answers.Num1 * answers.Num2;
    console.log("the answer for multiplication is :" + result);

    break;
  case "Division":
    result = answers.Num1 / answers.Num2;
    console.log("the answer for division is :" + result);

    break;
}
