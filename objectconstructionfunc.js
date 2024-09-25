// function animal(noOflegs,vegetarian){
//     let obj={}
// obj.noOflegs = noOflegs,
// obj.vegetarian = vegetarian
// obj.eat = function(){
//     console.log("eating")
// }
// obj.greet = function(){
//     console.log(`I have ${noOflegs} legs.`)
// }
// return obj
// }
// let obj1 = animal(9,true)

// console.log(obj1.eat());
// console.log(obj1.greet())


// Factory functions to Constructor Functions

 function AnimalCF(noOflegs,vegetarian){
 this.noOflegs = noOflegs,
 this.vegetarian = vegetarian

 this.eat = function(){
    return 'eating'
 }
 this.greet = function(){
    return `Hi, I have ${noOflegs} legs.`
 }
}
let animalCF = new AnimalCF(4,true);
console.log(animalCF.eat());
console.log(animalCF.greet())

// convert factory function to ES6 Class

class AnimalES6{
     AnimalES6(noOflegs,vegetarian){
    let obj = {};
    obj.noOflegs = noOflegs,
    obj.vegetarian = vegetarian

    obj.eat = function(){
        return "eating"
    }
    obj.greet = function(){
        return `I have ${noOflegs} legs.`
    }
    return obj
   }
}
let animalES6 = new AnimalES6(14, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
