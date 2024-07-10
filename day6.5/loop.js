// =============================First Methods===============================
const number = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
        console.log("The result for " + (number[i]) + " plus " + (number[j]) + " is "+ (number[i] + number[j]));
        console.log("The result for " + (number[i]) + " minus " + (number[j]) + " is " + (number[i] - number[j]));
        console.log("The result for " + (number[i]) + " times " + (number[j]) + " is " + (number[i] * number[j]));
        console.log("The result for " + (number[i]) + " divided by " + (number[j]) + " is " + (number[i] / number[j]));
        console.log("The result for " + (number[i]) + " modulus " + (number[j]) + " is " + (number[i] % number[j]));
        console.log("The result for " + (number[i]) + " to the power of " + (number[j]) + " is " + (number[i] ** number[j]));
    }
}




//======================Second Methods======================
const fromNumber = 0
const toNumber = 10



for (let i = fromNumber; i < toNumber; i++) {
    console.log("The result for " + (i) + " plus " + (i) + " is "+ (i + i));
    console.log("The result for " + (i) + " minus " + (i) + " is " + (i - i));
    console.log("The result for " + (i) + " times " + (i) + " is " + (i * i));
    console.log("The result for " + (i) + " divided by " + (i) + " is " + (i / i));
    console.log("The result for " + (i) + " modulus " + (i) + " is " + (i % i));
    console.log("The result for " + (i) + " to the power of " + (i) + " is " + (i ** i));
}

for (let i = fromNumber; i < toNumber; i++) {
    for (let j = fromNumber; j < toNumber; j++) {
        console.log("The result for " + (i) + " plus " + (j) + " is "+ (i + j));
        console.log("The result for " + (i) + " minus " + (j) + " is " + (i - j));
        console.log("The result for " + (i) + " times " + (j) + " is " + (i * j));
        console.log("The result for " + (i) + " divided by " + (j) + " is " + (i / j));
        console.log("The result for " + (i) + " modulus " + (j) + " is " + (i % j));
        console.log("The result for " + (i) + " to the power of " + (j) + " is " + (i ** j));
    }
}


