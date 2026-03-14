let nombres = [0,NaN,Infinity,-Infinity,42,3.14,Number.MAX_SAFE_INTEGER+1,-0]

for(let i=0;i<nombres.length;i++){

let v = nombres[i]

if(Number.isNaN(v)){
console.log(v,"-> INVALIDE")
}

else if(v === Infinity || v === -Infinity){
console.log(v,"-> INFINI")
}

else if(1/v === -Infinity){
console.log(0,"-> ZERO NEGATIF")
}

else if(Number.isInteger(v) && Math.abs(v) <= Number.MAX_SAFE_INTEGER){
console.log(v,"-> ENTIER SUR")
}

else if(Number.isInteger(v)){
console.log(v,"-> ENTIER HORS LIMITES")
}

else{
console.log(v,"-> DECIMAL")
}

}
