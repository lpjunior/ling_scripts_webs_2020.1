System.register(["../models/moduleAluno", "../views/moduleView"], function (exports_1, context_1) {
    "use strict";
    var moduleAluno_1, moduleView_1, AlunoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (moduleAluno_1_1) {
                moduleAluno_1 = moduleAluno_1_1;
            },
            function (moduleView_1_1) {
                moduleView_1 = moduleView_1_1;
            }
        ],
        execute: function () {
            AlunoController = class AlunoController {
                constructor() {
                    this._listAlunos = new moduleAluno_1.ListAlunos();
                    this._alunoView = new moduleView_1.AlunoView('tableAlunos');
                    this._mensagemView = new moduleView_1.MensagemView('messageView');
                    this._nome = document.querySelector('#nomeid');
                    this._matricula = document.querySelector('#matriculaid');
                    this._dataNascimento = document.querySelector('#dtnascid');
                    this._primeiraNota = document.querySelector('#nota01id');
                    this._segundaNota = document.querySelector('#nota02id');
                    this._alunoView.update(this._listAlunos);
                }
                adiciona(event) {
                    event.preventDefault();
                    const aluno = new moduleAluno_1.Aluno(this._nome.value, parseInt(this._matricula.value), new Date(this._dataNascimento.value.replace(/-/g, ',')), parseFloat(this._primeiraNota.value), parseFloat(this._segundaNota.value));
                    this._listAlunos.adiciona(aluno);
                    this._alunoView.update(this._listAlunos);
                    this._mensagemView.update('Aluno adicionado com sucesso!');
                }
            };
            exports_1("AlunoController", AlunoController);
        }
    };
});
