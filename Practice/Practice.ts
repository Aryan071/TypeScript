// let a = "Aryan";
// console.log(a);
// let sum = (a:number,b:number) =>{
//   return a+b;
// }
// console.log(sum(12,34));
// let name1 :undefined = undefined;
// let name2 :null = null;
// // name1 = 6;
// let ab:number = NaN;
// console.log(ab);

// let x:number = 5;
// console.log(x);

// const add = (a:number,b:number) =>{
//   return a+b;
// }
// console.log(add(3,5));


// const todayWeather = {
//   date:new Date(),
//   weather:'sunny'
// };

// const forecast = ({date,weather} : {date:Date , weather:string}) =>{
//   console.log(date);
//   console.log(weather);
  
// };

// forecast(todayWeather);

// const  greet = (name:string) => {
//   console.log(`Welcome ${name}`);
  
// }

// const  greet = (name:string):string => {
//   return `Welcome ${name}`;
  
// }

// function greet(name:string):string{
//  return `welcome ${name}`;
  
// }

// greet('Aryan');

// function add<t>(a:t,b:t){
    
// }



class boat{
    color:string = 'red';

    get getColor():string{
      return `The color oh boat is ${this.color}`;
    }

    @testDecorator
    pilot():void{
      console.log("Hyyy");
    }
}

function testDecorator(target:any,key:any):void{
  console.log("Target: ",target);
  console.log("Key: ", key);
  
}