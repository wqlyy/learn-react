
const EventEmitter = require('events').EventEmitter;

class Actions extends EventEmitter{
    constructor(){
        super()
    }

    add(name){
        var action = {
            actionType:'add',
            name:name
        };
        this.emit('call',action);
    }
}

module.exports=Actions;