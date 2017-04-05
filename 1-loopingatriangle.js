/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######;
*/

for (var x = "#"; x.length <= 7; x = x + "#"){
  console.log(x);
}