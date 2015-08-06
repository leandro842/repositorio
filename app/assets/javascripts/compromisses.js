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

function print_result(num) {
  var div = document.getElementById("resultado");

  if (prime_number(num)) {
    div.innerHTML="É primo";
  }else {
    div.innerHTML="Não é primo";
  } 
}
