/*
Multiplication Tables

Write a for loop that will iterate from 0 to 10. For each iteration of the
for loop, it will multiply the number by 9 and log the result
(e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from
1 to 10 (100 results total).
*/


/*
NOTES:

Syntax:

  for (INITIAL_CONDITION; LOOP_CONDITION; STATEMENT_TO_RUN_AT_END) {
    // the lines of code here will be executed repeatedly
    // as long as LOOP_CONDITION remains true	
  }

  - INITIAL_CONDITION: this statement is run once before the first
    loop iteration
  - LOOP_CONDITION: this is evaluated for "truth" before
    every loop iteration
  - STATEMENT_TO_RUN_AT_END: this statement is run at the end of
    every loop iteration

Example:

  for (var i = 0; i < 10; i++) {
	  console.log(i);
  }

  - var i = 0 is executed first
  - console.log(0) will be the first statement executed
  - i++ will execute next to increment i to 1
  - when i = 1, i is still < 10, so it will run again
  - etc.
*/

// YOUR CODE GOES HERE
for (var i = 0; i < 10; i++) {
	console.log(i * 9);
}