// const { reverse } = require("dns");

// let xd = "a,b,c,d,e,f,g,h,i,j";
// console.log(xd.length);
// let md = "prudhvinagkammela"
// console.log(md.slice(3,11));
// //console.log(md.slice(-12,-6));
// console.log(md.substring(3,11));
// console.log(md.replace("kammela","motivity"));
// console.log(md.replaceAll("a","A"));
// console.log(md.toUpperCase());
// console.log(md.toLowerCase());
// console.log(md.concat(xd));
// console.log(md.substr(1,2));
// console.log(md.split("").reverse().join(""))
// let d = "errr";
// let dd = d.split("").reverse();

// console.log(dd)


    // Define a function to check if a number is prime
// function isPrime(num) {
    
//     if (num < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
      
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   for (let i = 1; i <= 10; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }


const num = prompt("enter a numnber");

isPrime=true;
    if (num < 2) {
    console.log("false")
    }
    for(let i=2;i<=num;i++){
        if(num % 2 === 0 )
        { isPrime=false;}    
        
        
    }
    if(isPrime){console.log("prime numn=ber")}
    else{
        console.log("not prime")
    }
  
