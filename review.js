
x = 123 // what does that doe? It assigns a value to a variable name. ( AKA identifier)
//ex:
let y = 456
y = 798 // changes the value



const TAX_RATE = 0.08
// TAX_RATE = 0.12// can not change will kickback an error

const list = [1,2];
list.push(3); // legal - no error!!! change in the content is permitted 


const person = {first: "Cayla", Last: "Wanzer"};
person.age = 26;


// simple / premitive DATE TYPES
first = "CAYLA" // string ("AAA") of characters "a" 
age = 26 //Number 
DOB = new Date("12/09/1998"); // date
isCool = true  // Boolean - logical true/false



//complex data types - collections e.g. arrays lists and object dictionary 
const list1 = [111,222,333] /// an array is an ordered list
dict = {color:"red", width: "100px"}  //creating an object (associate of an array) Key:Value

// opperators - math 
sum = 4 + 5
delta = 4 - 5
prod = 4 * 5
d = 4 / 5
// PEMDAS - order of operations

// opperators - logic 

 tasty = chocolate && vinilla // and 
 
 // truth tables 0 === false 1 === true 

 
 // A B Oputput   //AND &&
//  0 0 0  False
//  0 1 0   False
//  1 0 0  false
//  1 1 1   true
  
//  good = smart || strong  // OR ||
//  A B Oputput
//  0 0 0  false
//  0 1 1  false
//  1 0 1  true 
//  1 1 1  true

//  cloudy = !sunny  // NOT !
//  A  Oputput
//  0   1 
//  0   1
//  1    0 
//  1    0

// PEMDAS - order of operations
// P - ()
// E - exponents
// M - *
// D - /
// A - +
// S - (-)


// Logical operators 
a = "1" // string text with a character of the numeral "1"
b = 1 // integer number value 1
a == b // egual "1" == 1  - avoids converting tect to a number 
a === b // equal and the same data type 
a != b // not equal 
a !== b // not equal including data types 
a < b // is less than 
a > b // is grater than 
a <= b // is less than or equal to 
a >= b // is greater than or equal to 


// conditionals - branching (if, else, if else, switch, case)
if(isAwesome){
    console.log("YAY!!!")
}else if (ifIsOK){
    console.log("OK.")

}else{
    // if neither are true then do this 
    console.log("Meh")
}

//Ternary three way operator
action = isGreen ? "GO" : "STOP"





//LOOPS - iterates over na iterable collection like an array or a list of keys ////////////////////////////////////////////////
// while(exp) - good for learning sateps 
// do while(exp)- good when you want to alwsys enter the loop once 

// for(;;) - CLASSIC - we want to use the index - CAN DO ANYTHING !!!!! 


//for(in) - use keys of an Object
//for(of)- use a list 


//ES6 - Functional programing /////////////////////////////////////////////
// forEach() - apply function to each item 
// .map() - transform each item 
//.filter() - return all matches in a potentially shorter or even empty array 
//.find() - returns first matching object from list /array 
// . findIndex() - returns the position (index) where the first match was found 



// CODE REUSE - finction ( a block of code to be reused )
function add(a,b) {
    return a + b 
}
result = aadd(6,7) // call or invoke function by name passing arguments 6 and 7 
console.log(result) 


// IIFE = immidiatly invoked finction expression 
console.log(((a,b)=> a+b)(6,7)); 
































// alt up or down - moves a whole line
// ctrl z - undo 
// ctrl c - copy
// ctrl v - paste
// ctrl x - cut 
// ctrl shift - highlight 




