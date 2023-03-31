function chispum(num) {
    if(num % 3 == 0 && num % 5 == 0) return "chispum";
    if(num % 3 == 0)  return "chis";
    if(num % 5 == 0) return "pum";
    else return 1;
}

module.exports = chispum;