import React from 'react';
import ReactDom from 'react-dom';
// 组件类定义，从React.componet 类上继承，
class Sub extends React.Component{
    state = {count:0}
    clickHandler(event){
        //event.preventDefault(); 这个用来阻止浏览器跳转行为
        console.log(event.target); //打印目标对象
        console.log(event.target.id); // 打印目标对象的id
        console.log(this);
        //this.state.count ++;这种方式不可以
        this.setState({count:this.state.count + 1 });
        
    }
    render(){
        return <button id='sub'  onClick={this.clickHandler.bind(this)}>
            i am sub elment {this.state.count} </button>
    }
}

class Root extends React.Component{
    render(){ 
        // render() 渲染函数，返回组件中的渲染内容，注意，只能返回一个顶级元素回去。
        // 第一个参数是JSXElment对象，第二个是DOM的Element元素，将React元素添加到DOM的Elment元素中并渲染
        // 很明显JSX更加简单易懂，推荐使用JSX语法
        //return React.createElement('div',null,'welcome to mage');
        return (<div>welcome to 
            <hr />
            <Sub />
            <br /> magedu.com </div> );// 要求结点必需封口
    }
}

class Root1 extends React.Component{
    state = {domain:'www.baidu',p1:'.com'};
    render(){ 
        //this.setState({p1:'.io'}); // 这个会报错,  这个不会因为，
        //this.state.p1 = '.io';
        //setTimeout(() => {
        //    this.setState({p1:'.io'});
        //}, 5000); 
        //setInterval(() => {
        //    this.setState({p1:'.io'});
        //}, 5000);
        console.log('--------------------------------')
        return (<div>welcome to 
            <hr />
            <Sub />
            {this.state.domain}{this.state.p1}
            <br /> magedu.com </div> );// 要求结点必需封口
    }
}
// 注意
// 1.React 组件的render函数return ，只能是一个顶级元素
// 2.JSX 语法是XML,要求所有的元素必需是闭合的，注意<br /> 不能写成<br> 
// 标签中的首字母小写就是html标记，首字母大写就是组件 
// 要求严格的HTML标记<br /> ,/ 前留一个空格
// 单行不需要使用小括号括起来，多选需要使用小括号括起来
// 元素有嵌套，注意多行，注意缩进
// JSX表达式，使用了{}括起来，如果在括号内使用了引号，会当做字符处理，例如<div>{2>1?'true':'false'}</div>
// </div> 里面的表达式成了字符串了
ReactDom.render(<Root1 />,document.getElementById('root'));// 对于单个

// 每一个组件都一个状态变量state，它是一个JavaScript对象，可以为它的定义属性来保存值
// 如果状态变化了，会触发UI的重新渲染，使用setState()方法可以修改state的值
// 注意，state是组件的内部使用的，是组件私有的属性，其他的组件是无法调用的

// React 事件，定义和用法，
// 不能使用return false,如果要阻止事件默认的行为，使用event.preventDefault();
// 每一个React组件 都有一个状态变量state ,
// React 是Facebook开发并开源的前端框架
// 当时他们的团队在市面上找到合适的MVC 构架，就自己写了一个JS框架，用来假设大名鼎鼎的Instagram 图片分享社交网络，2013年react开源
// React 解决是是前端 MVC框架中的View 视图层的问题
// 

class Toggle extends React.Component{
    //state = {flag:true};// 类定义state
    constructor(props){
        super(props);
        console.log(111111111111111,props);
        console.log(222222222222222,this.props);
        console.log(333333333333333,this.props === props);
        this.state = {flag:true}
    }
    clickHandler(event){
      console.log(event.target.id);
      console.log(event.target);
      console.log(this);
      // this.props.school = xxx ;  // 这里是不允许重复赋值的，
      // 


    }

    render(){
        return (<div style={{color:'red',height:200 + 'px',
        backgroundColor:'#fffofo'}} id="t1" onClick={this.clickHandler.bind(this)}>
        点一下这一句话  {this.state.flag.toString()}  | 
        {this.props.school} {this.props.parent.state.p1}  {this.props.parent.state.p2}
        <br />
        {this.props.children}
        <br />

    </div>);

    }

}


class Root2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {p1 : 'www.magedu',p2:'.com'};
    }
    render(){
        return (<div>
            <div>welcome to111111111111111111 {this.state.p1}{this.state.p2} </div>
            <br />
            <Toggle school='magedu.com' parent={this} >
                <a href="http://www.baidu.com">马哥教育</a>
            </Toggle>
        </div>)
    }
}




ReactDom.render(<Root2 />,document.getElementById('toggle'))

// 组件的生命周期
// 组件的生命周期可分成三个状态
// Mounting : 已经插入真实的DOM
// Updating : 正在被重新渲染
// Unmounting : 已经移除真实的DOM
// 组件的生命周期状态，说明在不同的时机访问组件，组件正处在生命周期的不同状态
// 在不同的生命周期状态访问，就产生不同的方法
// 生命周期的方法如下：
// 装载组件触发
// componentWillMount 在渲染前调用，在客户端也在服务端，只会在装载之前调用一次
// componentDidMount : 在第一次渲染后调用，只在客户端，之后组件已经生成了对应的Dom树，可以通过this.getDOMNode()来进行访问，如果你想和其他的JavaScript
// 构架一起使用，可以在这个方法中调用setTimeout,setInterval或者发送Ajax请求等操作防止异步操作阻塞UI ,只在装载完成后市用一次，render 之后
// componentWillReceivePropes(nextProps) 在组件接收到一个新的prop时被调用，这个应该就地在初始化render时不会被调用.
// shouldComponeeeeentUpdate(nextProps,nextState)返回一个布尔值，在组件 接收到新的props或者state时被调用，在初始化或者使用forceUpdate时不被调用
//  可以在你确认不需要更新的组件 使用
// 


console.log('-------------------------------------生命周期---------------------------------------');


class Sub3 extends React.Component{
    constructor(props){
        console.log('Sub contructor ---------------------1111');
        super(props);
        this.state={count:0};
    }
    handleClick(event){
        this.setState ({count:this.state.count + 1 });
    }
    render(){
        console.log('Sub render 00000000000');
        return (<div id='sub3' style={{color:'red',}}  onClick={this.handleClick.bind(this)}>
            Sub count={this.state.count};
        </div>);
    }

    componentWillMount(){
        // constructor 之后，第一次render之前 
        console.log('Sub componentWillMount  11111111 ');
    }

    componentDidMount(){
        // 第一次render 之后
        console.log('sub componentDidMount     222222222');
    }

    componentWillUnmount(){
        // 清理工作
        console.log('sub componentWillUnmount 33333333333');
    }

    componentWillReceiveProps(nextProps){
        // props变更时，接到新的props了，交给shouldComponentUpdate.
        // props 组件内只读，只能从外部改变
        console.log(this.props);
        console.log(nextProps);
        console.log(' Sub componentWillReceiveProps 66666666666',this.state.count);
    }

    shouldComponentUpdate(nextProps,nextState){
        // 是不是组件更新，props或者state 方法惊变时，返回布尔值，true 才会更新
        console.log('Sub shouldComponentUpdate 77777777777777777',this.state.count,nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        //同意更新后，真正的更新前，之后调用render 
        console.log('Sub componentWillUpdate 888888888888888',this.state.count,nextState);
    }

    componentDidUpdate(prevProps,prevState){
        // 同意更新后，真正更新后，在render 之后调用
        console.log('Sub componentDidUpdate 99999999999',this.state.count,prevState);
    }



}


const Sub4 = props => <div>sub4 !!!!!{props.name} </div>


class Root3 extends React.Component{
    constructor(props){
        console.log('Root Constructor  444444444444');
        super(props);       //调用父类构造器
        this.state = {flag:true,name:'root'};
    }

    handleClick(event){
        this.setState({
            flag: !this.state.flag,
            name: this.state.flag ? this.state.name.toLowerCase():this.state.name.toUpperCase(),
        });
    }
    render(){
        return (<div id='root3' onClick={this.handleClick.bind(this)} > 
            my Name is {this.state.name}
            <Sub3 />

            <Sub4 />
        </div>)
    }
}

ReactDom.render(<Root3 />,document.getElementById('root3'));



/* let Wrapper = Component =>  props => 
           ( <div>
            {props.schoolName}
            <hr />
            <Component {...props} /> 
        </div>); */

let Wrapper = id=> Component =>  props => 
           ( <div id={id}>
            {props.schoolName}{id}
            <hr />
            <Component {...{schoolName:'magedu.com',test:'test------------'}} test1="test1" /> 
        </div>);

@Wrapper('newroot')
class Root5 extends React.Component{
    render(){
        return <div>old Root5 {this.props.schoolName} + {this.props.test} </div>
    }
}

ReactDom.render(<Root5 schoolName='test5' />,document.getElementById('root5'));