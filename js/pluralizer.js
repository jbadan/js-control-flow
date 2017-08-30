// and output the pluralized form of the word,
// depending on what count is. For example, "5 cats" or "1 dog".

var thing = 'dog';
var count = 7;

if (count === 1) {
  console.log(count +' '+ thing);
} else{
  console.log(count +' '+thing +'s');
}

