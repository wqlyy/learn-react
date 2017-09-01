/**
 * Created by wangqiang on 2017/9/1.
 */
const  React = require('react');
const Store = require('./Store');
const Actions = require('./Actions');

const actions = new Actions();
const store = new Store(actions);

//Top Level component,container and controller-view ==>angular.controller
class List extends React.Component{

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    add(){
        actions.add(this.refs.nameInput.value)
        // store._add(this.refs.nameInput.value)
    }
    componentDidMount(){
        store.on('change',list=>{
            this.setState({list})
        })
    }
    render(){
        return <ul>
            {this.state.list.map(item=><li>{item}</li>)}
            <li>
                <input type="text" ref="nameInput"/>
                <button onClick={this.add.bind(this)}>Add</button>
            </li>
        </ul>
    }
}
module.exports=List