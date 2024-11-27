// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = 'Elvis'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = 'not bob'
  }
  
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
  }
  
  function changeLeastFavoriteCustomer() {
    throw new Error("Assignment to constant variable.");
  }

