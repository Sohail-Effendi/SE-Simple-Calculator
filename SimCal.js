import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstNo", type: "number", name: "firstNo" },
    { message: "Enter secondNo", type: "number", name: "secondNo" },
    { message: "sleect one operator", type: "list", name: "operator", choices: ["Addition", "Subtration", "Multiplication", "Division", "Power"], },
]);
if (answer.operator == "Addition") {
    console.log(answer.firstNo + answer.secondNo);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstNo - answer.secondNo);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNo * answer.secondNo);
}
else if (answer.operator == "Division") {
    console.log(answer.firstNo / answer.secondNo);
}
else if (answer.operator == "Power") {
    console.log(answer.firstNo ** answer.secondNo);
}
else {
    console.log("Please select a valid operator");
}
