/*
Write a function arrayToList that builds up a data structure like 
the previous one when given [1, 2, 3] as argument, and write a 
listToArray function that produces an array from a list. Also write 
the helper functions prepend, which takes an element and a list and 
creates a new list that adds the element to the front of the input 
list, and nth, which takes a list and a number and returns the element 
at the given position in the list, or undefined when there is no such 
element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array){
  var list = {};
  var hold = null;
  for (var x = array.length-1; x >= 0; x--){
    hold = list;
    list = {value: array[x], rest: hold}
  }
  return list;
}

function listToArray(list){
  array = [];
  for (var node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}  

function prepend(value, list) {
  return {value: value, rest: list}  
}

function nth(list, number){
  listToArray(list)
  if (array[number] === undefined){
  return undefined
  } else {
  var x = array[number];
  return x; 
  }
}