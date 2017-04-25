/* Compute and output the average age of the people in the ancestry data set per century.*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// I need to add the century to each person
function addCentury(array) {
  for (var i = 0; i < array.length; i++){
    array[i].century = Math.ceil(array[i].died / 100)
  }
  seperateByCentury(array);
}

// then I'll filter it in groups by century
var groups = {}
function seperateByCentury(a){
  for (var i = 0; i < a.length; i++){
    var groupName = a[i].century;
    if (!groups[groupName]){
      groups[groupName] = []
    }
    groups[groupName].push(a[i].died - a[i].born)
  }
   printAverages(groups)
}

//then I make the for loop that prints the average ages of each century
function printAverages(array) {
  for (var i = 16; i <= 21; i++){
  console.log(array.i, Math.round(average(array[i])))
  }
}

addCentury(ancestry);