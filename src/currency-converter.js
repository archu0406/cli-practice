// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

const { isAmountInvalid, isInitialCurrencyInvalid, isTargetCurrencyInvalid, isSupportedInitialCurrenciesInvalid, isSupportedTargetCurrenciesInvalid } = require('./validator-function');

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
const amount = process.argv[2];
const initialcurrency = process.argv[3];
const targetcurrency = process.argv[4];


// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.


if (isAmountInvalid(amount)) {
	console.error('Whoops, the amount must be a number greater than 0. Received ' , amount);
	process.exit();
}

if(isInitialCurrencyInvalid(initialcurrency)) {
	console.error('Whoops, you must provide a value for the initial currency. Received', initialcurrency);
	process.exit();
}

if(isTargetCurrencyInvalid(targetcurrency)){
	console.error('Whoops, you must provide a value for the target currency. Received', targetcurrency);
	process.exit();
}


// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/

let USD = 1;
let CAD = 0.8;
let IND = 0.013;

// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

const supportedCurrencies = [
	'USD',
	'CAD',
	'IND'
];

if(isSupportedInitialCurrenciesInvalid(initialcurrency)) {
	console.error('Whoops, the initial currency is unsupported. The supported currencies are:', supportedCurrencies);
	process.exit();
}

if(isSupportedTargetCurrenciesInvalid(targetcurrency)) {
	console.error('Whoops, the target currency is unsupported. The supported currencies are:', supportedCurrencies);
	process.exit();
}



// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.

let convertedAmount;

if (initialcurrency === 'USD' && targetcurrency === 'CAD'){
	convertedAmount = amount / CAD;
} else if (initialcurrency === 'CAD' && targetcurrency === 'USD'){
	convertedAmount = amount * CAD;
}

if (initialcurrency === 'USD' && targetcurrency === 'IND'){
	convertedAmount = amount / IND;
} else if (initialcurrency === 'IND' && targetcurrency === 'USD'){
	convertedAmount = amount * IND;
}

if (initialcurrency === 'CAD' && targetcurrency === 'IND'){
	convertedAmount = amount * CAD / IND;
} else if (initialcurrency === 'IND' && targetcurrency === 'CAD'){
	convertedAmount = amount * IND / CAD;
}




// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.

console.log(` You submitted ${amount} ${initialcurrency}`);
console.log (` This is equal to ${convertedAmount} ${targetcurrency}`);


