/**
 * Created by Administrator on 2017/8/30.
 */

//Item
const Item = React.createClass({
    edit(){
        this.props.onEdit(this.props.id,this.props.value)
    },
    remove(){
        this.props.onRemove(this.props.id)
    },
    render(){
        return <li className="list-group-item">
            {this.props.value}
            <a onClick={this.edit} className="right glyphicon glyphicon-edit" href="#"></a>
            <a onClick={this.remove} className="right glyphicon glyphicon-remove" href="#"></a></li>
    }
});
//ItemEditor
const ItemEditor = React.createClass({
    getInitialState(){
        return{
            value:this.props.value
        }
    },
    remove(){
        this.props.onRemove(this.props.id)
    },
    save(){
        this.props.onSave(this.props.id,this.state.value)
    },
    changeHandle(event){
        // this.state.value=event.target.value;
        // this.forceUpdate();
        this.setState({
            value:event.target.value
        })
    },
    render(){
        return <li className="list-group-item">
            <input type="text" onChange={this.changeHandle} value={this.state.value} className="item-edit"/>
            <a href="#" onClick={this.save} className="glyphicon glyphicon-ok"></a>
            <a className="glyphicon glyphicon-remove" onClick={this.remove} href="#"></a>
        </li>
    }
});
//List
const List = React.createClass({
    getInitialState(){
        return {
            key:0,
            list:new Map(),
            editList:new Map()
        }
    },
    add(){
        const key = ++this.state.key;
        this.state.editList.set(key,'');
        this.forceUpdate();
    },
    removeItem(id){
       this.state.list.delete(id);
        this.forceUpdate();
    },
    removeItemEditor(id){
        this.state.editList.delete(id);
        this.forceUpdate();
    },
    save(id,value){
        this.state.editList.delete(id);
        this.state.list.set(id,value);
        this.forceUpdate();
    },
    edit(id,value){
        this.state.list.delete(id);
        this.state.editList.set(id,value);
        this.forceUpdate();
    },
    render(){
        const  listDom=[];
        const  editListDom=[];
        for(let entity of this.state.list){
            listDom.push(<Item key={entity[0]} onEdit={this.edit} onRemove={this.removeItem} id={entity[0]} value={entity[1]}/>)
        }
        for(let entity of this.state.editList){
            editListDom.push(<ItemEditor onSave={this.save} key={entity[0]} onRemove={this.removeItemEditor} id={entity[0]} value={entity[1]}/>)
        }
        return <div>
            <button className="btn btn-default" onClick={this.add}>Add</button>
            <ul className="list-group">
                {listDom}
                {editListDom}
            </ul>
        </div>
    }
});
ReactDOM.render(
        <List/>,
    document.getElementById('test')
);