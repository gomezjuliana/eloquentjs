/*
Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters are 
in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is 
to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

function countChar(string, letter) {
  var count = 0;
  for (var x = 0; x < string.length; x++)
    if (string.charAt(x) == letter)
      count += 1;
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}