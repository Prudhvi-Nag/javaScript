let xd=[
  {id:1,name:"prudhvi"},
  {id:2,name:"prudhvi nag"}
]
let x= xd.map(function (items){

console.log(items.name);
})


let m = [1,2,3,4,5,6,7,8,9,10]
let t = m.map(function(items){
  console.log(items*2);
})



const person = {
    firstName: "John",
    lastName: "Doe",
    
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName())

  const numbers = [45, 4, 9, 16, 25];
  let txt = "";
  numbers.forEach(myFunction);

  function myFunction(value) {
  txt += value;
}
myFunction()
