const myName = 'Kelvin';
const bornYear = 2005;
let hobby = 'Tidur';
let alamat = 'Jl. Pramuka';

const currentYear = new Date().getFullYear();
const age = currentYear - bornYear;
const message = (`My name is ${myName}, I am ${age} years old. I love ${hobby} and I live in ${alamat}.`);

console.log(message);