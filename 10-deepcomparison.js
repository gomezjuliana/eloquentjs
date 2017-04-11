/*
Write a function, deepEqual, that takes two values and returns true only 
if they are the same value or are objects with the same properties whose 
values are also equal when compared with a recursive call to deepEqual.
*/

function deepEqual(first, second){
  if (first === second){
  return true;
  } if (typeof first != "object" || first == null ||
        typeof second != "object" || second == null){
  return false;
  }
  
  var firstProps = 0;
  var secondProps =0;
  
  for (var prop in first){
  firstProps += 1;
  }
  
  for (var prop in second){
  secondProps += 1;
    if (!(prop in first) || !deepEqual(first[prop], second[prop])){
    return false;
    }
  }
  return firstProps == secondProps;
}
