let salaireBrut = 3500;
let anciennete = 6;
let tempsPartiel = false;

let prime = 0;

if (anciennete >= 2 && anciennete <= 5) {
    prime = 100;
} else if (anciennete > 5) {
    prime = 250;
}

let baseCalcul = salaireBrut + prime;

if (tempsPartiel) {
    baseCalcul = baseCalcul / 2;
}

let cotisations = 0;

if (baseCalcul <= 1500) {
    cotisations = baseCalcul * 0.10;
}
else if (baseCalcul <= 3000) {
    cotisations = 1500 * 0.10 +
                  (baseCalcul - 1500) * 0.20;
}
else {
    cotisations = 1500 * 0.10 +
                  1500 * 0.20 +
                  (baseCalcul - 3000) * 0.30;
}

let salaireNet = baseCalcul - cotisations;

console.log("Salaire brut :", salaireBrut);
console.log("Prime :", prime);
console.log("Base calcul :", baseCalcul);
console.log("Cotisations :", cotisations);
console.log("Salaire net :", salaireNet);