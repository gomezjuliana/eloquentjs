/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array 
that has the same elements in the inverse order. The second, reverseArrayInPlace, 
does what the reverse method does: it modifies the array given as argument in 
order to reverse its elements. Neither may use the standard reverse method.
*/

function reverseArray(array){
  var newArray = [];
  for (var x=0; x<array.length;x++){
    newArray.unshift(array[x]);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue){
  var x= 0;
  var y= arrayValue.length - 1;
  
  while (x < y){
    var hold = arrayValue[x];
    arrayValue[x] = arrayValue[y];
    arrayValue[y] = hold;
    
    x++;
    y--;
  }
}