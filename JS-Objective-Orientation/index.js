import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente = new Cliente("João", 11122233309);
const cliente2 = new Cliente("Alice", 33322211109);

const contaCorrente = new ContaCorrente(cliente, 1001);
const conta2 = new ContaCorrente(cliente, 1002);

const valorDepositado = contaCorrente.depositar(10000);
console.log(valorDepositado);

const valorSacado = contaCorrente.sacar(75);
console.log(valorSacado);