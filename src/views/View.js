export class View {

    constructor(el) {
        this._el = document.querySelector(el);
    };

    template(model) {
        throw new Error('O método template deve ser sobreescrito de você estender a classe View');
    };

    update(model) {
        this._el.innerHTML = this.template(model);
    };
}