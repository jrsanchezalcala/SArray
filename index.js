export class ZArray extends Array {
    constructor(index, options) {
        super();
        this.index = index;
        this.options = options;
        this.object = {};
        this.initOptions();
    }

    initOptions() {
        if (!this.options)
            return;
        if (this.options.autosort) {
            this.setAutoSort(this.options.autosort);
        }
    }

    getKey(element) {
        if (this.index) {
            if (typeof this.index === "function")
                return this.index(element);
            else
                return element[this.index];
        }
        return null
    }

    push(element) {
        super.push(element);
        if (this.index)
            this.object[this.getKey(element)] = element;
        this.auto();
    }

    unshift(element) {
        super.unshift(element);
        if (this.index)
            this.object[this.getKey(element)] = element;
        this.auto();
    }

    shift() {
        let element = super.shift();
        if (this.index)
            delete this.object[this.getKey(element)]
    }

    pop() {
        let element = super.pop()
        if (this.index)
            delete this.object[this.getKey(element)]
    }

    get(id) {
        if (this.index)
            return this.object[id];
        else
            return this[id];
    }

    set(element) {
        let id = this.getKey(element);
        let elem = this.object[id];
        if (elem)
            this.object[id] = Object.assign(this.object[id],element);
        else
            this.push(element);

        this.auto();

    }

    remove(id) {

        this.splice(this.indexOf(this.object[id]), 1);
        delete this.object[id];
    }

    load(arr) {
        if (arr && Array.isArray(arr)) {
            this._disableAuto = true;
            arr.forEach(item => this.push(item));
            this._disableAuto = false;
            this.auto();
        }

    }

    sort(args) {
        if (this.autoSortCallback) {
            super.sort(this.autoSortCallback);
        }
        else
            super.sort(args);
    }

    concat(arr) {
        this._disableAuto = true;
        arr.forEach(item => this.push(item));
        this._disableAuto = false;
        this.auto();
    }

    auto() {
        if (this._disableAuto)
            return;

        if (this.autoSortCallback) {
            this.sort()
        }
    }

    setAutoSort(callback) {
        if (typeof callback === "function") {
            this.autoSortCallback = callback;
        }
    }

    toArray() {
        return Array.from(this)
    }

}
