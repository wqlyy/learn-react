/**
 * Created by wangqiang on 2017/9/1.
 */

const React = require('react');
const ReactDOM = require('react-dom');

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            Hello , World
        </div>
    }
}
ReactDOM.render(<Item/>,document.getElementById('d1'));