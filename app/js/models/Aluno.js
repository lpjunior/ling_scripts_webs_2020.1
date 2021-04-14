class Aluno {
    constructor(nome, matricula, dataNascimento, primeiraNota, segundaNota) {
        this._nome = nome;
        this._matricula = matricula;
        this._dataNascimento = dataNascimento;
        this._primeiraNota = primeiraNota;
        this._segundaNota = segundaNota;
    }
    get nome() {
        return this._nome;
    }
    get matricula() {
        return this._matricula;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    get primeiraNota() {
        return this._primeiraNota;
    }
    get segundaNota() {
        return this._segundaNota;
    }
    get media() {
        return (this._primeiraNota + this._segundaNota) / 2;
    }
}
