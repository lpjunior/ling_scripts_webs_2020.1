System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, AlunoView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            AlunoView = class AlunoView extends View_1.View {
                template(alunos) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="text-center">
                    <th>Nome</th>
                    <th>Matricula</th>
                    <th>Data Nasc.</th>
                    <th>Primeira Nota</th>
                    <th>Segunda Nota</th>
                    <th>Média</th>
                    <th colspan="2">Gerenciar</th>
                </tr>
            </thead>
            <tbody>
                ${alunos.pegaLista.map(aluno => `
                <tr class="text-center">
                    <td>${aluno.nome}</td>
                    <td>${aluno.matricula}</td>
                    <td>${aluno.dataNascimento.getDate()}/${aluno.dataNascimento.getMonth() + 1}/${aluno.dataNascimento.getFullYear()}</td>
                    <td>${aluno.primeiraNota}</td>
                    <td>${aluno.segundaNota}</td>
                    <td>${aluno.media}</td>
                    <td><a href="#"><i class="fas fa-pencil-alt"></i></a></td>
                    <td><a href="#"><i class="fas fa-trash-alt text-danger"></i></a></td>
                </tr>
                `).join('')}
            </tbody>
        </table>
        `;
                }
            };
            exports_1("AlunoView", AlunoView);
        }
    };
});
