//----------Who Wins the Throphy?----------//

// TEST DATA: Take2 scores 96, 108 and 89. RUSH scores 88, 91 and 110.

// TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.
// TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.


const take2Scores = [96, 108, 89];
const rushScores = [88, 91, 110];

// Calculate average score for each team
const take2AvgScore = (take2Scores.reduce((acc, score) => acc + score, 0)) / take2Scores.length;
const rushAvgScore = (rushScores.reduce((acc, score) => acc + score, 0)) / rushScores.length;

// Determine winner or draw
if (take2AvgScore > rushAvgScore && take2AvgScore >= 100) {
  console.log(`Take2 wins with an average score of ${take2AvgScore}`);
} else if (rushAvgScore > take2AvgScore && rushAvgScore >= 100) {
  console.log(`RUSH wins with an average score of ${rushAvgScore}`);
} else if (take2AvgScore === rushAvgScore && take2AvgScore >= 100 && rushAvgScore >= 100) {
  console.log(`It's a draw with both teams having an average score of ${take2AvgScore}`);
} else {
  console.log("No team wins the trophy");
}



//----------TIP CALCULATOR----------//

// Tip calculation
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill = 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);



//----------Season2----------//

// Season 2 Challenge
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgTake2 = calcAverage(44, 23, 71);
const avgRush = calcAverage(65, 54, 49);

const checkWinner = (avgTake2, avgRush) =>
  avgTake2 > avgRush ? "Take2 win"  (`${avgTake2} vs ${avgRush}` ) : ( `Rush win ${avgRush} vs ${avgTake2}`)

console.log(checkWinner(avgTake2, avgRush));

const avgTake2B = calcAverage(85, 54, 41);
const avgRushB = calcAverage(23, 34, 27);

console.log(checkWinner(avgTake2B, avgRushB));
//[12:06 PM]
//----------BMI Calculator----------//

// Test data 1
const sioneMass1 = 78; // kg
const sioneHeight1 = 1.69; // m
const tualeleMass1 = 62; // kg
const tualeleHeight1 = 1.55; // m

// Test data 2
const sioneMass2 = 95; // kg
const sioneHeight2 = 1.88; // m
const tualeleMass2 = 85; // kg
const tualeleHeight2 = 1.66; // m

// Calculate BMI using test data 1
const sioneBMI1 = sioneMass1 / (sioneHeight1**  2);
const tualeleBMI1 = tualeleMass1 / (tualeleHeight1**  2);

// Calculate BMI using test data 2
const sioneBMI2 = sioneMass2 / (sioneHeight2**  2);
const tualeleBMI2 = tualeleMass2 / (tualeleHeight2**  2);

// Log the results to the console
console.log("Sione's BMI using test data 1 is:", sioneBMI1);
console.log("Tualele's BMI using test data 1 is:", tualeleBMI1);
console.log("Sione's BMI using test data 2 is:", sioneBMI2);
console.log("Tualele's BMI using test data 2 is:", tualeleBMI2);

// Compare the BMI of Sione and Tualele
const sioneHigherBMI1 = sioneBMI1 > tualeleBMI1;
const sioneHigherBMI2 = sioneBMI2 > tualeleBMI2;

// Print a statement indicating who has the higher BMI
if (sioneHigherBMI1) {
    console.log("Sione has a higher BMI than Tualele using test data 1. Sione's BMI is:", sioneBMI1, "and Tualele's BMI is:", tualeleBMI1);
  } else {
    console.log("Tualele has a higher BMI than Sione using test data 1. Tualele's BMI is:", tualeleBMI1, "and Sione's BMI is:", sioneBMI1);
  }

  if (sioneHigherBMI2) {
    console.log("Sione has a higher BMI than Tualele using test data 2. Sione's BMI is:", sioneBMI2, "and Tualele's BMI is:", tualeleBMI2);
  } else {
    console.log("Tualele has a higher BMI than Sione using test data 2. Tualele's BMI is:", tualeleBMI2, "and Sione's BMI is:", sioneBMI2);
}

