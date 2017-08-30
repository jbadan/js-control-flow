// Your program should take an integer (in Fahrenheit) and convert
// the temperature to Celsius.
// The output of the program should read:
// "X degrees Fahrenheit is Y degrees Celsius"

// T(°C) = (T(°F) - 32) × 5/9
// var fahren

function convertTempToC(fahren){
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


function convertTempToF(celcius2){
  var fahren2 = Math.floor((celcius2 + 32)*(9/5));
  if(fahren2 === 1){
    console.log(celcius2+' degrees Celcius is '+fahren2+' degree Fahrenheit.');
  }else if(celcius2 === 1){
    console.log(celcius2+' degree Celcius is '+fahren2+' degrees Fahrenheit.');
  }
  else{
    console.log(celcius2+' degrees Celcius is '+fahren2+' degrees Fahrenheit.');
  }
};

convertTempToC(70);
convertTempToF(33);
