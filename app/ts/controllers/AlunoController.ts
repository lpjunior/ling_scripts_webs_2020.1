import { Aluno, ListAlunos } from '../models/moduleAluno';
import { AlunoView, MensagemView } from '../views/moduleView';

export class AlunoController {

    private _nome: HTMLInputElement;
    private _matricula: HTMLInputElement;
    private _dataNascimento: HTMLInputElement;
    private _primeiraNota: HTMLInputElement;
    private _segundaNota: HTMLInputElement;
    private _listAlunos = new ListAlunos();
    private _alunoView = new AlunoView('tableAlunos');
    private _mensagemView = new MensagemView('messageView');

    constructor() {
        this._nome = <HTMLInputElement>document.querySelector('#nomeid');
        this._matricula = <HTMLInputElement>document.querySelector('#matriculaid');
        this._dataNascimento = <HTMLInputElement>document.querySelector('#dtnascid');
        this._primeiraNota = <HTMLInputElement>document.querySelector('#nota01id');
        this._segundaNota = <HTMLInputElement>document.querySelector('#nota02id');

        this._alunoView.update(this._listAlunos);
    }

    adiciona(event: Event) {
        // cancela a execução do evento
        event.preventDefault();

        // cria o objeto de aluno
        const aluno = new Aluno(
            this._nome.value,
            parseInt(this._matricula.value),
            // por padrão o chrome 2021-04-12
            new Date(this._dataNascimento.value.replace(/-/g, ',')),
            parseFloat(this._primeiraNota.value),
            parseFloat(this._segundaNota.value));

        // inclui o aluno na lista
        this._listAlunos.adiciona(aluno);

        // atualiza a lista de alunos
        this._alunoView.update(this._listAlunos);

        // adiciona a mensagem de cadastrado
        this._mensagemView.update('Aluno adicionado com sucesso!');
    }
}