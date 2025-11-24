// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-11-24

//---CONSTANTS

const IDEAL_WEIGHT: number = 91.0;
const MAX_DIFFERENCE: number = 14.9;

const MIN_WEIGHT: number = IDEAL_WEIGHT - MAX_DIFFERENCE; // 77kg
const MAX_WEIGHT: number = IDEAL_WEIGHT + MAX_DIFFERENCE; // 105kg

//--- USER INPUT

const weightInput = prompt("How much do you weigh?");

// User cancels the prompt
if (weightInput === null){
  console.log("Input cancelled. Please restart the program.");
} else {
  const weight: number = parseFloat(weightInput);

  if (isNaN(weight)){
    console.log("Invalid input. Please enter a valid number.");
  } else {
  // OUTPUT DECISCION

   if (weight >= MIN_WEIGHT && weight <= MAX_WEIGHT){
    console.log("You many enter the contest.");
   }else {
    console.log("You may NOT enter the contest.");
   }

  }
}