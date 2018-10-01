# redux-tutorial

# master
1. 转译js需要Babel，模块打包工具需要webpack，定制build过程又需要grunt或者gulp
2. import 是ES6语法中导入文件模版的方式，ES6的语法会被webpack和babel转译成为所有浏览器支持的ES5语法
3. React.Component:作为所有组件的基类
4. 在使用JSX语法的范围内，即使没有直接调用React，也需要import进去
5. JSX: 是js语法的拓展
（1）JSX中使用的"元素"，不仅包括HTML，也包括任意React组件
（2）判定为React组件：首字母大写
（3）onclick（HTML）和onClick（JSX）
HTML中的onclick：全局环境下执行，污染环境；影响页面性能；DOM元素删除后若忘记注销，容易内存泄漏
JSX的onClick：控制在组件范围内，借用了事件委托；添加的所有onClick都会挂载在最顶部的DOM节点上，点击均被它捕获，然后根据具体组件分配特定函数；umount时可以轻易注销所有事件处理函数，防止内存泄漏

##### jQuery （jQuery Directory）--选中DOM元素然后处理
根据CSS规则找到id为clickCount的按钮，挂上匿名事件处理函数，在事件处理函数中，选中需要被修改的DOM元素，读取其中文本值，然后修改这个DOM元素
##### React 关注于想要显示什么--UI=render(data) --响应式编程
利用Virtual DOM，每次都只重新渲染最少的DOM，是对DOM树的抽象，只存在于Javascript空间的树形结构；对比每次Virtual DOM进行重新渲染
事件--render--Virtual DOM -- DOM修改



# feature/component
1. 两种数据类型：prop（外）和state（内）
2. style={{color: "red"}} 外层{}为JSX语法，内层{}代表为一个对象常量;props类型不限于字符串，JSX中必须用{}
3. super(props)获取父组件的props，React.Component给this.props赋值
4. constructor的this绑定：ES6并不自动绑定this到当前实例对象
5. 解构赋值：const {caption} = this.props
6. PropTypes: 开发环境
7. state必须是一个Js对象
8. 组件的生命周期：装载-更新-卸载
##### 装载过程：constructor-getIntialState-getDefaultProp-componentWillMount-render-componentDidMount
getIntialState、detDefaultProp会在React.createClass中调用；ES6中constructor给类属性defaultProps赋值初始值，效果一样
##### 渲染：render-纯函数：componentWillMount（都可以提前到constructor）-render-componentDidMount
```
render函数被调用完之后，componentDidMount函数并不会立即调用，componentDidMount函数调用时，render已经引发了渲染，组件已经装载到DOM树上
只在浏览器执行，可只关注于浏览器端的逻辑
```

##### componentWillMount与componentDidMount区别
1. Did：只在浏览器执行
2. Will：在服务器端和浏览器端调用
3. 装载是一个创建组件并装载到DOM树上的过程，真正的装载不能在服务器端完成

##### 更新过程
1. componentWillReceiveProps
只要父函数的render被调用，在render函数里被渲染的子组件就会经历更新过程，不管父组件传给子组件的props有没有改变都会触发
```angular2html
this.setState不会出发这个函数,因为函数根据新的props计算是否更新内部状态status，更新内部状态使用setState，所以会导致死循环
```
2. shouldComponentUpdate(nextProps,nextState)
决定了一个组件什么时候不需要渲染，要求有返回结果，返回布尔值，告诉React这个组件在这次更新中是否需要继续
3. componentWillUpdate
4. render
5. componentDidUpdate
##### 卸载过程componentWillUnmount
在componentDidMount中非React方法创建的DOM需要在componentWillUnmount中卸载删除
