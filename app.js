//Built in Objects and functions

// I. setTimeout and setInterval and clearInterval functions from the window object


// var interval = setInterval(function(){
//     console.log("you can't stop me")
    
// }, 1000);


// setTimeout(function() {
//   clearInterval(interval)
    
// }, 5000);

// II: Transforming format and values

var numberToString = 5
console.log(numberToString.toString());
console.log(numberToString.toFixed(2));


var stringToNumber = "5"
console.log(parseInt(stringToNumber));

//IFFES

// (function greeting(){
//     var text = "Auto greeting is happening"
//     console.log(text)
    
// })();




// Closures: functions inside a function with acess to its variables

// function closure(input){
//     var number = input;
    
//     return function() {
//         return number * 2;
        
//     };
    
    
// };


// var callClosure = closure(2);

// console.log(callClosure());




//Function constructor & arguments. New Person
//Part#1
// function Person() {
//     this.name = "Jon" 
//     this.phoneNumber = 1
//     this.greeting = function(){
//         console.log("hello " + this.name)
        
//     }
    
    
// };


// var human = new Person();

// var human2 = new Person()
// human.phoneNumber = 25;

// console.log(human.phoneNumber);
// console.log(human2.phoneNumber);

// //PART 2: GENERIC BLUE PRINT

// function genericBluePrint(name, lastName, zipCode){
//     this.name = name;
//     this.lastName = lastName;
//     this.zipCode = zipCode;
    
// };

// var jon = new genericBluePrint("Jonathan", "li", 33616);
// var anna = new genericBluePrint("Anna", "le", 33616);
// console.log(jon);
// console.log(anna);



//Object creation: literal notation and Object.create, .this and Prototypes

// var person = {
//     name: "Jonathan",
//     age: 5
    
// };
    
// Object.prototype.quote = function(){
//     console.log("Hello world " + this.name);
    
// };

// person.quote();

// var anna = Object.create(person)
// var max = Object.create(person)

// anna.name = "anna"
// max.name = "max"

// anna.quote()
// max.quote()


// var budgetController = (function()  {
    
//     var Expense = function(id, description, value){
//       this.id = id;
//       this.description = description;
//       this.value = value;
//     };

//     var Income = function(id, description, value){
//          this.id = id;
//          this.description = description;
//          this.value = value; 
//     };
    
//     var dataType = {
//         allItems: {
//             exp: [ ],
//             inc: [ ],
            
//         },
//         totals: {
//             totalExp: 0,
//             totalInc: 0
//         }
//     };
    
//     return {
//         addItems: function(type, des, val) {
//             var newItem, ID;
            
//             if (dataType.allItems.length > 0){
//                 ID = dataType.allItems[type][dataType.allItems[type].length-1]+1;
//             } else {
//                 ID = 0;
//             };
            
//             if (type === 'exp') {
//                 newItem = new Expense(ID, des, val);
                
                
//             } else if(type == 'inc') {
//                 newItem = new Income(ID, des, val);
//             };
            
//             dataType.allItems[type].push(newItem);
//             return newItem;
            
//         }
        
//     };
    
// })();





// var UIController = (function() {
    
    
    
//     return {
//         inputData: function(){
//             return {
//                 type: document.querySelector(".add__type").value,
//                 description: document.querySelector(".add__description").value,
//                 value: document.querySelector(".add__value").value
//             }
            
//         }
        
//     };
    
    
// })();


// var  controller = (function(budgetctrl, uictrl) {
    
//     var setUpEventListeners = function(){
//         document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
        
//         document.addEventListener("keypress", function(event){
//           if(event.keyCode === 13){
//               ctrlAddItem();
//           } 
//         });
//     }
    
//     var ctrlAddItem = function(){
//         console.log("it works");

//         // Get input from user
//         var input = uictrl.inputData();

//         //Add item to budget controller
//          budgetctrl.addItems(input.type, input.description, input.value);
        
        
//         //Add item to UI
    
//         //Clear fields
        
//         //Calulate and update the budget
        
//         //Calculate and update %
//     };
  
    
        
//     return {
//         init: function(){
//             console.log("application started")  
//             setUpEventListeners()
            
//         }
        
//     };
    
// })(budgetController, UIController);

// controller.init();