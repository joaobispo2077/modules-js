console.log(`Trabalhando com listas`);

const salvador = 'Salvador';
const saoPaulo = 'São Paulo';

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba");

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);