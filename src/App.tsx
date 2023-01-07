import React from 'react';
import './App.css';

let name:string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name:string) => never;

// function printName(name:string){
//   console.log(name)
// }

// printName('tunde')

// type Person = {
//   name: string,
//   age?: number
// }

// let person:Person = {
//   name: 'tunde',
//   age: 4
// }

// let groupOfPerson: Person[] = [
//   {
//     name: 'tunde',
//     age: 4
//   }, 
//   {
//     name: 'tunde',
//     age: 4
//   }, 
//   {
//     name: 'tunde',
//     age: 4
//   }
// ]

interface Person{
  name: string,
  age?: number
}

// let you:Person ={
//   name: 'dsd',
//   age: 1212,
//   a: 'sdsds',
//   b: 1212
// }

type X = Person & {
  a: string,
  b: number
}






type Y = X & {
  c: string,
  d: number
}








const App:React.FC= () => {
  return (
    <div className="App">
      <span className="heading">Task It</span>
    </div>
  );
}

export default App;
