console.log(`\nTrabalhando com loops`);



const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existente!");
        destinoExiste = true;
        break;
    } else {
        console.log("Destino não existente!");
    }
    contador++;
}

// for (i = 0; i < listaDeDestinos.length; i++) {
//     if (destino == listaDeDestinos[i]) {
//         console.log(`O seu destino é ${listaDeDestinos[i]}`);
//     } else {
//         console.log(`O seu destino não é ${listaDeDestinos[i]}`);

//     }
// }

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");

} else {
    console.log("Desculpe tivemos um erro!");

}


for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}