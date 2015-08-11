//Prime Number
function prime_number(num) {

  var divisor_cont = 0;

  for (var cont = 1; cont <= num/2; cont++) {
    if (num % cont == 0) {
      divisor_cont++;
    }
  }

  if (divisor_cont == 1) {
    console.log("É primo");
    return true;
  }else {
    console.log("Não é primo");
    return false;
  }
}

//Leap Year
function leap_year(year) {
  if (year % 400 == 0 || year % 4 == 0) {
    return true;
  }else {
    return false;
  }
}

//Majority
var leandro = {name: "Leandro", height: "1.78m", age: 24, weight: 68};
var juvenuncio = {name: "Juvenuncio", height: "1.49", age: 17, weight: 102};

function majority(person) {
  return person.age;
}































































function print_result(num) {
  var div = document.getElementById("resultado");

  if (prime_number(num)) {
    div.innerHTML="É primo";
  }else {
    div.innerHTML="Não é primo";
  } 
}
