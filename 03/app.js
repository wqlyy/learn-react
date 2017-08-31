const Item = React.createClass({
    displayName: 'Item',
    getDefaultProps(){
        console.log('get Default Props');
        return {
            group: 123
        }
    },
    getInitialState(){
        console.log('get Initial State');
        return {
            name: 'leo'
        }
    },
    componentWillMount(){
        console.log('componentWillMount');
        this.state.name = 'wangqiang'
    },
    componentDidMount(){
        console.log('componentDidMount');
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);
        let isTrue = false;
        this.state.loopNum = setInterval(function () {
            if (isTrue) {
                dom.style.background = 'red';
                isTrue = false
            } else {
                dom.style.background = 'yellow';
                isTrue = true
            }
        }, 300)
    },
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps   ')
    },
    shouldComponentUpdate(nextProps, nextStat){
        return true;
    },
    componentWillUpdate(nextProps, nextState){
        console.log('component Will Update')
    },
    componentDidUpdate(prevProps, nextState){
        console.log('component Did Update')
    },
    update(){
        this.setState({
            name: 'luoyuanyuan'
        })
        // this.forceUpdate();
    },


    render(){
        console.log('render');
        return <div>{this.props.group + this.state.name}
            <button onClick={this.update}>更新</button>
        </div>
    },
    componentWillUnmount(){
        console.log('un mount!!!')
        clearInterval(this.state.loopNum)
    }
});
function render(bool) {
    ReactDOM.render(
        <div>
            {bool?<Item/>:''}
        </div>
        , document.getElementById('d1'))
}
render(true);


document.getElementById('clear').onclick=function(){
    render()
};
