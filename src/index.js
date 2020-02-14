import React from 'react';
import ReactDom from 'react-dom';
// 组件类定义，从React.componet 类上继承，
class Sub extends React.Component{
    render(){
        return <span>i am sub elment  {2>1?'true':'false'} </span>
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
// 注意
// 1.React 组件的render函数return ，只能是一个顶级元素
// 2.JSX 语法是XML,要求所有的元素必需是闭合的，注意<br /> 不能写成<br> 
// 标签中的首字母小写就是html标记，首字母大写就是组件 
// 要求严格的HTML标记<br /> ,/ 前留一个空格
// 单行不需要使用小括号括起来，多选需要使用小括号括起来
// 元素有嵌套，注意多行，注意缩进
// JSX表达式，使用了{}括起来，如果在括号内使用了引号，会当做字符处理，例如<div>{2>1?'true':'false'}</div>
// </div> 里面的表达式成了字符串了
ReactDom.render(<Root />,document.getElementById('root'));// 对于单个




