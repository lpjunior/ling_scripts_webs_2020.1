class ListAlunos {
    constructor() {
        this._alunos = [];
    }
    adiciona(aluno) {
        this._alunos.push(aluno);
    }
    get pegaLista() {
        return [].concat(this._alunos);
    }
}
