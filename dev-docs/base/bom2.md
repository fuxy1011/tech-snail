# BOM
BOM（浏览器对象模型）是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览器跳转到哪个地址。

* navigator
* screen
* location
* history

这些对象就是一堆非常简单粗暴的 API，没任何技术含量，讲起来一点意思都没有，大家去 MDN 或者 w3school 这种网站一查就都明白了。面试的时候，面试官基本不会出太多这方面的题目，因为只要基础知识过关了，这些 API 即便你记不住，上网一查也都知道了。下面列举一下常用功能的代码示例

获取浏览器特性（即俗称的UA）然后识别客户端，例如判断是不是 Chrome 浏览器

```js
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

获取屏幕的宽度和高度

```js
console.log(screen.width)
console.log(screen.height)
```

获取网址、协议、path、参数、hash 等

```js
// 例如当前网址是 https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.href)  // https://juejin.im/timeline/frontend?a=10&b=10#some
console.log(location.protocol) // https:
console.log(location.pathname) // /timeline/frontend
console.log(location.search) // ?a=10&b=10
console.log(location.hash) // #some
```

另外，还有调用浏览器的前进、后退功能等

```js
history.back()
history.forward()
```

## 参考网址
[掘进小册]()
