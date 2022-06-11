const {ZArray}  = require("../dist/index");
class Car {
    constructor(id, color , model){
        this.id = id;
        this.color = color;
        this.model = model;
    }
}

describe('General Tests',() => {
   let objects;
    let zarray;
   beforeEach(() => {
       objects = [new Car(2343,"black","seat"),new Car(3221,"brown","opel"),new Car(1223,"white","mercedes")]
       zarray = new ZArray('id');
       zarray.load(objects);
    })
    test('load from array',() => {
        expect(zarray.length).toBe(objects.length);
        zarray.forEach((item,index) => {
            expect(item).toBe(objects[index]);
        })
    })

    test('to Array' , () => {
        let ob = zarray.toArray();
        expect(ob.length).toBe(objects.length);
        ob.forEach((item,index) => {
            expect(item).toBe(objects[index]);
        })
    })

    test('get not existing key',() => {
        expect(zarray.get(2011)).toBeFalsy();
    })

    test('get element',() => {
        expect(zarray.get(objects[1].id)).toBe(objects[1]);
    })
})