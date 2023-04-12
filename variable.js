// // =========================================================================================================================
// //               Hoisting ==> a variable can used before the variable declaretion only var only allows hoisting and
// //                            shadowing aslo... but let and const does not support hoistind and shadowing...
// //                            var is a goble scope
// //==========================================================================================================================


// console.log(x);
// x="prudhvi"; // hoisting
// x="77320"  // shodowing

// var x;
// let y = 10;

// function xd(){
//     let y="123";
//     const z="234";  // constant value
//     console.log(x);  // x is a globle scope we can call any where.
//     console.log(y);
//     console.log(z);
// }
// xd();
// // here we got a error because let and const are block scope they belongs the only that function only
// // if you declare out side block or a function scope they acts as goble scope
// console.log(y);
// console.log(z);

// const name1 = {
//   fname: "prudhvi",
//   lname: "nag",
// };

// // const a = '{"_id":"63de67211ea02d3acf51dd7f","title":"MacBook","image":"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-500x500.jpg","description":"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..","price":95999,"prePrice":110099,"discount":"INR 5300 OFF on All bank cards","__v":0}'
// // console.log(JSON.stringify(name1));
// console.log(JSON.parse(a));


setTimeout(()=>{
    console.log("i am set time out ")
},1000);
console.log("hi");
