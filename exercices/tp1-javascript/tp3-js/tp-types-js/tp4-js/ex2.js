function calculerMoyenne(notes) {
  return notes.reduce((a, b) => a + b, 0) / notes.length;
}

function obtenirMention(m) {
  if (m < 10) return "Insuffisant";
  if (m < 13) return "Passable";
  if (m < 16) return "Bien";
  if (m < 18) return "Très Bien";
  return "Excellent";
}

function filtrerEtudiants(etudiants, predicat) {
  return etudiants.filter(predicat);
}

function classerParMoyenne(etudiants) {
  return etudiants.sort((a, b) =>
    calculerMoyenne(b.notes) - calculerMoyenne(a.notes)
  );
}