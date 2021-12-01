const isAmountInvalid = (amount) => {
	return amount === undefined || amount < 0;
};

const isInitialCurrencyInvalid = () => {
	return initialcurrency === undefined ;
};

module.exports = {
	isAmountInvalid, isInitialCurrencyInvalid, 

};

