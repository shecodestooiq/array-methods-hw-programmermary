  //!your solution should be inside the function.
  //1-Use a for loop to iterate over the ages array and double each age. Store the doubled ages in a new array called doubledAges and Print the doubledAges array to the console.

  //2-Use the forEach method to loop through the ages array and print each age to the console.

  //3-Use the filter method to create a new array called adults that contains only ages greater than or equal to 18.

  //4-Use the map method to create a new array called ageStrings that contains string representations of each age in the ages array.

  //5-please make sure to name your arrays(variables) accordingly to the names in the return statement.
  let ages=[25, 18, 12, 16, 40]
  let doubledAges = []
  let adults = []
function processAges(ages) {
doubledAges = ages.map(age => age * 2)
  ages.forEach(function (age , index) {
    console.log(age)
  });
  adults = ages.filter(function(age){
    return age >= 18;
  }); 
  ageStrings = ages.map(function(age){
    return age.toString()})
  return { doubledAges, adults, ageStrings };
}
processAges(ages)
module.exports = processAges;





 