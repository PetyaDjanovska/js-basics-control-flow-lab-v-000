// Write your code in this file!
function scuberGreetingForFeet(input){
  let result;
  if (input <= 400){
    result = "This one is on me!";
  } else if ( 400 < input <= 2500 ) {
      result = "I will gladly take your thirty bucks."
    }
    else {
      result = 'No can do.'
    }
    return result;
}
