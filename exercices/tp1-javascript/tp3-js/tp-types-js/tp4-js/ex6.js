const creerContact = (function () {
  let id = 0;
  return function(nom, prenom, tel, email, ville) {
    id++;
    return { id, nom, prenom, tel, email, ville };
  }
})();