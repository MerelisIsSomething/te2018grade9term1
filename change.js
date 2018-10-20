// import readline-sync module, don't touch!
const READLINE = require("readline-sync");


// fill in object below with all relevant properties (see instructions)

let changeMachine = {
	inputCents: "undefined",
	quarters: "undefined",
	dimes: "undefined",
	nickels: "undefined",
	pennies: "undefined",
	greeting: "Welcome to my machine! Please enter amount of change: ",
	farewell: "Thank you for stopping by! I hope to see you soon!"

};

// write code below that simulates the change machine in action!
changeMachine.inputCents = READLINE.question (changeMachine.greeting)

let cents = changeMachine.inputCents;

let quarters = Math.floor(cents/25);
let remainder = cents%25;
let dimes = Math.floor(remainder/10);
remainder = remainder%10;
let nickels = Math.floor(remainder/5);
let pennies = remainder%5;

changeMachine.quarters = quarters;
changeMachine.dimes = dimes;
changeMachine.nickels = nickels;
changeMachine.pennies = pennies;

console.log(`${changeMachine.inputCents}) makes:
	${changeMachine.quarters} quarters
	${changeMachine.dimes} dimes
	${changeMachine.nickels} nickels
	${changeMachine.pennies} pennies

	`);

console.log(`${changeMachine.farewell}`);


