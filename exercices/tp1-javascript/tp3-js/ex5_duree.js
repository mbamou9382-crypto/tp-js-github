function convertir(secondes){

    if(secondes < 60){
        console.log(secondes + " seconde(s)");
    }

    else if(secondes < 3600){

        let minutes = Math.floor(secondes/60);
        let reste = secondes % 60;

        console.log(minutes + " minute(s) et " + reste + " seconde(s)");
    }

    else if(secondes < 86400){

        let heures = Math.floor(secondes/3600);
        let minutes = Math.floor((secondes % 3600)/60);
        let reste = secondes % 60;

        console.log(heures + " heure(s), " + minutes + " minute(s) et " + reste + " seconde(s)");
    }

    else{

        let jours = Math.floor(secondes/86400);
        let heures = Math.floor((secondes % 86400)/3600);
        let minutes = Math.floor((secondes % 3600)/60);
        let reste = secondes % 60;

        console.log(jours + " jour(s), " + heures + " heure(s), " + minutes + " minute(s) et " + reste + " seconde(s)");
    }
}

convertir(45);
convertir(130);
convertir(3725);
convertir(90061);
convertir(172800);