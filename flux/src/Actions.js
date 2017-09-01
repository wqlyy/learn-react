
const store = Symbol('store');

class Actions{
    constructor(_store){
        this[store] = _store;
    }
    add(name){
        this[store]._add(name);
    }
}

module.exports=Actions;