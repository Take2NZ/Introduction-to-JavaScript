console.log('hello')
const sionesHeight = 1.69
const sionesWeight = 78

const TualelesHeight = 1.55
const TualelesWeight = 62

function calculateBMI(height, weight) {
    const BMI = weight / (height * height)
    return BMI
}

const sionesBMI = calculateBMI(sionesHeight, sionesWeight)
const TualelesBMI = calculateBMI(TualelesHeight, TualelesWeight)

console.log('siones BMI:', sionesBMI)
console.log('Tualeles BMI:', TualelesBMI)



// QUESTION 1 ...Compare the team's average scores 
//to determine the winner of the competition, 
//and print it to the console. 
//Don't forget that there can be a draw, 
//so test for that as well 
//(draw means they have the same average score).


//BONUS 1: Include a requirement for a minimum score of 100. 
//With this rule, a team only wins if it has a higher score than the other team,
//and the same time a score of at least 100 points. 
//HINT: Use a logical operator to test for minimum score, 
//as well as multiple if-else blocks.
//TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.

//BONUS 2: Minimum score also applies to a draw! 
//So a draw only happens when both teams have the same score and 
//both have a score greater than or equal to 100 points. 
//Otherwise, no team wins the trophy.
//TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.

//STEP 1 ...ENTERING DATA
// Required for AverageScore.......
const take2score = [96, 108, 89]
const Rushscore = [88, 91, 110]

// BONUS 1 ........
const take2scorebonus1 = [97, 112, 101]
const Rushscorebonus1 = [109, 95, 123]

// BONUS 2 ........
const take2scorebonus2 = [97, 112, 101]
const Rushscorebonus2 = [109, 95, 106]

//STEP 2 ....FUNCTION OF AVERAGE SCORE -(REUSABLE FUNCTION SO APPLIES TO ALL Q.)
function averagescore(score1, score2, score3) {
    const averagescore = (score1 + score2 + score3 / 3)
    return averagescore
}
console.log('averagescore')

//...........THIS IS LOOP SHOULD NOT HAVE BEEN USED FOR THIS EXERCISE.....
//...........MAY BE USED IN FUTURE...........
//Finding the average for Averagescore
// function averagescore (scores) {
//     let total = 0;
//     for (let i = 0; i , scores.length; i++) {
//     total += scores[i]
//     }
//     const average = total / scores.length;
//     console.log("The Average is: ", averagescore)
//     return average;
// }
//STEP - 3 FINDING THE AVERAGE
const take2averagescore = averagescore(96, 108, 89)
const Rushaveragescore = averagescore(88, 91, 110)

//BONUS 1...
const take2averagescorebonus1 = averagescore(97, 112, 101)
const Rushsaveragescorebonus1 = averagescore(109, 95, 123)

//BONUS 2...
const take2averagescorebonus2 = averagescore(97, 112, 101)
const Rushsaveragescorebonus2 = averagescore(109, 95, 106)

//STEP - 4 WRITE PSEUDO-CODE I.E. 
//FINDING THE TEST DATA RESULTS - WINNER OF AVERAGESCORE
if (take2averagescore > Rushaveragescore) {
    console.log("Winner is Take2: ", take2averagescore)
} else if (Rushaveragescore > take2averagescore) {
    console.log("Winner is RUSH: ", Rushaveragescore)
} else {
    console.log("The Teams have Drawn")
}
//BONUS 1 ...FINDING THE TEST DATA RESULTS (OVER 100)
if (take2averagescorebonus1 > Rushsaveragescorebonus1 && take2averagescorebonus1 > 100) {
    console.log("Winner is Take2: ", take2averagescorebonus1)
} else if (Rushsaveragescorebonus1 > take2averagescorebonus1 && Rushsaveragescorebonus1 > 100) {
    console.log("Winner is RUSH: ", Rushsaveragescorebonus1)
} else if (Rushsaveragescorebonus1 == take2averagescorebonus1) {
    console.log("The teams have drawn")
} else {
    console.log("There is no winner")
}
//BONUS 2....FINDING THE TEST DATA RESULTS (OVER 100)
if (take2averagescorebonus2 > Rushsaveragescorebonus2 && take2averagescorebonus2 > 100) {
    console.log("Winner is Take2: ", take2averagescorebonus2)
} else if (Rushsaveragescorebonus2 > take2averagescorebonus2 && Rushsaveragescorebonus2 > 100) {
    console.log("Winner is RUSH: ", Rushsaveragescorebonus2)
} else if (Rushsaveragescorebonus2 == take2averagescorebonus2) {
    console.log("The teams have drawn")
} else {
    console.log("No teams wins the trophy")
}

// if we want to simplify our code, we can do the same calculation using a function:
function findTheWinner(take2, rush) {
    if (take2 > rush && take2 > 100) {
        console.log("Winner is Take2: ", take2)
    } else if (rush > take2 && rush > 100) {
        console.log("Winner is Rush: ", rush)
    } else if (rush == take2) {
        console.log("The teams have drawn")
    } else {
        console.log("No teams wins the trophy")
    }
}

// then we can save the output of this function in variables:
const testDataWinner = findTheWinner(take2averagescore, Rushaveragescore)
const bonus1DataWinner = findTheWinner(take2averagescorebonus1, Rushsaveragescorebonus1)
const bonus2DataWinner = findTheWinner(take2averagescorebonus2, Rushsaveragescorebonus2)

//CHALLANGE #3: TIP CALCULATOR
// After the tournament everyone is ready to relax and enjoy some time
//eating good food at some tumeke restaurants.
//They won some money in the tournament 
//so want to tip everywhere they go 💰💰💰
// Your challenge is to make their lives easier by building 
//a tip calculator.
// Your task is to calculate the tip, depending on the bill value. 
//Create a variable called 'tip' for this. 
//They will tip 15% on any dinners that are between $50-$300, 
//anything else they will tip 20%.
// IMPORTANT - Try not to use if/else statements, 
//instead try to use a ternary operator.
// ** Credit to Jonas Schmedtmann for helping design these challenges!

const bill = 295;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
