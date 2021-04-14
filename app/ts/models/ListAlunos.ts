class ListAlunos {
    //private _alunos: Aluno[] = [];
    private _alunos: Array<Aluno> = [];

    adiciona(aluno: Aluno): void {
        this._alunos.push(aluno);
    }

    get pegaLista(): Aluno[] {
        //return this._alunos;
        return [].concat(this._alunos);
    }
}