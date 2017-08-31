/**
 * Created by wangqiang on 2017/8/31.
 */
// key-event

const KeyEvent = React.createClass({
    getInitialState(){
        return {
            top:0,
            left:0
        }
    },
    keyUp(event){
        // console.log(event.keyCode);
        switch (event.keyCode){
            case 37:
                this.setState({left:this.state.left-5});
                break;
            case 38:
                this.setState({top:this.state.top-5});
                break;
            case 39:
                this.setState({left:this.state.left+5});
                break;
            case 40:
                this.setState({top:this.state.top+5});
                break;
        }
    },
    render(){
        return <div  style={{position:'relative',width:'450px',height:'450px',background:'yellow'}} tabIndex={1} onKeyUp={this.keyUp}>
            <div style={{top:this.state.top+'px',left:this.state.left+'px',position:'absolute',width:'50px',height:'50px',background:'red'}} tabIndex={1} onKeyUp={this.keyUp}></div>
        </div>
    }
});
ReactDOM.render(<KeyEvent/>,document.getElementById('d1'));