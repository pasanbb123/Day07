// let num = Math.random() * 10 + 1;
// let randomNum = Math.floor(num);
// console.log("Secret number:", randomNum);

// function btnInsertNum() {
//     let guessedNum = parseInt(document.getElementById("guessedNum").value);
//     console.log("User guessed:", guessedNum);
//     let attempts = 0;

//     if () {
//         if (guessedNum === randomNum) {
//             Swal.fire({
//                 title: "Good job!",
//                 text: "You clicked the button!",
//                 icon: "success"
//             });
//         } else {
//             if (guessedNum > randomNum) {
//                 document.getElementById("test").innerText = "Guess a lower Number";
//             } else {
//                 document.getElementById("test").innerText = "Guess a higher Number";
//             }
//         }
//     }
// }
    
//  Array methods -----------------------------------------------------------------

// const customerList = [];


// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revAr = customerList.reverse();

// console.log(revAr);


//  Array methods -----------------------------------------------------------------

// const customerList = [];


// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revAr = customerList.reverse();

// console.log(revAr);


const products = [
    { name: "bun", inStock: true },
    { name: "car", inStock: false },
    { name: "bat", inStock: true },
    { name: "van", inStock: false },
];

// final watch Line

let inStockItems = products.filter(product => product.inStock == false);

// let inStockItems = products.filter(
//     function (product) {
//         return productFilter(product)
//     }
// )

// function productFilter(product) {
//     return product.inStock == true;
// }

// console.log(inStockItems);

// Step 01 ------------------------------
// function getSum(num1,num2){
//     return num1+num2;
// }

// getSum(10,20);

// Step 02 ------------------------------------

// let getSum = function (num1, num2){
//     return num1+num2;
// }

// console.log(getSum(10,20));


// Step 03 --------------------------------------

// let getSum = (num1, num2) => {
//     return num1+num2;
// }

// console.log(getSum(10,20));


// Step 04 --------------------------------------

// let sample = txtValue =>{
//     return txtValue;
// }

// console.log(sample("Hi saman"));

// Step 05 -----------------------------------------

// let getSum = (num1, num2) => num1+num2;


// console.log(getSum(10,20));


// Step 06 --------------------------------------

let sample = txtValue => txtValue;


console.log(sample("Hi saman"));


const productsList = [
    { name: "bun", inStock: true },
    { name: "car", inStock: false },
    { name: "bat", inStock: true },
    { name: "van", inStock: false },
];



// for(product of productsList){
//     console.log(product);
// }


// productsList.forEach(product => console.log(product));



// const latterList = ["B","A","D","C"];

// let sorAr = latterList.toSorted();
// console.log(sorAr);


//  const employeeSalary = [75000,25000,45000,55000];
//  let newSalaryArry = employeeSalary.map(salary => salary*2);
//  console.log(newSalaryArry);

const studentList = [
    {id:"001",name:"saman"},
    {id:"002",name:"kamal"},
    {id:"003",name:"wimal"},
    {id:"004",name:"ranil"},
];

let student = studentList.find(student=>student.id==="002");

console.log(student);



 