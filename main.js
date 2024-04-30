// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const invalid666 = [9, 9, 9];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, invalid666];


/* validateCred checks if the numbers of the array passed as argument are valid according to the Luhn algorithm. 
The for loop will iterate the array end to start. 
A variable sum will hold the sum of all numbers. 
toDouble is a flag to indicate whether the number at the current index should be doubled or not. 
Is is initialized to false because the number at last index should not be. If toDouble is false, it will add the current index number to the sum and set toDouble to true. 
If toDouble is true, the current index number is saved in num and doubled. If it is greater than 9 when double, 9 is subtracted. num is added to sum. 
Return a boolean, sum % 100 === 0. */

const validateCred = array => {
  let sum = 0;
  let num = 0; 
  let toDouble = false;
  for (let i = array.length -1; i > -1; i--){
    if (toDouble){
      num = array[i]*2
      if (num > 9)
        num -= 9;
      sum += num;
      toDouble = false;
    }
    else {
      sum += array[i];
      toDouble = true;
    }
  }
    return sum % 10 === 0;
}


/*
//Tests 

console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid4));
*/

/*returns an array wich is the result of iterating trough each card of the array passed as argument and filtering only those who return false in the validatedCred function */
const findInvalidCards = array => {
  const invalidCards = array.filter(card => !validateCred(card))
  return invalidCards;
}

console.log(findInvalidCards(batch));

/*returns an array with the names of the companies in the array of invalid cards passed as argument.
invalidCompanies will be the array holding the nammes. 
the forEach methos is used to iterate through each element of the array, checking its first number element[0]. If it is 3 and invalidCompanies does not include 'Amex', 'Amex' is added to it. 
The same for 4 - 'Visa', 5 - 'Mastercard, 6 - 'Discover. If it isn't any of these prints 'Not found' */

const idInvalidCompanies = array => {
  const invalidCompanies = [];
  array.forEach(element => {
    if(element[0] === 3){
        if(!invalidCompanies.includes('Amex'))
          invalidCompanies.push('Amex');
    }
    else if(element[0] === 4){
      if(!invalidCompanies.includes('Visa'))
        invalidCompanies.push('Visa');
    }
    else if(element[0] === 5){
        if (!invalidCompanies.includes('Mastercard'))
          invalidCompanies.push('Mastercard');
    }
    else if(element[0] === 6){
      if(!invalidCompanies.includes('Discover'))
        invalidCompanies.push('Discover');
    }
    else 
      console.log('not found');  
  })
  return invalidCompanies;
}

console.log(idInvalidCompanies(findInvalidCards(batch)));

















