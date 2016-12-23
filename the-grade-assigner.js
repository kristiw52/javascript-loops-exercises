/*

The Grade Assigner

Check the results of your assignGrade function from the conditionals exercise
by logging every value from 60 to 100: your log should show "For 88, you got a
B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
logging each grade point in the range.

*/

// YOUR CODE GOES HERE
// [x] There should be a function named scoreToLetterGrade
// [ ] It should take one input
//     this input should be called "score" within the scope of the function
// [ ] It should return the proper letter grade for the given input
//     depending on the value of the input called "score", return
//     the proper letter grade

function scoreToLetterGrade(score) {
	if (score <= 59) {
		return "F";
	} else if (score <= 69 && score >= 60) {
		return "D";
	} else if (score <= 79 && score >= 70) {
		return 'C';
	} else if (score <= 89 && score >= 80) {
		return 'B';
	} else {
		return 'A';
	}
}
for (var grade = 60; grade <= 100; grade++) {
	
	var letterGrade = scoreToLetterGrade(grade);

    /* this is the same as above
	if (grade <= 59) {
		letterGrade = 'F';
		//console.log("For " + grade + ", you got a F");
	} else if (grade <= 69 && grade >= 60) {
		letterGrade = 'D';
		//console.log("For " + grade + ", you got a D");
	} else if (grade <= 79 && grade >= 70) {
		letterGrade = 'C';
		//console.log("For " + grade + ", you got a C");
	} else if (grade <= 89 && grade >= 80) {
		letterGrade = 'B';
		//console.log("For " + grade + ", you got a B");
	} else {
		letterGrade = 'A';
		//console.log("For " + grade + ", you got a A");
	}
	*/

	console.log("For " + grade + ", you got a " + letterGrade);
}