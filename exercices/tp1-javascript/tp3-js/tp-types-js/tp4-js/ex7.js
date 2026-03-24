function creerCaisse(catalogue) {
  let panier = [];

  return {
    scanner(code, qte) {
      let produit = catalogue.find(p => p.code === code);
      if (!produit) {
        console.log("Produit introuvable");
        return;
      }
      panier.push({ ...produit, qte });
    },

    calculerTotal() {
      return panier.reduce((t, p) => t + p.prix * p.qte, 0);
    }
  };
}