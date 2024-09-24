class Car{
constructor(car_name,model){
this.car_name = car_name,
this.model = model

}
accelerate = ()=>{
    console.log('accelerate')
}
braking =()=>{
console.log('brake')
}
}
let c1 = new Car('Tesla','A-50')
console.log(c1)
 accelerate();
 braking()