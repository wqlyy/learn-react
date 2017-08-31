/**
 * Created by wangqiang on 2017/8/31.
 */
// 子->父间通讯


const Item = React.createClass({

    render(){
        return <li onClick={this.props.onCallback}>{this.props.name}</li>
    }
});
const Comp = React.createClass({

    callback(item){
        alert(item)
    },
    render(){
        return <ul>
            {this.props.data.map(item=>
                // console.log(item)
                <Item onCallback={this.callback.bind(this,item)} name={item}/>
            )}
        </ul>
    }
});

const list=[
    "AAAAA",
    "BBBBB",
    "CCCCC",
    "DDDDD",
];
ReactDOM.render(<Comp data={list}/>,document.getElementById('d1'));