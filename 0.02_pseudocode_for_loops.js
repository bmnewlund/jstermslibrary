loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}

// I found this very helpfull peice of pseudocode on Mozilla developer site for JS. 
// this snippit lays out in layman terms how the if/else loop functions.
// there is also this statement about the iterative properties of the loop: 
// "So the amount of food needed is set at 10, and the amount the farmer currently has is set at 0. In each iteration of 
// the loop we check whether the amount of food the farmer has is equal to the amount he needs. 
// If so, we can exit the loop. If not, the farmer spends an hour collecting two portions of food, and the loop runs again."

// This is one of the best examples that I have found of how to think about loops and their ability to give results! I would share with anyone
// I can this explanation.