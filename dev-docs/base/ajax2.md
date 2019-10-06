# Ajax

## XMLHttpRequest

> 题目：手写 XMLHttpRequest 不借助任何库

这是很多奇葩的、个性的面试官经常用的手段。这种考查方式存在很多争议，但是你不能完全说它是错误的，毕竟也是考查对最基础知识的掌握情况。

```js
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responseText)
        }
    }
}
xhr.open("GET", "/api", false)
xhr.send(null)
```

当然，使用 jQuery、Zepto 或 Fetch 等库来写就更加简单了，这里不再赘述。

## 状态码说明

上述代码中，有两处状态码需要说明。xhr.readyState是浏览器判断请求过程中各个阶段的，xhr.status是 HTTP 协议中规定的不同结果的返回状态说明。

xhr.readyState的状态码说明：

* 0 -代理被创建，但尚未调用 open() 方法。
* 1 -open() 方法已经被调用。
* 2 -send() 方法已经被调用，并且头部和状态已经可获得。
* 3 -下载中， responseText 属性已经包含部分数据。
* 4 -下载操作已完成

> 题目：HTTP 协议中，response 的状态码，常见的有哪些？

xhr.status即 HTTP 状态码，有 2xx 3xx 4xx 5xx 这几种，比较常用的有以下几种：

* 200 正常
* 3xx
	* 301 永久重定向。如http://xxx.com这个 GET 请求（最后没有/），就会被301到http://xxx.com/（最后是/）
	* 302 临时重定向。临时的，不是永久的
	* 304 资源找到但是不符合请求条件，不会返回任何主体。如发送 GET 请求时，head 中有If-Modified-Since: xxx（要求返回更新时间是xxx时间之后的资源），如果此时服务器 端资源未更新，则会返回304，即不符合要求
* 404 找不到资源
* 5xx 服务器端出错了

看完要明白，为何上述代码中要同时满足xhr.readyState == 4和xhr.status == 200。

## Fetch API

目前已经有一个获取 HTTP 请求更加方便的 API：Fetch，通过Fetch提供的fetch()这个全局函数方法可以很简单地发起异步请求，并且支持Promise的回调。但是 Fetch API 是比较新的 API，具体使用的时候还需要查查 caniuse，看下其浏览器兼容情况。

看一个简单的例子：

```js
fetch('some/api/data.json', {
  method:'POST', //请求类型 GET、POST
  headers:{}, // 请求的头信息，形式为 Headers 对象或 ByteString
  body:{}, //请求发送的数据 blob、BufferSource、FormData、URLSearchParams（get 或head 方法中不能包含 body）
  mode:'', //请求的模式，是否跨域等，如 cors、 no-cors 或 same-origin
  credentials:'', //cookie 的跨域策略，如 omit、same-origin 或 include
  cache:'', //请求的 cache 模式: default、no-store、reload、no-cache、 force-cache 或 only-if-cached
}).then(function(response) { ... });
```

Fetch 支持headers定义，通过headers自定义可以方便地实现多种请求方法（ PUT、GET、POST 等）、请求头（包括跨域）和cache策略等；除此之外还支持 response（返回数据）多种类型，比如支持二进制文件、字符串和formData等。

## 跨域

> 题目：如何实现跨域？

浏览器中有 同源策略 ，即一个域下的页面中，无法通过 Ajax 获取到其他域的接口。例如有一个接口http://m.juejin.com/course/ajaxcourserecom?cid=459，你自己的一个页面http://www.yourname.com/page1.html中的 Ajax 无法获取这个接口。这正是命中了“同源策略”。如果浏览器哪些地方忽略了同源策略，那就是浏览器的安全漏洞，需要紧急修复。

url 哪些地方不同算作跨域？

* 协议
* 域名
* 端口

但是 HTML 中几个标签能逃避过同源策略——script src="xxx"、img src="xxxx"、link href="xxxx"，这三个标签的src/href可以加载其他域的资源，不受同源策略限制。

因此，这使得这三个标签可以做一些特殊的事情。

* img 可以做打点统计，因为统计方并不一定是同域的，在讲解 JS 基础知识异步的时候有过代码示例。除了能跨域之外，img 几乎没有浏览器兼容问题，它是一个非常古老的标签。
* script 和 link 可以使用 CDN，CDN 基本都是其他域的链接。
* 另外 script 还可以实现 JSONP，能获取其他域接口的信息，接下来马上讲解。

但是请注意，所有的跨域请求方式，最终都需要信息提供方来做出相应的支持和改动，也就是要经过信息提供方的同意才行，否则接收方是无法得到它们的信息的，浏览器是不允许的。

## 解决跨域 - JSONP

首先，有一个概念你要明白，例如访问http://coding.m.juejin.com/classindex.html的时候，服务器端就一定有一个classindex.html文件吗？—— 不一定，服务器可以拿到这个请求，动态生成一个文件，然后返回。 同理，script src="http://coding.m.juejin.com/api.js" 也不一定加载一个服务器端的静态文件，服务器也可以动态生成文件并返回。OK，接下来正式开始。

例如我们的网站和掘金网，肯定不是一个域。我们需要掘金网提供一个接口，供我们来获取。首先，我们在自己的页面这样定义

```js
<script>
window.callback = function (data) {
    // 这是我们跨域得到信息
    console.log(data)
}
</script>
```

然后掘金网给我提供了一个http://coding.m.juejin.com/api.js，内容如下（之前说过，服务器可动态生成内容）

```js
callback({x:100, y:200})
```

最后我们在页面中加入 script src="http://coding.m.juejin.com/api.js" script，那么这个js加载之后，就会执行内容，我们就得到内容了。

## 解决跨域 - 服务器端设置 http header

这是需要在服务器端设置的，作为前端工程师我们不用详细掌握，但是要知道有这么个解决方案。而且，现在推崇的跨域解决方案是这一种，比 JSONP 简单许多。

```js
response.setHeader("Access-Control-Allow-Origin", "http://m.juejin.com/");  // 第二个参数填写允许跨域的域名称，不建议直接写 "*"
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```

## 参考网址
[掘进小册]()
