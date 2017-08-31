/**
 * Created by wangqiang on 2017/8/31.
 */
const Item=React.createClass({
    getInitialState(){
        return {
            name:''
        }
    },
    change(event){

        this.setState({
            name:event.target.value
        });
    },
    componentDidUpdate(){
        this.props.onChangeAll(this.state.name)
    },
    render(){
        return <div>
            <input type="text" value={this.state.name} onChange={this.change}/>
        </div>
    }
});
//自定义事件
function changeAll(name){
    console.log(name)
}
ReactDOM.render(<Item onChangeAll={changeAll}/>,document.getElementById('d1'));