let idade = 35;

if (idade >= 18) {
    console.log("Maior de idade: " + idade)
} else {
    console.log("Menor de idade: " + idade)
}

let nome = "Adriano";
if (nome == "Adriano" && idade >= 18) {
    console.log("Pode entrar " + nome)
} else if (nome == "Adriano" && idade < 18) {
    console.log(nome + ", falta ter 18 anos!")
} else {
    console.log("Você ñ tem aut. " + nome)
}

//////////////////////////////////////////////////////////////////////////////////

switch (nome) {
    case "Rebeca":
        console.log("Nome: " + nome);
        break;
    case "Júnior":
        console.log("Nome: " + nome);
        break;
    case "Adriano":
        console.log("Nome: " + nome);
        break;
    case "Consuelha":
        console.log("Nome: " + nome);
        break;
    default:
        break;
}