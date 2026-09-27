/*let age:number=4;
//console.log(age);
const heros=["spiderman","ironman","captain america"];
heros.map(hero=>{
 // return `hero is ${hero}`
})
const User={
  name:"khushi",
  email:"kd",
  isActive:true
}
function createUser({name,isActive}:{name:string,isActive:boolean}){}
createUser({name:"kd",isActive:false})
export{}*/
type Pizza={
  price:number
  name:string
}
const menu=[
  {name:"Macroni",price:8},
  {name:"BBQ Sausage",price:10}
]
function addNewPizza(pizzaObj:Pizza){
  menu.push(pizzaObj)
}