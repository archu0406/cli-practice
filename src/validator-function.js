const isAmountInvalid = (amount) => {
	return amount === undefined || amount < 0;
};

const isInitialCurrencyInvalid = () => {
	return initialcurrency === undefined ;
};

const isTargetCurrencyInvalid = () => {
	return targetcurrency === undefined ;
};

module.exports = {
	isAmountInvalid, isInitialCurrencyInvalid, isTargetCurrencyInvalid,

};

