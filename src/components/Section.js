
export class Section {
    constructor( { items, renderer }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderItems() {
        this._items.forEach(item => {
            this.addItem(item);
        })
    }

    addItem(item) {
        const element = this._renderer(item)
        this._container.prepend(element);
    }
}