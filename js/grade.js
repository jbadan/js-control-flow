// ###grade.js Write a program that will print the letter grade, given a variable with a test score.
// Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.
function getGrade(grade){
  if(Number.isInteger(grade)===true){
    switch(true){
      case grade >= 92 && grade <= 100:
        console.log('You got an A!');
        break;
      case grade >= 80 && grade <= 91:
        console.log('You got a B!');
        break;
      case grade >= 70 && grade <= 79:
        console.log('You got a C.');
        break;
      case grade >= 60 && grade <= 69:
        console.log('You got a D.');
        break;
      case grade >= 0 && grade <= 59:
        console.log('You got a F.');
        break;
      default:
        console.log('That is not a valid grade.');
    }
  }else{
    console.log('That is not an integer');
  }
}
getGrade(92);
