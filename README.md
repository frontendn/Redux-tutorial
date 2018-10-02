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

# eject
1. 在webpack的配置文件中，将所有的js和jsx交给babel处理，将ES6等语法转化为普通浏览器支持的语法；
2. 关注于config和script的配置


# feature/flux-单向数据流框架的始祖
1. Disapatcher:处理Action分发，维持Store之间的依赖关系
2. Store：负责存储数据和处理数据相关的逻辑
3. Action：驱动Dispatcher的Js对象:必须包含type类型
4. View：视图部分

## dispatcher
把CounterStore注册到全局唯一的Dispatcher上，Dispatcher的register接受一个回调函数作为参数，返回token用于Store之间的同步。把register的返回值保存在dispatcherToken字段上
#### SummaryStore的waitFor-按照顺序调用各个回调函数
waitFor的参数为数组，每个元素都是Dispatcherregister函数的返回结果，即dispatchToken；控制权为Dispatcher，waitFor即为等待执行,等待dispatchToken代表的回调函数；
在emitChange()当中调用waitFor 

####  View
1. 创建时读取Store上状态来初始化组件内部状态
2. 当Store上的状态发生变化时，组件必须立即同步更新内部状态保持一致
3. View要是改变Store，必须并且只能派发action

##### 如果要改变界面，必须改变Store中的状态，如果要改变Store中的状态，必须派发一个action
