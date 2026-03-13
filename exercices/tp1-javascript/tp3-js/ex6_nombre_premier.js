function estPremier(n){

    if(n <= 1) return false;

    for(let i=2;i<n;i++){
        if(n % i === 0){
            return false;
        }
    }

    return true;
}

let compteur = 0;

for(let i=1;i<=100;i++){

    if(estPremier(i)){
        console.log(i);
        compteur++;
    }

}

console.log("Total :", compteur);

let n = 501;

while(true){

    if(estPremier(n)){
        console.log("Premier nombre premier > 500 :", n);
        break;
    }

    n++;
}

/*
while est utilisé ici car on ne sait pas combien
d'itérations seront nécessaires pour trouver
le premier nombre premier supérieur à 500.
*/