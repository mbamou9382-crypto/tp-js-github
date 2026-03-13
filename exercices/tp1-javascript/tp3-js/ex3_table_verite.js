let valeurs = [true, false];

console.log("a | b | a&&b | a||b | !a | !b");

for (let i = 0; i < valeurs.length; i++) {
    for (let j = 0; j < valeurs.length; j++) {

        let a = valeurs[i];
        let b = valeurs[j];

        console.log(
            a,"|",
            b,"|",
            a && b,"|",
            a || b,"|",
            !a,"|",
            !b
        );
    }
}