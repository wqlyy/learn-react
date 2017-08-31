/**
 * Created by wangqiang on 2017/8/31.
 */
const MyRefs = React.createClass({
    click:function(){
        alert(1)
    },
    render(){
        return  <div>
            <input type="text"/>
            <button onClick={this.click}>Click Me</button>
        </div>
    }
});

ReactDOM.render(<MyRefs/>,document.getElementById('d2'));