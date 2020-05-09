export class Funcionario {
    constructor() {
        this._nome;
        this._salario;
        this._cpf;

        this._bonificacao;
        this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
}