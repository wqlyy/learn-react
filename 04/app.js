/**
 * Created by Administrator on 2017/8/30.
 */
var list=[];
const database = {
    add(article){
        list.push(article);
        return list.length-1;
    },
    del(index){
        list[index]=null;
    },
    update(index,newArticle){
        list.splice(index,1,newArticle);
    },
    get list(){
        return list;
    }
};
const Item = React.createClass({
   displayName:'Item',
    getDefaultProps(){
       return {
           value:'no value'
       }
    },
    getInitialState(){
        console.log('状态初始化阶段');
        return {
            value:this.props.value,
            currentHistoryIndex:1,
            history:[this.props.value]
        }
    },
    componentWillMount(){
        console.log('即将装载');
       this.state.dbKey = database.add({value:this.state.value})
    },
    componentDidMount(){
        console.log('装载完成');
        let dom =ReactDOM.findDOMNode(this);
        let isYellow = false;
        this.state.loopNum = setInterval(function(){
            if(isYellow){
                dom.style.background='red';
                isYellow=false;
            }else{
                dom.style.background='yellow'
                isYellow=true
            }
        },2000)
    },
    componentWillReceiveProps(nextProps){
        console.log('组件即将接收props');
        this.state.value=nextProps.value;
    },
    shouldComponentUpdate(prevProps,nextProps){
        return true
    },
    componentWillUpdate(){
        console.log('组件即将更新');
        let dbKey = this.state.dbKey;
        database.update(dbKey,{value:this.state.value})
    },
    componentDidUpdate(){
        console.log('组件更新完成')
        let dom = ReactDOM.findDOMNode(this);
        let oldStyle = dom.style.border;
        dom.style.border = '2px solid red';
        setTimeout(function(){
            dom.style.border = oldStyle;
        },2000)
    },
    update(){
        console.log('自定义更新方法-update');
        this.setState({name:'wangqiang'});
    },
    changeValue(event){
        console.log('自定义更新方法-changeValue');
        this.setState({value:event.target.value})
    },
    save(){
        // this.state.history.push(this.state.value);
        const value = this.state.value;
        const history = this.state.history;
        const currentHistoryIndex = history.length;
        history.push(value);
        this.setState({
            history:history,
            currentHistoryIndex:currentHistoryIndex
        })
    },
    prev(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
       if(currentHistoryIndex !== 0){
           currentHistoryIndex -= 1;

           this.setState({currentHistoryIndex:currentHistoryIndex});
       }
    },
    next(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if(currentHistoryIndex !== this.state.history.length - 1){
            currentHistoryIndex += 1;
            this.setState({currentHistoryIndex:currentHistoryIndex});
        }
    },
    render(){
        console.log('渲染-render');
        return <div>
            <div>
                <button onClick={this.prev}>prev</button>
                <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                <button onClick={this.next}>next</button>
            </div>
            <input value={this.state.value} onChange={this.changeValue} type="text"/>
            <button onClick={this.save}>保存</button>
        </div>
    },
    componentWillUnmount(){
        console.log('组件即将卸载');
        clearInterval(this.state.loopNum);
    }

});

ReactDOM.render(<Item/>,document.getElementById('d1'));