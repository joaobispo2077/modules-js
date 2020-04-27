console.log(`Trabalhando com condicionais`);



const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);


if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log("O comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("O comprador não é maior de idade, não posso vender");
}


// console.log(idadeComprador);
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não posso vender");
    console.log(`Sua idade é ${idadeComprador}`);
    console.log(`O status do seu acompanhamento é ${estaAcompanhada}`);

}

console.log("Embarque: \n\n");

if (idadeComprador > 18 && temPassagemComprada) {
    console.log("Boa viagem!");

} else {
    console.log("Você não pode embarcar");


}