import { Cliente } from "./Cliente.js";

import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";

import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const cliente1 = new Cliente("João", 11122233309, 123456);

const diretor = new Diretor("João Diretor", 10000, 11122233309);

const gerente = new Gerente("João Gerente", 50000, 11122233309);

SistemaAutenticacao.login(diretor, 123456)