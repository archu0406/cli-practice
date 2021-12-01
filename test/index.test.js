// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

const { isAmountInvalid, isInitialCurrencyInvalid, isTargetCurrencyInvalid, isSupportedInitialCurrenciesInvalid, 
isSupportedTargetCurrenciesInvalid,} = require ('../src/validator-function');

describe('isAmountInvalid()', () => {
  test('should return true when the amount is undefined', () => {
    let amount;
    const result = isAmountInvalid(amount);

    expect(result).toBe(true);
  });

  test('should return true when the amount is less than 0', () => {
    let amount;
    const result = isAmountInvalid(amount);

    expect(result).toBe(true);
  });

  test('should return false when the amount is greater than or equal to 0', () => {
    let amount;
    const result = isAmountInvalid(amount);

    expect(result).toBe(true);
  });

});

describe('isInitialCurrencyInvalid())', () => {
  test('should return true when the initial currency is undefined', () => {
    let initialcurrency;
    const result = isInitialCurrencyInvalid(initialcurrency);   
    expect(result).toBe(true);
  });

  test('should return false when the initial currency is provided', () => {  
    let initialcurrency;
    const result = isInitialCurrencyInvalid(initialcurrency);  
    expect(result).toBe(true);
  });

});

describe('isTargetCurrencyInvalid())', () => {
  test('should return true when the target currency is undefined', () => {
    let targetcurrency;  
    const result = isTargetCurrencyInvalid(targetcurrency); 
    expect(result).toBe(true);  
  });

  test('should return false when the target currency is provided', () => { 
    let targetcurrency;
    const result = isTargetCurrencyInvalid(targetcurrency);   
    expect(result).toBe(true); 
  });

});

describe('isSupportedInitialCurrenciesInvalid())', () => {
  test('should return true when the initial currency is not supported', () => {
    let initialcurrency;  
    const result = isSupportedInitialCurrenciesInvalid(initialcurrency); 
    expect(result).toBe(true);  
  });

});


describe('isSupportedTargetCurrenciesInvalid())', () => {
  test('should return true when the initial currency is not supported', () => {
    let targetcurrency;  
    const result = isSupportedTargetCurrenciesInvalid(targetcurrency); 
    expect(result).toBe(true);  
  });

});