# ZArray
Zuper Array , an array with zuper-powers and more capabilites.

This is a zuper array designed to manage objects inside and indexing them.

### New Capabilites ###

- Specify how to get the key of each element and index them. So we can access to an object inside fast like we were in a map. e.g.

```
import {ZArray} from '@jrsanchezalcala/zarray';

//here we define that the key of the objects that we are going to store is the 'id',

const zarray = new ZArray('id');
zarray.push({ id : 1232 , brand : "mercedes" , color : "white" })
zarray.push({ id : 2223 , brand : "ford" , color : "blue" })
zarray.push({ id : 3321 , brand : "seat" , color : "red" })

let object = zarray.get(1232)); //this will retrieve the object with 'id' = 1232 
``` 
```
//Also we can pass a function which first parameter will be the element to get the key.
const zarray = new ZArray((item) => {
    return item.id;
});

```

Don't forget that this is an array so we have all the zuperpowers of an array.

```
zarray.filter(item => item.color === "red" ).map(item => item.id)

```

- You can update an existing element so easy without need to search where is the element into the array.

```
zarray.set({id : 2223 , "ford" , color : "black" });
```

- You can set and autosort passing a sort comparator function so everytime you set or update a new item, the array will be sorted automatically.

```
zarray.setAutoSort((a , b) => a - b)

```

```
// we can also pass this in constructor options
const zarray = new ZArray('id',{
    autosort : (a , b) => a - b)
})
```

- You can load all the data from array easy

```
zarray.load([{ id : 1232 , brand : "mercedes" , color : "white" },{ id : 2223 , brand : "ford" , color : "blue" }])

```

So that is for now. This array is still a mediocre  array hero but with more training and time it will be a powerful data structure to fight agains huge data villains

## License

MIT