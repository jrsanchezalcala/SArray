const {ZArray}  = require("../dist/index");
console.log(ZArray)
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
   beforeAll(() => {
       objects = [new Car(2343,"black","seat"),new Car(3221,"brown","opel"),new Car(1223,"white","mercedes")]
       zarray = new ZArray('id');
    })
    test('load from array',() => {
        zarray.load(objects);
        expect(zarray.length).toBe(objects.length);
        zarray.forEach((item,index) => {
            expect(item).toBe(objects[index]);
        })
    })
})