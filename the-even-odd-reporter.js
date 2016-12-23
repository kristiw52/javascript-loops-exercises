/*

The Even/Odd Reporter

Write a for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is even or odd, and report that
to the screen (e.g. "2 is even").

*/


/*
NOTES:

% (percent sign) is the modulus operator
This operator gives you the REMAINDER after performing a division operation

Example 1:
  3/3 === 1
  3%3 === 0

Example 2:
  4/2 === 2
  3%2 === 1

This is helpful when checking even or odd because... an even number is 
evenly divisible by two. <- this means the remainder should be 0

4 % 2 === 0 <- therefore this is even
5 % 2 !== 0 <- therefore this is odd



2 % 2 === 0 <- true
4 % 2 === 0 <- true
80 % 2 === 0 <- true

*/
// YOUR CODE GOES HERE
function isEven(value) {
	/* this is the same as below
	if (value % 2 === 0) {
		return true;
	} else {
		return false;
	}
	*/

	return value % 2 === 0;
}

for (var i = 0; i <= 20; i++) {
	//if (i % 2 === 0) {
	if (    isEven(i)     ) {
		console.log(i + " is even");
	} else {
		console.log(i + " is odd");
	}
}