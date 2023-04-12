console.log("hello world");
// Test Data 1//
let sionesWeight1 = 78;
let sionesHeight1 = 1.69;

let tualelesWeight1 = 62;
let tualelesHeight1 = 1.55;

let sionesBMI1 = 78/ (1.69 * 1.69);
let tualelesBMI1 = 62/ (1.55 * 1.55);

console.log("sionesBMI1 " + sionesBMI1)
console.log("tualelesBMI1 " + tualelesBMI1)

//Test Data 2//

let sionesWeight2 = 95;
let sionesHeight2 = 1.88;

let tualelesWeight2 = 85;
let tualelesHeight2 = 1.66;

let sionesBMI2 = 95/ (1.88 * 1.69);
let tualelesBMI2 = 85/ (1.66 * 1.66);

console.log("sionesBMI2 " + sionesBMI2)
console.log("tualelesBMI2 " + tualelesBMI2)

// Compare the BMI of Sione and Tualele
const sioneHigherBMI1 = sioneBMI1 > tualeleBMI1;
const sioneHigherBMI2 = sioneBMI2 > tualeleBMI2;

// Print a statement indicating who has the higher BMI
if (sionesBMI1 > tualelesBMI1) {
  console.log("Sione has a higher BMI than Tualele using test data 1. Sione's BMI is:", sioneBMI1, "and Tualele's BMI is:", tualeleBMI1);
}

else if (tualelesBMI1 > sionesBMI1) {
  console.log("Tualele has a higher BMI than Sione using test data 1. Tualele's BMI is:", tualeleBMI1, "and Sione's BMI is:", sioneBMI1);
}

else{ (sionesBMI1 === tualelesBMI1) {
  console.log("They both have the same BMI1")
}
//Test Data 2 of higher BMI
  if (sionesBMI2 > tualelesBMI2) {
    console.log("Sione has a higher BMI than Tualele using test data 2. Sione's BMI is:", sioneBMI2, "and Tualele's BMI is:", tualeleBMI2);
} 
  else if (tualelesBMI2 > sionesBMI2)
    console.log("Tualele has a higher BMI than Sione using test data 2. Tualele's BMI is:", tualeleBMI2, "and Sione's BMI is:", sioneBMI2);
}
else
