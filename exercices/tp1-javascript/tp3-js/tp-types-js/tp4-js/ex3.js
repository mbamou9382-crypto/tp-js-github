const madToEur = m => m * 0.093;
const madToUsd = m => m * 0.099;
const madToGbp = m => m * 0.080;

function convertir(montant, fn, devise) {
  console.log(`${devise}: ${fn(montant).toFixed(2)}`);
}

const celsiusToFahrenheit = c => c * 9/5 + 32;
const celsiusToKelvin = c => c + 273.15;