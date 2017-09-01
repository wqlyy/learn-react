/**
 * Created by wangqiang on 2017/9/1.
 */

const EventEmitter = require('events').EventEmitter;

class Store extends EventEmitter{
    constructor(actions){
        actions.on('call',action=>{
            switch (action.actionType){
                case 'add':
                    this._add(action.name);
                    break;
            }
        });
        super();
        this._list=[];
    }
    _add(item){
        this._list.push(item);
        this.emit('change',this.list);//触发事件
    }
    get list(){
        return this._list;
    }
}
module.exports=Store;