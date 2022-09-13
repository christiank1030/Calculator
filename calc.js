const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	
	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2); 

	//Addition// 
	if(mathSymbol === '+') {
		console.log(num1 + num2)
	};

	//Subtraction//
	if(mathSymbol === '-') {
		console.log(num1 - num2)
	};

	//Multiplication//
	if(mathSymbol === '*') {
		console.log(num1 * num2)
	};

	//Division//
	if(mathSymbol === '/') {
		console.log(num1 / num2)
	};

	//Square Root//
	if(mathSymbol === '**' ) { 
		console.log(num1 ** .5)
	};

	//Squaring a number
	if(mathSymbol === 'Square') {
		console.log(num1 ** 2)
	};

	// This line closes the connection to the command line interface.
	reader.close()

});
