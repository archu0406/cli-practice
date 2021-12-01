const isAmountInvalid = (amount) => {
	return amount === undefined || amount < 0;
};

const isInitialCurrencyInvalid = (initialcurrency) => {
	return initialcurrency === undefined ;
};

const isTargetCurrencyInvalid = (targetcurrency) => {
	return targetcurrency === undefined ;
};

const supportedCurrencies = [
	'USD',
	'CAD',
	'IND'
];

const isSupportedInitialCurrenciesInvalid = (initialcurrency) => {
	return supportedCurrencies.includes(initialcurrency) === false;
	};

	const isSupportedTargetCurrenciesInvalid = (targetcurrency) => {
		return supportedCurrencies.includes(targetcurrency) === false;
		};






module.exports = {
	isAmountInvalid, isInitialCurrencyInvalid, isTargetCurrencyInvalid, isSupportedInitialCurrenciesInvalid,
	isSupportedTargetCurrenciesInvalid, 

};

