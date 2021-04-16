System.register(["./controllers/AlunoController"], function (exports_1, context_1) {
    "use strict";
    var AlunoController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (AlunoController_1_1) {
                AlunoController_1 = AlunoController_1_1;
            }
        ],
        execute: function () {
            controller = new AlunoController_1.AlunoController();
            document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));
        }
    };
});
