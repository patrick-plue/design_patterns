class Shopper {
    constructor(name = 'unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }
    set shoppingList(list) {
        this._shoppingList = list;
    }
    addItemToList(item) {
        this._shoppingList.push(item);
    }

    // does not really work with real private fields
    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);
        cloned.name = this._name;
        cloned.shoppingList = [...this._shoppingList];

        return cloned;
    }
}
module.exports = Shopper;
