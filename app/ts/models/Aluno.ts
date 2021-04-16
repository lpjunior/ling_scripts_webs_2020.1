export class Aluno {

    // declaração das propriedades (atributos) da classe
    // private String _nome; -- Java
    private _nome: string;
    private _matricula: number;
    private _dataNascimento: Date;
    private _primeiraNota: number;
    private _segundaNota: number;

    constructor(nome: string, matricula: number, dataNascimento: Date, primeiraNota: number, segundaNota: number) {
        this._nome = nome;
        this._matricula = matricula;
        this._dataNascimento = dataNascimento;
        this._primeiraNota = primeiraNota;
        this._segundaNota = segundaNota;
    }

    get nome(): string {
        return this._nome;
    }

    get matricula(): number {
        return this._matricula;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    get primeiraNota(): number {
        return this._primeiraNota;
    }

    get segundaNota(): number {
        return this._segundaNota;
    }

    get media(): number {
        return (this._primeiraNota + this._segundaNota) / 2;
    }
}