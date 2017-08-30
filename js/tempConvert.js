// Your program should take an integer (in Fahrenheit) and convert
// the temperature to Celsius.
// The output of the program should read:
// "X degrees Fahrenheit is Y degrees Celsius"

// T(°C) = (T(°F) - 32) × 5/9
// var fahren

function convertTemp(fahren){
  var celcius = Math.floor((fahren - 32)*(5/9));
  if(fahren === 1){
    console.log(fahren+' degree Fahrenheit is '+celcius+' degrees Celsius.');
  }else if(celcius === 1){
    console.log(fahren+' degree Fahrenheit is '+celcius+' degree Celsius.');
  }
  else{
    console.log(fahren+' degrees Fahrenheit is '+celcius+' degrees Celsius.');
  }
};

convertTemp(70);
