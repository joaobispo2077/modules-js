//cLASSE ABSTRATA

export class Conta {

    constructor(tipo, saldoInicial, cliente, agencia) {

        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente,s pois essa é uma  classe abstrata");

        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;

    }


    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //MÉTODO ABSTRATO
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato, você deveria sobrescrever esse método com o de outra classe");
    }


    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado && valorSacado > 0) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }


    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {

        if (this._tipo == "salario") {
            return;
        }

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}