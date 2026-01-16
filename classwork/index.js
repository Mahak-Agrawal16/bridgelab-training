//1 hello world
console.log("Node.js Backend Started");

//2 variables
let name = "Ambesh";  //string
let age = 22;        //number
const country ="India";   //constant
let isStudent = true;    //boolean

console.log(name);
console.log(age);
console.log(country);
console.log(isStudent);

//:- single line comment. used to explain code or disable execution of line
//  console.log:- used to print the output in terminal or console
//  let:- used to declare variable. values inside it can be changed.
//  age:- age stores a number and it do not needs quotes.
//  const:- declares a constant variable. values inside it can't be changed. must be initialized at declaration
//  boolena variable:- represnts on/off, yes/no, 1/0
//  all console.log():- prints the value stored in variables.
//  quote:- the same value will be printed
//  without quote:- value inside the var will be printed

//Data type
let score= 21;   //undefined
let data= null;   //null

console.log(score);
console.log(data);

//object
let user= {
    name : "Amu",
    age : 2,
    email: "amu@gmail.com"
};

console.log(user);
console.log(user.name);

//Array
let numbers=[10,20,30,40];
let users= ["Amu","Doll","Duggu"];

console.log(numbers);
console.log(users);

//  the variable score is undefined bcz it do not contain any value 
//  null: it shows the intentional absence of value and used when value is unknown or empty.
//  object: Collection of key–value pairs. Used to store related data. Written using { }
//  console.log(user.name);:- Accesses value using dot operator
//  Array: Stores multiple values. Values are accessed using index. Index starts from 0
//  String array: stored multiple string and ordered collection.

//operators
let a= 10;
let b = 20;
console.log("Add:- ",a+b);
console.log("Difference:- ",a-b);
console.log("Product:- ",a*b);
console.log("Difference:- ",a/b);

//condition(if-else)
let loginAge=18 ;

if (loginAge>=18){
    console.log("Allowed to login");
}else{
    console.log("not allowed");
}

//loop(for)
for(let i= 1; i<=5;i++){
    console.log("Loop count: ",i);
}

// Operators:- 4 types: arithmetic(+,-,*,/); comparison(<,>=,>=,<=); logical(&&); assignment(=,+=,-=)
// if:- Checks condition
// >= :- Greater than or equal to
// If condition is true, if block executes
// If condition is false, else block executes
// for:- Used to repeat code
// let i = 1:- Initialization
// i <= 5:- Condition
// i++:- Increment (adds 1 each time)
// Loop runs 5 times

//Function
function add(x,y){
    return x+y;
}

let result = add(20,30);
console.log("Function result: ", result);

//simple backend login
const admin={
    username: "admin",
    pssword: "1234"
};

function login(user, pass){
    if(user== admin.username && pass== admin.password){
        console.log("Login successful");
    }else{
        console.log("Invalid username or password")
    }
}
login("admin","1234");