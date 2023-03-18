// Write your solution in this file!
var customerName ="bob";
function name(){
    return customerName;
}
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    window.bestCustomer ="not bob";
}
//let bestCustomer = 'not bob';
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
const LeastFavoriteCustomer="john";
function changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer="jimmy";
}
