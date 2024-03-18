function resistor(r1, r2) {
  let rEQ = (r1 * r2) / (r1 + r2);
  console.log("Resistor EQ é igual a : " + rEQ);
}
resistor(10, 20);

function calculoIRPF(base, centavos) {
  var valor = parseFloat(base.toString() + "." + centavos.toString());
  if (valor < 22847.76) {
    console.log("Alíquota não necessária");
  } else if (valor >= 22847.77 && valor <= 33919.8) {
    console.log(
      "Alíquota de 7,5%. Você deverá pagar: R$ " + (valor * 0.075).toFixed(2)
    );
  } else if (valor >= 33919.81 && valor <= 45012.6) {
    console.log(
      "Alíquota de 15%. Você deverá pagar: R$ " + (valor * 0.15).toFixed(2)
    );
  } else if (valor >= 45012.61 && valor <= 55976.16) {
    console.log(
      "Alíquota de 22,5%. Você deverá pagar: R$ " + (valor * 0.225).toFixed(2)
    );
  } else {
    console.log(
      "Alíquota de 27%. Você deverá pagar: R$ " + (valor * 0.27).toFixed(2)
    );
  }
}

calculoIRPF(22847, 76);

function multiplos() {
  let soma = 0;

  for (let i = 1; i <= 500; i++) {
    if (i % 15 === 0) {
      soma += i;
      console.log("Somando " + i + ", o valor da soma = " + soma);
    }
  }
}
multiplos();
