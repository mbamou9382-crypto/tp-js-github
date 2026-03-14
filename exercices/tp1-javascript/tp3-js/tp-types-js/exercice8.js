let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim()

if(nomCorrige === ""){
nomCorrige = "Inconnu"
}

let ageNombre = parseInt(age)

let emailValide = email.includes("@") && email.split("@")[1].includes(".")

let score = parseInt(scoreJeu)

if(Number.isNaN(score)){
score = 0
}

let admin = false
if(estAdmin === "true") admin = true

let connexion = derniereConnexion ?? "Jamais connecté"

let nbConn = Number(nombreConnexions)

console.log("===== RAPPORT UTILISATEUR =====")
console.log("nom :",nomCorrige)
console.log("age :",ageNombre)
console.log("email :",email,emailValide?"(valide)":"(invalide)")
console.log("scoreJeu :",score)
console.log("estAdmin :",admin)
console.log("derniereConnexion :",connexion)

if(nbConn === 0){
console.log("nombreConnexions : Aucune connexion")
}else{
console.log("nombreConnexions :",nbConn)
}

console.log("================================")
