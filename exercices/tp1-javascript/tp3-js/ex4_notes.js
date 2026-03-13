let notes = [12,7,18,5,14,9,20,3,11,16];

let somme = 0;
let max = notes[0];
let min = notes[0];

let passable=0;
let assezBien=0;
let bien=0;
let tresBien=0;
let excellent=0;
let insuffisant=0;

for (let i=0;i<notes.length;i++){

    let note = notes[i];

    somme += note;

    if(note > max) max = note;
    if(note < min) min = note;

    if(note < 10) insuffisant++;
    else if(note <=11) passable++;
    else if(note <=13) assezBien++;
    else if(note <=15) bien++;
    else if(note <=17) tresBien++;
    else excellent++;
}

let moyenne = somme / notes.length;

console.log("Moyenne :", moyenne);
console.log("Max :", max);
console.log("Min :", min);

console.log("Passable :", passable);
console.log("Assez Bien :", assezBien);
console.log("Bien :", bien);
console.log("Très Bien :", tresBien);
console.log("Excellent :", excellent);
console.log("Insuffisant :", insuffisant);

let reussite = 0;

for (let i=0;i<notes.length;i++){
    if(notes[i] >= 10){
        reussite++;
    }
}

if(reussite > notes.length/2){
    console.log("Classe en réussite");
}else{
    console.log("Classe en difficulté");
}