//Challenge #1: BMI Calculator

console.log('hello')

//1. Test Data 1:
//let sionesWeight = "78";
//let sionesHeight = "1.69";

//let tualelesWeight = "62";
//let tualelesHeight = "1.55";

//1. Test Data 2:
let sionesWeight = "95";
let sionesHeight = "1.88";

let tualelesWeight = "85";
let tualelesHeight = "1.66";

//2.
console.log(sionesWeight/ sionesHeight **2)
console.log(tualelesWeight/ tualelesHeight **2)

let sionesBMI = sionesWeight/ sionesHeight **2
let tualelesBMI = tualelesWeight/ tualelesHeight **2

// regular if else statement:
if (sionesBMI > tualelesBMI) {
    let higherBMI = "sione";
    console.log("the person with the higher BMI is: ", higherBMI)
} else {
    let higherBMI = "tualele";
    console.log("the person with the higher BMI is: ", higherBMI)
}

// TERNARY if else statement:
// let calc = sionesBMI > tualelesBMI ? console.log("sione's is higher") : console.log("tualeles is higher");
// return calc
//Challenge #2: Who Wins the Trophy??

/*TEST DATA: Take2 scores 96, 108 and 89. RUSH scores 88, 91 and 110.

TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.

TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.

*/

let a = 96;
let b = 108;
let c = 89;
console.log(a)









