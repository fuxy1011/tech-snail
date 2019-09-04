(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{268:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js运行机制","aria-hidden":"true"}},[t._v("#")]),t._v(" js运行机制")]),t._v(" "),s("p",[t._v("既然目前理解不了，就摘录自己认为重要的，不断思考理解做demo")]),t._v(" "),s("h2",{attrs:{id:"_1-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-event-loop","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.Event Loop")]),t._v(" "),s("p",[t._v("->先这么理解:简单来说是一套机制，好比交警，指导交通来往通行。不太确切，有更好的再调整")]),t._v(" "),s("h3",{attrs:{id:"_1-1-代码示例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-代码示例1","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 代码示例1")]),t._v(" "),s("blockquote",[s("p",[t._v("1.1.1 观察代码的执行顺序")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-2-关键字提取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-关键字提取","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 关键字提取")]),t._v(" "),s("blockquote",[s("p",[t._v("同步任务，异步任务，主线程，event table")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-小结1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-小结1","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 小结1:")]),t._v(" "),s("blockquote",[s("p",[t._v("按照这种分类方式:JS的执行机制是")])]),t._v(" "),s("ul",[s("li",[t._v("首先判断JS是同步还是异步,同步就进入主线程,异步就进入event table")]),t._v(" "),s("li",[t._v("异步任务在event table中注册函数,当满足触发条件后,被推入event queue")]),t._v(" "),s("li",[t._v("同步任务进入主线程后一直执行,直到主线程空闲时,才会去event queue中查看是否有可执行的异步任务,如果有就推入主线程中")])]),t._v(" "),s("h3",{attrs:{id:"_1-4-代码示例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-代码示例2","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4 代码示例2")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定时器开始啦'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'马上执行for循环啦'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行then函数啦'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码执行结束'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-5-关键字提取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-关键字提取","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.5 关键字提取")]),t._v(" "),s("blockquote",[s("p",[t._v("同步任务，异步任务，主线程，event table，先后顺序，宏任务，微任务，队列")])]),t._v(" "),s("h3",{attrs:{id:"_1-6-宏任务，微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-宏任务，微任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6 宏任务，微任务")]),t._v(" "),s("ul",[s("li",[t._v("macro-task(宏任务)：包括整体代码script，setTimeout，setInterval")]),t._v(" "),s("li",[t._v("micro-task(微任务)：Promise，process.nextTick")])]),t._v(" "),s("h3",{attrs:{id:"_1-7-小结2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-小结2","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.7 小结2")]),t._v(" "),s("blockquote",[s("p",[t._v("按照这种分类方式:JS的执行机制是")])]),t._v(" "),s("ul",[s("li",[t._v("执行一个宏任务,过程中如果遇到微任务,就将其放到微任务的【事件队列】里")]),t._v(" "),s("li",[t._v("当前宏任务执行完成后,会查看微任务的【事件队列】,并将里面全部的微任务依次执行完")])]),t._v(" "),s("h3",{attrs:{id:"_1-8-再度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-再度分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.8 再度分析")]),t._v(" "),s("blockquote",[s("p",[t._v("尝试按照刚学的执行机制,去分析例2:")])]),t._v(" "),s("ul",[s("li",[t._v("首先执行script下的宏任务,遇到setTimeout,将其放到宏任务的【队列】里")]),t._v(" "),s("li",[t._v('遇到 new Promise直接执行,打印"马上执行for循环啦"')]),t._v(" "),s("li",[t._v("遇到then方法,是微任务,将其放到微任务的【队列里】")]),t._v(" "),s("li",[t._v('打印 "代码执行结束"')]),t._v(" "),s("li",[t._v('本轮宏任务执行完毕,查看本轮的微任务,发现有一个then方法里的函数, 打印"执行then函数啦"')]),t._v(" "),s("li",[t._v("到此,本轮的event loop 全部完成。")]),t._v(" "),s("li",[t._v('下一轮的循环里,先执行一个宏任务,发现宏任务的【队列】里有一个 setTimeout里的函数,执行打印"定时器开始啦"')])]),t._v(" "),s("h2",{attrs:{id:"_2-单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-单线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.单线程")]),t._v(" "),s("h3",{attrs:{id:"_2-1-进程和线程傻傻分不清"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-进程和线程傻傻分不清","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 进程和线程傻傻分不清")]),t._v(" "),s("p",[t._v("进程是cpu资源分配的最小单位，进程可以包含多个线程。 浏览器就是多进程的，每打开的一个浏览器窗口就是一个进程。")]),t._v(" "),s("p",[t._v("线程是cpu调度的最小单位，同一进程下的各个线程之间共享程序的内存空间。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-类比记忆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-类比记忆","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 类比记忆")]),t._v(" "),s("p",[t._v("可以把进程看做一个仓库，线程是可以运输的货车，每个仓库有属于自己的多辆货车为仓库服务（运货），每个仓库可以同时由多辆车同时拉货，但是每辆车同一时间只能干一件事，就是运输本次的货物。这样就好理解了吧。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-浏览器中的进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-浏览器中的进程和线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 浏览器中的进程和线程")]),t._v(" "),s("p",[t._v("浏览器包括4个进程：")]),t._v(" "),s("ul",[s("li",[t._v("主进程（Browser进程），浏览器只有一个主进程，负责资源下载，界面展示等主要基础功能")]),t._v(" "),s("li",[t._v("GPU进程，负责3D图示绘制")]),t._v(" "),s("li",[t._v("第三方插件进程，负责第三方插件处理")]),t._v(" "),s("li",[t._v("渲染进程（Renderer进程），负责js执行，页面渲染等功能，也是本章重点内容")])]),t._v(" "),s("p",[t._v("渲染进程 主要包括")]),t._v(" "),s("ul",[s("li",[t._v("GUI渲染线程、")]),t._v(" "),s("li",[t._v("Js引擎线程、")]),t._v(" "),s("li",[t._v("事件循环线程、")]),t._v(" "),s("li",[t._v("定时器线程、")]),t._v(" "),s("li",[t._v("http异步线程。")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-gui线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-gui线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 GUI线程")]),t._v(" "),s("p",[t._v("先看看浏览器得到一个网站资源后干了哪些事：")]),t._v(" "),s("ul",[s("li",[t._v("首先浏览器会解析html代码（实际上html代码本质是字符串）转化为浏览器认识的节点，生成DOM树，也就是DOM Tree")]),t._v(" "),s("li",[t._v("然后解析css，生成CSSOM（CSS规则树）")]),t._v(" "),s("li",[t._v("把DOM Tree 和CSSOM结合，生成Rendering Tree(渲染树)")])]),t._v(" "),s("p",[t._v("GUI就是来干这个事情的，如果修改了一些元素的颜色或者背景色，页面就会重绘（Repaint），如果修改元素的尺寸，页面就会回流（Reflow），当页面需要Repaing和Reflow时GUI多会执行，进行页面绘制。")]),t._v(" "),s("p",[t._v("这里提示一点：Reflow比Repaint的成本更高，在js性能优化中会将如何避免Reflow和Repaint")]),t._v(" "),s("h3",{attrs:{id:"_2-5-js引擎线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-js引擎线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.5 JS引擎线程")]),t._v(" "),s("p",[t._v("js引擎线程就是js内核，负责解析与执行js代码，也称为主线程。浏览器同时只能有一个JS引擎线程在运行JS程序，所以js是单线程运行的。")]),t._v(" "),s("p",[t._v("需要注意的是，js引擎线程和GUI渲染线程同时只能有一个工作，js引擎线程会阻塞GUI渲染线程")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n        ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("div2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" div2 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("tip:")])]),t._v(" "),s("pre",[s("code",[t._v("在浏览器渲染的时候遇到<script>标签，就会停止GUI的渲染，然后js引擎线程开始工作，执行里面的js代码，等js执行完毕，js引擎线程停止工作，GUI继续渲染下面的内容。所以如果js执行时间太长就会造成页面卡顿的情况，这也是后面性能优化的点。\n")])]),t._v(" "),s("h3",{attrs:{id:"_2-6-按照组成部分小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-按照组成部分小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.6 按照组成部分小结")]),t._v(" "),s("blockquote",[s("p",[t._v("js运行过程：")])]),t._v(" "),s("ul",[s("li",[t._v("执行一个宏任务（栈中没有就从事件队列中获取）")]),t._v(" "),s("li",[t._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")]),t._v(" "),s("li",[t._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")]),t._v(" "),s("li",[t._v("当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染")]),t._v(" "),s("li",[t._v("渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）")])]),t._v(" "),s("h2",{attrs:{id:"参考网址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考网址","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考网址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000012806637",target:"_blank",rel:"noopener noreferrer"}},[t._v("10分钟理解JS引擎的执行机制"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000013119813",target:"_blank",rel:"noopener noreferrer"}},[t._v("Js基础知识（四） - js运行原理与机制"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);