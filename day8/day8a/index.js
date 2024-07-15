//========================== [Formating Variable Name] ======================================================

const camelCase = 'camelCase';
const KebabCase = 'kebab-case';
const snake_case = 'snake_case';

console.log(camelCase);
console.log(KebabCase);
console.log(snake_case);


//================== [Formating String] ======================================================

///============= [basic string] =============

const word = 'cat'//single quote
const sentence = "the cat is under the water" // double quote
const paragraph = `The cat is crying, and the boy is laughing` // backtick

console.log(word);
console.log(sentence);
console.log(paragraph);


///============== [Use cases] ==============

//// Instantly from console log
console.log(word + sentence + paragraph);

//// fomatting string
const newSentence = word + sentence + paragraph;
console.log(newSentence);


//// concat with single or double quote
const concat = word + '. ' + sentence + '. ' + paragraph;
console.log(concat);

//// concat with backtick
const backtickConcat = `${word}. ${sentence}. ${paragraph}`;
console.log(backtickConcat);

//////////////////////////////////////////////////////////////////////////////

// //basic Number

// const count = 1;
// const countString = 1;

// console.log(typeof count);//to see what type of the data
// console.log(countString);

// //concating nunber with string

// console.log(count + word);


