class AlunoController {
    constructor() {
        this._listAlunos = new ListAlunos();
        this._alunoView = new AlunoView();
        this._nome = document.querySelector('#nomeid');
        this._matricula = document.querySelector('#matriculaid');
        this._dataNascimento = document.querySelector('#dtnascid');
        this._primeiraNota = document.querySelector('#nota01id');
        this._segundaNota = document.querySelector('#nota02id');
        this._alunoView.addTable(this._listAlunos);
    }
    adiciona(event) {
        event.preventDefault();
        const aluno = new Aluno(this._nome.value, parseInt(this._matricula.value), new Date(this._dataNascimento.value.replace(/-/g, ',')), parseFloat(this._primeiraNota.value), parseFloat(this._segundaNota.value));
        this._listAlunos.adiciona(aluno);
        this._alunoView.addTable(this._listAlunos);
    }
}
