
export class Section {
    constructor( { items, renderer }, container) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderItems() {
        this._renderItems.forEach(item => {
            this.addItem(item);
        })
    }

    addItem(item) {
        const element = this._renderer(item)
        this._container.prepend(element);
    }
}