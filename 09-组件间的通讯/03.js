/**
 * Created by wangqiang on 2017/8/31.
 */

const eventBus = new eventemitter.EventEmitter();

const Item = React.createClass({

    render(){
        let style = this.props.actived?{border:'1px solid red'}:{};
        return <li style={style}>{this.props.name}</li>
    }
});
const Comp = React.createClass({

    getInitialState(){
        return {
            list:[]
        }
    },
    componentWillMount(){
        this.props.bus.on('test',function(){
            console.log('test'+this.props.name)
        }.bind(this))
        this.state.list = this.props.data.map(item=>{
            return {name:item,actived:false}
        })
    },
    componentDidMount(){
        setTimeout(()=>{
            this.state.list[1].actived=true;
            this.forceUpdate()
        },3000);
    },
    render(){
        return <ul>
            {this.state.list.map(item=>
                // console.log(item)
                <Item actived={item.actived} name={item.name}/>
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
ReactDOM.render(<div>
    <Comp bus={eventBus} name="one" data={list}/>
    <Comp bus={eventBus} name="two" data={list}/>

</div>,document.getElementById('d1'));

setTimeout(function(){
    eventBus.emit('test');
},3000)