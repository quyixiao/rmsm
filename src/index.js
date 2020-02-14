import React from 'react';
import ReactDom from 'react-dom';
import { EnvironmentPlugin } from 'webpack';
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
        return <button id='sub' onClick={this.clickHandler.bind(this)}>
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











