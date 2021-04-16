System.register([], function (exports_1, context_1) {
    "use strict";
    var ListAlunos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ListAlunos = class ListAlunos {
                constructor() {
                    this._alunos = [];
                }
                adiciona(aluno) {
                    this._alunos.push(aluno);
                }
                get pegaLista() {
                    return [].concat(this._alunos);
                }
            };
            exports_1("ListAlunos", ListAlunos);
        }
    };
});
