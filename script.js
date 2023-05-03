console.log('hello');

// Challenge #1: BMI Calculator
// Challenge #1-1. (Using TEST DATA 2)

// TEST DATA 1: Sione weighs 78kg and is 1.69 m tall. Tualele weighs 62kg and is 1.55m tall.
// TEST DATA 2: Sione weighs 95kg and is 1.88m tall. Tualele Weighs 85kg and is 1.66m tall.

let sionesWeight = "95";
let sionesHeight = "1.88";

let tualelesWeight = "85";
let tualelesHeight = "1.66";

// Challenge #1-2.
// Calculate BMI via: BMI = mass/ height **2 or BMI = mass/ (height x height).

console.log("Sione's BMI: ", sionesWeight/ sionesHeight **2);
console.log("Tualele's BMI: ", tualelesWeight/ tualelesHeight **2);

let sionesBMI = sionesWeight/ sionesHeight **2;
let tualelesBMI = tualelesWeight/ tualelesHeight **2;

// Challenge #1-3.

let sioneHigherBMI = Boolean(sionesBMI > tualelesBMI);
console.log("Does Sione have a higher BMI than Tualele?: ", sioneHigherBMI);

// Challenge #1-4.
// Regular if else statement:

if (sionesBMI > tualelesBMI) {
    let higherBMI = "Sione";
    console.log("The person with the higher BMI is: ", higherBMI);
} else {
    let higherBMI = "Tualele";
    console.log("The person with the higher BMI is: ", higherBMI);
}

// Ternary if else statement:

let higherBMI = 26.87867813490267 > 30.84627667295689 ? console.log("Sione's BMI is higher") : console.log("Tualele's BMI is higher");

// Challenge #2: Who Wins the Trophy??
// TEST DATA: Take2 scores 96, 108 and 89. RUSH scores 88, 91 and 110.
// Challenge #2-1.

function avgScore(a, b, c) {
    let sum = (a + b + c) /3;
    return sum;
}
 
let take2AvgScore = avgScore(96, 108, 89);
console.log("Take2's Average Score: ", take2AvgScore);

let rushAvgScore = avgScore(88, 91, 110);
console.log("Rush's Average Score: ", rushAvgScore);

// Challenge #2-2.

if (take2AvgScore == rushAvgScore) {
    let draw = "It's a Draw!";
console.log(draw);
} else {
    take2AvgScore > rushAvgScore ? console.log("Take2 Wins!") : console.log("Rush Wins!");
}

// Challenge #2-3(BONUS 1).
// TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.

let take2AvgScoreBonus1 = avgScore(97, 112, 101);
console.log("Take2's Bonus Game 1 Average Score: ", take2AvgScoreBonus1);

let rushAvgScoreBonus1 = avgScore(109, 95, 123);
console.log("Rush's Bonus Game 1 Average Score: ", rushAvgScoreBonus1);

if (rushAvgScoreBonus1 >= 100) {
    take2AvgScoreBonus1 > rushAvgScoreBonus1 ? console.log("Take2 Wins!") : console.log("Rush Wins!");
} 
else if (take2AvgScoreBonus1 >= 100) {
    take2AvgScoreBonus1 > rushAvgScoreBonus1 ? console.log("Take2 Wins!") : console.log("Rush Wins!");
}
 else {
    let noWin = "No Winner!"; 
    console.log(noWin);
}

// Challenge #2-4(BONUS 2).
// TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.

let take2AvgScoreBonus2 = avgScore(97, 112, 101);
console.log("Take2's Bonus Game 2 Average Score: ", take2AvgScoreBonus2);

let rushAvgScoreBonus2 = avgScore(109, 95, 106);
console.log("Rush's Bonus Game 2 Average Score: ", rushAvgScoreBonus2);

if (rushAvgScoreBonus2 >= 100) {
    if (take2AvgScoreBonus2 == rushAvgScoreBonus2) {
    let draw = "It's a Draw!";
console.log(draw);
} else {
    take2AvgScoreBonus2 > rushAvgScoreBonus2 ? console.log("Take2 Wins!") : console.log("Rush Wins!");
} 
} else if (take2AvgScoreBonus2 >= 100) {
    if (take2AvgScoreBonus2 == rushAvgScoreBonus2) {
    let draw = "It's a Draw!";
console.log(draw);
} else {
    take2AvgScoreBonus2 > rushAvgScoreBonus2 ? console.log("Take2 Wins!") : console.log("Rush Wins!");
}
} else {
    let noWin = "No Winner!"; 
    console.log(noWin);
}

// Challenge #3: Tip Calculator
// Challenge #3-1.
// T.C. via If/Else

let bill = 200;
let tip1 
if (bill >= 50 && bill <= 300) {
    tip1 = bill * 0.15
} else { 
    tip1 = bill * 0.20
}
console.log("The Tip Is: ", tip1);

// T.C. via Ternary Operator
let dinnervalue = 25
let tip = (dinnervalue >= 50 && dinnervalue <= 300) ? console.log("15% Tip Is: ", (dinnervalue * 0.15)) : console.log("20% Tip Is: ", (dinnervalue * 0.20));

// Challenge #4: Season 2
// TEST DATA 1: TAKE2 SCORE 44, 23 AND 71 : RUSH SCORE 65, 54 AND 49
// TEST DATA 2: TAKE2 SCORE 85, 54 AND 41 : RUSH SCORE 23, 34 AND 27
// Challenge #4-1.

let calcAverage = (score1, score2, score3) => {
    let total = score1 + score2 + score3;
    let average = total / 3;
    return average;
  };

// Challenge #4-2.

  let take2AverageScore1 = calcAverage(44, 23, 71);
console.log("Take2's First Average Score: ", take2AverageScore1);
  
  let rushAverageScore1 = calcAverage(65, 54, 49);
console.log("Rush's First Average Score: ", rushAverageScore1);

let take2AverageScore2 = calcAverage(85, 54, 41);
console.log("Take2's Second Average Score: ", take2AverageScore2);
  
  let rushAverageScore2 = calcAverage(23, 34, 27);
console.log("Rush's Second Average Score: ", rushAverageScore2);

// Challenge #4-3.






















