let idade = 0;

console.log("Contando até 5\n\n");
while (idade <= 5) {
    console.log("Aniversário: "+idade);
    idade+=2;   /* incremento manual */
} 
console.log("\n\n");

// EXECUTA AO MENOS 1 VEZ
let tamanho = 10;   
do {
    console.log("Crescendo "+tamanho);
    tamanho++;  /* incremento "adicional" */
} while (tamanho < 5);
console.log("\n\n");
//////////////////////////////////////////////////////////////////////////////////
// FOR
for (let dinheiro = 1; dinheiro <= 20; dinheiro++) {
    console.log(`Meu saldo é ${dinheiro}`);
    if (dinheiro == 13) {
        console.log("Odeio este número, parar por aqui")
        break;  // SAIR DO LOOP
    }
}console.log("\n\n");

// FOR
for (let dinheiro = 1; dinheiro <= 20; dinheiro++) {
    if (dinheiro == 13) {
        console.log("----> Esse número não quero");
        continue;   //PULAR PARA PRÓXIMO ÍTEM DO LOOP
    }
    console.log(`Meu saldo é ${dinheiro}`);
}

// DEU ERRO
/* for (let dinheiro = 1; dinheiro <= 10; dinheiro++) {
    console.log("Tô rico!\n");
    //const element = array[dinheiro];
} */
