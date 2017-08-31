/**
 * Created by wangqiang on 2017/8/31.
 */
const data = new Map();
data.set('1','List01');
data.set('2','List02');
data.set('3','List03');
data.set('4','List04');
const MouseEvent = React.createClass({
    getInitialState(){
        return {
            dragId:null,
            rightData:this.props.data,
            leftData:new Map()
        }
    },
    drag(event){
        this.state.dragId=event.target.id;
    },
    drop(event){
        var value = this.state.rightData.get(this.state.dragId);
        this.state.leftData.set(this.state.dragId,value);
        this.state.rightData.delete(this.state.dragId);
        this.forceUpdate()
    },
    drop2(event){
        var value = this.state.leftData.get(this.state.dragId);
        this.state.rightData.set(this.state.dragId,value);
        this.state.leftData.delete(this.state.dragId);
        this.forceUpdate()
    },
    render(){
        const rightList=[];
        const leftList = [];
        for (let item of this.state.rightData){
            rightList.push(<p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>)
        }
        for (let item of this.state.leftData){
            leftList.push(<p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>)
        }
        return <div>
            <div id="leftSection"
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.drop}>
                {leftList}
            </div>
            <div id="rightSection"
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.drop2}>
                {rightList}
            </div>
        </div>
    }
});
ReactDOM.render(<MouseEvent data={data}/>,document.getElementById('d1'));
ReactDOM.render(<MouseEvent data={data}/>,document.getElementById('d2'));