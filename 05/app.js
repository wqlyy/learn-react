/**
 * Created by wangqiang on 2017/8/31.
 */

const Form = React.createClass({
    getInitialState(){
        return {
            inputValue:'wangqiang',
            isCheckbox:true,
            isRadio:false,
            selectValue:'C',
            selectMultipleValue:2
        }
    },
    changeHandle(event){
        // Ⅰ
        // this.state.inputValue = event.target.value;
        // this.forceUpdate();
        // Ⅱ
        this.setState({
            inputValue:event.target.value,
        })
    },
    changeCheckBoxHandle(){
        this.setState({
            isCheckbox:!this.state.isCheckbox
        })
    },
    changeRadioHandle(){
        this.setState({
            isRadio:!this.state.isRadio
        })
    },
    render(){
        return <form action="https://www.baidu.com" method="get">
            <input value={this.state.inputValue} onChange={this.changeHandle} type="text"/>
            <input type="checkbox" checked={this.state.isCheckbox} onChange={this.changeCheckBoxHandle}/>
            <input type="radio" checked={this.state.isRadio} onChange={this.changeRadioHandle}/>
            <select name="" id="" value={this.state.selectValue}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <select multiple name="" value={this.state.selectMultipleValue} id="">
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
            </select>

            <textarea></textarea>
            <input type="submit"/>
        </form>
    }
});

ReactDOM.render(<Form/>,document.getElementById('d1'))