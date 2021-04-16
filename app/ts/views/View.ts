export abstract class View<T>{

    private _elemento: Element;

    constructor(seletor : string) {
        this._elemento = document.querySelector(`#${seletor}`);
    }

    update(t: T): void {
        this._elemento.innerHTML = this.template(t);
    }

    abstract template(t: T): string;
}