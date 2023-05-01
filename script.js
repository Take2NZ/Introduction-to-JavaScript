//Challenge #1: BMI Calculator

console.log('hello')

//1. Test Data 1:
//let sionesWeight = "78";
//let sionesHeight = "1.69";

//let tualelesWeight = "62";
//let tualelesHeight = "1.55";

//Challenge #1-1. Test Data 2:
let sionesWeight = "95";
let sionesHeight = "1.88";

let tualelesWeight = "85";
let tualelesHeight = "1.66";

//Challenge #1-2.
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

//Challenge #2-1.

function avgScore(a, b, c) {
    let sum = (a + b + c) /3;
    return sum;
}
 
let take2AvgScore = avgScore(96, 108, 89);
console.log("Take2AverageScore: ", take2AvgScore);

let rushAvgScore = avgScore(88, 91, 110);
console.log("RushAverageScore: ", rushAvgScore);

//Challenge #2-2.

/*if (take2AvgScore == rushAvgScore) {
    let draw = "It's a Draw!";
console.log(draw);
} else {
    let winner = take2AvgScore > rushAvgScore ? console.log("Take2 Wins!") : console.log("Rush Wins!");
}*/

//Challenge #2-3.

if ((take2AvgScore > 100) > (rushAvgScore > 100)) {
    let winner = take2AvgScore > rushAvgScore ? console.log("Take2 Wins!") : console.log("Rush Wins!");
} else {
    let noWin = "No Winner!" 
    console.log(noWin);
}

//




















