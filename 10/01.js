/**
 * Created by wangqiang on 2017/8/31.
 */
// 数据双向绑定
const LinkedStateMixin = React.addons.LinkedStateMixin;

const Comp = React.createClass({
    displayName:'Comp',
    mixins:[LinkedStateMixin],
    getInitialState(){
        return {
            name:''
        }
    },
   changeName(e){
        this.setState({
            name:e.target.value
        })
    },
    render(){
        return <div>
            {this.state.name}
            <input type="text" valueLink={this.linkState('name')} />
        </div>
    }
});

ReactDOM.render(<Comp/>,document.body)