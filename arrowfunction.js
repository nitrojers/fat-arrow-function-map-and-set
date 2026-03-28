// Fat arrow function
// i am creating constants to work with first
// i am practicing for addition 
// i am practicing for subtraction 
// i am practicing for multiplication 
// i am practicing for comparing two numbers 
// i am practicing different ways to write single expressions
// i am practicing multiple parameters
// i am practicing with default parameter
// i am practicing for callback


// constants i will be working with 
const numberOne = 2;
const numberTwo = 6;
const numberThree = 7;
const numberFour = 3;
const numberFive = 6;

// for the addition
const firstAdd = (firstAdd) => numberOne + numberTwo;

// for subtraction
const firstSubtraction = (firstSubtraction) => numberTwo - numberOne;

// for multiplication
const multiplication = (multiplication) => numberFive * numberFour;

// for comparing two numbers
const compare = (compare) => numberFive === numberTwo;
const secondCompare = (secondCompare) => numberFive === numberFour;

// identifying ways to write a single expression
const firstExpression = () => `this expression has nothing in the bracket (no parameter)`;
const secondExpression = (secondExpression) => ` well this expression as something in the parameter :) `;
const thirdExpression = thirdExpression => ` this shows that the bracket is not important in a single parameter and it makes the code looks simple`;

// adding for multiple parameters 
const multiPara = (firstPara, secondPara, thirdPara, FourthPara) => firstPara + secondPara + thirdPara + FourthPara;

// subtracting for multiple parameters 
const subMultiPara = (firstPara, secondPara, thirdPara, FourthPara) => firstPara - secondPara - thirdPara - FourthPara;

// multiplication for multiple parameters 
const MultiPara = (firstPara, secondPara, thirdPara, FourthPara) => firstPara * secondPara * thirdPara * FourthPara;

//with default parameters
const defaultPara = ( name = "jeremiah", age = 12, country = "Nigeria") => ` I am ${name} from ${country} and i'm ${age} years old`

//callback 
const numbers = [1,2,3,4,5,6]
const callBack = numbers.map(num => num + 2)


console.log(firstAdd());
console.log(firstSubtraction());
console.log(multiplication());
console.log(compare());
console.log(secondCompare());
console.log(firstExpression());
console.log(secondExpression());
console.log(thirdExpression());
console.log(multiPara(3,4,2,1));
console.log(subMultiPara(11,4,2,1));
console.log(MultiPara(3,4,2,1));
console.log(defaultPara())
console.log(callBack)