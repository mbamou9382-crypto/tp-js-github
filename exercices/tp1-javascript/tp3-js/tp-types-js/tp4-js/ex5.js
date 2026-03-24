function depensesSupA(depenses, seuil) {
  return depenses.filter(d => d.montant > seuil);
}

function appliquerSurDepenses(depenses, fn) {
  return depenses.map(d => ({
    ...d,
    montant: fn(d.montant)
  }));
}