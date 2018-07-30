// Write your code in this file!
function scuberGreetingForFeet(input){
  let result;
  if (input <= 400){
    result = "This one is on me!";
  } else if ( 2500 > input >= 2000) {
      result = "I will gladly take your thirty bucks."
    }
    else if (input > 2500){
      result = 'No can do.'
    }
    return result;
}
