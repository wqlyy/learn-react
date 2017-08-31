/**
 * Created by Administrator on 2017/8/30.
 */

//Item
const Item = React.createClass({
    getInitialState(){
        return {
            isEdit: true
        }
    },
    edit(){
        this.setState({isEdit:true});
    },
    remove(){
        this.props.onRemove(this.props.id)
    },
    save(){
        this.props.onSave(this.props.id, this.refs.inputText.value);
        this.setState({isEdit:false});
    },
    render(){
        return this.state.isEdit ?
            <li className="list-group-item">
                <input type="text" ref="inputText" defaultValue={this.props.value} className="item-edit"/>
                <a href="#" onClick={this.save} className="glyphicon glyphicon-ok"></a>
                <a className="glyphicon glyphicon-remove" onClick={this.remove} href="#"></a>
            </li>
            :
            <li className="list-group-item">
                {this.props.value}
                <a onClick={this.edit} className="right glyphicon glyphicon-edit" href="#"></a>
                <a onClick={this.remove} className="right glyphicon glyphicon-remove" href="#"></a>
            </li>
    }
});
//List
const List = React.createClass({
    getInitialState(){
        return {
            key: 0,
            list: new Map()
        }
    },
    add(){
        const key = ++this.state.key;
        this.state.list.set(key, '');
        this.forceUpdate();
    },
    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },
    save(id, value){
        this.state.list.set(id, value);
        this.forceUpdate();
    },
    render(){
        const listDom = [];
        for (let entity of this.state.list) {
            listDom.push(<Item key={entity[0]} onEdit={this.edit} onSave={this.save} onRemove={this.removeItem} id={entity[0]}
                               value={entity[1]}/>)
        }
        return <div>
            <button className="btn btn-default" onClick={this.add}>Add</button>
            <ul className="list-group">
                {listDom}
            </ul>
        </div>
    }
});
ReactDOM.render(
    <List/>,
    document.getElementById('test')
);