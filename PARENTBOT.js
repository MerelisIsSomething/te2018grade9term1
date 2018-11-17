const READLINE = require("readline-sync");

let school = READLINE.question("Did you learn anything new at school?");
if(school == "yes") {
	console.log("Good.")
}
else {
	let schooltalkback = READLINE.question("Why?");
	if(schooltalkback == "I dont know.") {
		console.log("You dont learn anything different every day? Go learn.");
	}
}
let food = READLINE.question("Did you eat?");
if(food == "yes") {
	console.log("Okay.");
}
else {
	console.log("Go eat something.");
}
let homework = READLINE.question("Do you have homework to do?");
if(homework == "yes") {
	console.log("Go do it.");
}
else {
	let talkback = READLINE.question("Are you sure?");
	if(talkback == "yes") {
		console.log("Okay.");
	}
	else {
		console.log("Check and do it if you have any.");
	}
	
}













































