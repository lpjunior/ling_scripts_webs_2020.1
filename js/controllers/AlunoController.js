class AlunoController {
    constructor() {
        this._nome = document.querySelector('#nomeid');
        this._matricula = document.querySelector('#matriculaid');
        this._dataNascimento = document.querySelector('#dtnascid');
        this._primeiraNota = document.querySelector('#nota01id');
        this._segundaNota = document.querySelector('#nota02id');
    }
    adiciona(event) {
        // cancela a execução do evento
        event.preventDefault();
        const aluno = new Aluno(this._nome.value, this._matricula.value, this._dataNascimento.value, this._primeiraNota.value, this._segundaNota.value);
        console.log(aluno);
    }
}
