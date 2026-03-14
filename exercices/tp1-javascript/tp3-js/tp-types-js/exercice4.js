let paires = [
[0,""],
[0,"0"],
[0,false],
["",false],
[null,undefined],
[null,false],
[NaN,NaN],
[1,"1"],
[" \t\n ",0]
]

let compteur = 0

for(let i=0;i<paires.length;i++){

let a = paires[i][0]
let b = paires[i][1]

let egal = (a == b)
let strict = (a === b)

console.log(a,"==",b,"->",egal," | ",a,"===",b,"->",strict)

if(egal && !strict){
compteur++
}

}

console.log("---")
console.log(compteur,"paire(s) où == et === donnent des résultats différents")
