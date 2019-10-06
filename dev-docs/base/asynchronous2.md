# 异步
异步和同步也是面试中常考的内容，下面笔者来讲解下同步和异步的区别。

## 同步 vs 异步

先看下面的 demo，根据程序阅读起来表达的意思，应该是先打印100，1秒钟之后打印200，最后打印300。但是实际运行根本不是那么回事。

```js
console.log(100)
setTimeout(function () {
    console.log(200)
}, 1000)
console.log(300)
```

再对比以下程序。先打印100，再弹出200（等待用户确认），最后打印300。这个运行效果就符合预期要求。

```js
console.log(100)
alert(200)  // 1秒钟之后点击确认
console.log(300)
```

这俩到底有何区别？—— 第一个示例中间的步骤根本没有阻塞接下来程序的运行，而第二个示例却阻塞了后面程序的运行。前面这种表现就叫做 异步（后面这个叫做 同步 ），即不会阻塞后面程序的运行。

## 异步和单线程
JS 需要异步的根本原因是 JS 是单线程运行的，即在同一时间只能做一件事，不能“一心二用”。

一个 Ajax 请求由于网络比较慢，请求需要 5 秒钟。如果是同步，这 5 秒钟页面就卡死在这里啥也干不了了。异步的话，就好很多了，5 秒等待就等待了，其他事情不耽误做，至于那 5 秒钟等待是网速太慢，不是因为 JS 的原因。

讲到单线程，我们再来看个真题：

> 题目：讲解下面代码的执行过程和结果

```js
var a = true;
setTimeout(function(){
    a = false;
}, 100)
while(a){
    console.log('while执行了')
}
```

这是一个很有迷惑性的题目，不少候选人认为100ms之后，由于a变成了false，所以while就中止了，实际不是这样，因为JS是单线程的，所以进入while循环之后，没有「时间」（线程）去跑定时器了，所以这个代码跑起来是个死循环！

## 前端异步的场景

* 定时 setTimeout setInterval
* 网络请求，如 Ajax <img>加载

Ajax 代码示例

```js
console.log('start')
$.get('./data1.json', function (data1) {
    console.log(data1)
})
console.log('end')
```

img 代码示例（常用于打点统计）

```js
console.log('start')
var img = document.createElement('img')
// 或者 img = new Image()
img.onload = function () {
    console.log('loaded')
    img.onload = null
}
img.src = '/xxx.png'
console.log('end')
```

## 参考网址
[掘进小册]()
