# 事件

## 事件绑定

普通的事件绑定写法如下：

```js
var btn = document.getElementById('btn1')
btn.addEventListener('click', function (event) {
    // event.preventDefault() // 阻止默认行为
    // event.stopPropagation() // 阻止冒泡
    console.log('clicked')
})
```

为了编写简单的事件绑定，可以编写通用的事件绑定函数。这里虽然比较简单，但是会随着后文的讲解，来继续完善和丰富这个函数。

```js
// 通用的事件绑定函数
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}
var a = document.getElementById('link1')
// 写起来更加简单了
bindEvent(a, 'click', function(e) {
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})
```

最后，如果面试被问到 IE 低版本兼容性问题，我劝你果断放弃这份工作机会。现在互联网流量都在 App 上， IE 占比越来越少，再去为 IE 浪费青春不值得，要尽量去做 App 相关的工作。

> 题目：什么是事件冒泡？

## 事件冒泡

```html
<body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
</body>
```

对于以上 HTML 代码结构，要求点击p1时候进入激活状态，点击其他任何 p 都取消激活状态，如何实现？代码如下，注意看注释：

```js
var body = document.body
bindEvent(body, 'click', function (e) {
    // 所有 p 的点击都会冒泡到 body 上，因为 DOM 结构中 body 是 p 的上级节点，事件会沿着 DOM 树向上冒泡
    alert('取消')
})

var p1 = document.getElementById('p1')
bindEvent(p1, 'click', function (e) {
    e.stopPropagation() // 阻止冒泡
    alert('激活')
})
```

如果我们在p1 div1 body中都绑定了事件，它是会根据 DOM 的结构来冒泡，从下到上挨个执行的。但是我们使用e.stopPropagation()就可以阻止冒泡

> 题目：如何使用事件代理？有何好处？

## 事件代理

我们设定一种场景，如下代码，一个 div 中包含了若干个 a ，而且还能继续增加。那如何快捷方便地为所有 a 绑定事件呢？

```html
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
</div>
<button>点击增加一个 a 标签</button>
```

这里就会用到事件代理。我们要监听 a 的事件，但要把具体的事件绑定到 div 上，然后看事件的触发点是不是 a。

```html
var div1 = document.getElementById('div1')
div1.addEventListener('click', function (e) {
    // e.target 可以监听到触发点击事件的元素是哪一个
    var target = e.target
    if (e.nodeName === 'A') {
        // 点击的是 <a> 元素
        alert(target.innerHTML)
    }
})
```

我们现在完善一下之前写的通用事件绑定函数，加上事件代理。

```js
function bindEvent(elem, type, selector, fn) {
    // 这样处理，可接收两种调用方式 bindEvent(div1, 'click', 'a', function () {...}) 和 bindEvent(div1, 'click', function () {...}) 这两种
    if (fn == null) {
        fn = selector
        selector = null
    }

    // 绑定事件
    elem.addEventListener(type, function (e) {
        var target
        if (selector) {
            // 有 selector 说明需要做事件代理
            // 获取触发时间的元素，即 e.target
            target = e.target
            // 看是否符合 selector 这个条件
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            // 无 selector ，说明不需要事件代理
            fn(e)
        }
    })
}
```

然后这样使用，简单很多。

```js
// 使用代理，bindEvent 多一个 'a' 参数
var div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'a', function (e) {
    console.log(this.innerHTML)
})

// 不使用代理
var a = document.getElementById('a1')
bindEvent(div1, 'click', function (e) {
    console.log(a.innerHTML)
})
```

最后，使用代理的优点如下：

* 使代码简洁
* 减少浏览器的内存占用

## 参考网址
[掘进小册]()
