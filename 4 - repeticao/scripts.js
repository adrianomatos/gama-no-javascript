
// TESTE SE NUMERO É PRIMO

let num = 41;
let dividoes = 0;

for (let i = 1; i <= num; i++) {
    
    if (num % i == 0) {
        dividoes++;
    }
}

if (dividoes == 2) {
    console.log("Número é primo");
} else {
    console.log("Número não é primo");
}


// pontuação em 26.640
// colocação em 14.358