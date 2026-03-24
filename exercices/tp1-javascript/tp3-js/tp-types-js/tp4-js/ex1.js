const readline = require('readline-sync');

/**
 * Calcule le prix TTC
 * @param {number} prixHT
 * @param {number} tauxTVA
 * @returns {number}
 * @example
 * calculerTTC(100, 20) // 120
 */
function calculerTTC(prixHT, tauxTVA) {
  return prixHT * (1 + tauxTVA / 100);
}

/**
 * Applique une remise
 * @param {number} prix
 * @param {number} pourcentage
 * @returns {number}
 * @example
 * appliquerRemise(100, 10) // 90
 */
function appliquerRemise(prix, pourcentage) {
  return prix - (prix * pourcentage / 100);
}

/**
 * Calcule total HT
 * @param {Array} articles
 * @returns {number}
 */
function calculerTotal(articles) {
  let total = 0;
  for (let a of articles) {
    total += a.prixHT * a.quantite;
  }
  return total;
}

/**
 * Génère la facture
 * @param {Array} articles
 * @param {number} tauxTVA
 * @param {number} remise
 */
function genererFacture(articles, tauxTVA, remise) {
  console.log("\n===== FACTURE =====");

  for (let a of articles) {
    let total = a.prixHT * a.quantite;
    console.log(`${a.nom} x${a.quantite} ${total.toFixed(2)} DH`);
  }

  let totalHT = calculerTotal(articles);
  let montantRemise = totalHT * remise / 100;
  let totalApresRemise = totalHT - montantRemise;
  let tva = totalApresRemise * tauxTVA / 100;
  let totalTTC = totalApresRemise + tva;

  console.log("-------------------");
  console.log(`Total HT  : ${totalHT.toFixed(2)} DH`);
  console.log(`Remise ${remise}% : -${montantRemise.toFixed(2)} DH`);
  console.log(`TVA ${tauxTVA}% : ${tva.toFixed(2)} DH`);
  console.log("-------------------");
  console.log(`Total TTC : ${totalTTC.toFixed(2)} DH`);
  console.log("===================");
}

// 🔹 Input utilisateur
let articles = [];

for (let i = 0; i < 3; i++) {
  let nom = readline.question("Nom article: ");
  let prix = readline.questionFloat("Prix HT: ");
  let qte = readline.questionInt("Quantité: ");

  articles.push({ nom: nom, prixHT: prix, quantite: qte });
}

let tva = readline.questionFloat("TVA (%): ");
let remise = readline.questionFloat("Remise (%): ");

genererFacture(articles, tva, remise);