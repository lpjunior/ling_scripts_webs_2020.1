class AlunoController{

    private _nome: HTMLInputElement;
    private _matricula: HTMLInputElement;
    private _dataNascimento: HTMLInputElement;
    private _primeiraNota: HTMLInputElement;
    private _segundaNota: HTMLInputElement;

    constructor() {
        this._nome = <HTMLInputElement>document.querySelector('#nomeid');
        this._matricula = <HTMLInputElement>document.querySelector('#matriculaid');
        this._dataNascimento = <HTMLInputElement>document.querySelector('#dtnascid');
        this._primeiraNota = <HTMLInputElement>document.querySelector('#nota01id');
        this._segundaNota = <HTMLInputElement>document.querySelector('#nota02id');
    }

    adiciona(event: Event) {
        // cancela a execução do evento
        event.preventDefault();

        const aluno = new Aluno(
            this._nome.value, 
            parseInt(this._matricula.value), 
            // por padrão o chrome 2021-04-12
            new Date(this._dataNascimento.value.replace(/-/g, ',')),
            parseFloat(this._primeiraNota.value),
            parseFloat(this._segundaNota.value));

        console.log(aluno);
    }
}