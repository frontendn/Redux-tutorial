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

# feature/redux
Redux: 唯一数据源(Store)，保持状态只读，数据改变根据纯函数完成(reducer规约所有元素的功能，reducer(state,action),reducer负责计算状态并不存储状态)
```angular2html

```
