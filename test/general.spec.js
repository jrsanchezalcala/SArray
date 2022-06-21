const { ZArray } = require("../dist/index");
class Car {
    constructor(id, color, model) {
        this.id = id;
        this.color = color;
        this.model = model;
    }
}

describe('Tests with loaded zarray', () => {
    let objects;
    let zarray;
    beforeEach(() => {
        objects = [new Car(2343, "black", "seat"), new Car(3221, "brown", "opel"), new Car(1223, "white", "mercedes")]
        zarray = new ZArray('id');
        zarray.load(objects);
    })
    test('load from array', () => {
        expect(zarray.length).toBe(objects.length);
        zarray.forEach((item, index) => {
            expect(item).toBe(objects[index]);
        })
    })

    test('to Array', () => {
        let ob = zarray.toArray();
        expect(ob.length).toBe(objects.length);
        ob.forEach((item, index) => {
            expect(item).toBe(objects[index]);
        })
    })

    test('get not existing key', () => {
        expect(zarray.get(2011)).toBeFalsy();
    })

    test('get element', () => {
        expect(zarray.get(objects[1].id)).toBe(objects[1]);
    })
})

describe('ZArray without key behaves like an aray', () => {
    let objects;
    let zarray;

    test('ZArray without key', () => {
        objects = [new Car(2343, "black", "seat"), new Car(3221, "brown", "opel"), new Car(1223, "white", "mercedes")]
        zarray = new ZArray();
        zarray.load(objects);

        expect(zarray.length).toBe(objects.length);
        zarray.forEach((item, index) => {
            expect(item).toBe(objects[index]);
        })
    })


    test('ZArray without key, the key is the position in the array', () => {
        objects = [new Car(2343, "black", "seat"), new Car(3221, "brown", "opel"), new Car(1223, "white", "mercedes")]
        zarray = new ZArray();
        zarray.load(objects);

        expect(zarray.get(0)).toBe(objects[0]);

    })

})