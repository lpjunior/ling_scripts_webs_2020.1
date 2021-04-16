import { ListAlunos } from '../models/moduleAluno';
import { View } from './View';

export class AlunoView extends View<ListAlunos> {

    template(alunos: ListAlunos): string {
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
}