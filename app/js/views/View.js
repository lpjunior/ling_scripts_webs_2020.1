System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor) {
                    this._elemento = document.querySelector(`#${seletor}`);
                }
                update(t) {
                    this._elemento.innerHTML = this.template(t);
                }
            };
            exports_1("View", View);
        }
    };
});