/**
 * Created by Administrator on 2017/8/30.
 */
// ReactDOM.render(
//     <h1>Hello React</h1>,
//     document.getElementById('d1')
// );
//     const exf={
//         test(){
//             alert('this is mix\n'+this.props.test)
//         }
// }
// const Item = React.createClass({
//     getInitialState(){
//         return {
//             reslut:123
//         }
//     },
//     getDefaultProps(){
//         return {
//             test:'wangqiang'
//         }
//     },
//     mixins:[exf],
//     render(){
//         return <div>
//             {this.props.test}
//             <button onClick={this.test}>click me</button>
//             </div>;
//     }
// })


// ES6

class Item extends React.Component{
    constructor (props){
        super(props);
    }
    static get defaultProps(){
        return {
            group:'javascript'
        }
    }
    test(){
        alert('this is mix\n'+this.props.group)
    }
    render(){
        return <div>
            {this.props.group}
            <button onClick={this.test.bind(this)}>click me</button>
        </div>
    }
}
ReactDOM.render(
    <Item />,
    document.getElementById('d1')
)