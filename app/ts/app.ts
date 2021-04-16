import { AlunoController } from './controllers/AlunoController';

const controller = new AlunoController();
document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));