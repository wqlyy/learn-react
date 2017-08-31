/**
 * Created by wangqiang on 2017/8/31.
 */
const MyRefs = React.createClass({
    click:function(){
       this.refs.myInput.focus()
    },
    componentDidMount(){
        this.refs.myInput2.focus()
    },
    render(){
        return  <div>
            <input ref="myInput" type="text"/>
            <input ref={function(dom){dom.focus()}} type="text"/>
            <input ref="myInput2" value='123' type="text"/>
            <button onClick={this.click}>Click Me</button>
        </div>
    }
});

ReactDOM.render(<MyRefs/>,document.getElementById('d2'));