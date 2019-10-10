# 浏览器

## 加载页面和渲染过程

可将加载过程和渲染过程分开说。回答问题的时候，关键要抓住核心的要点，把要点说全面，稍加解析即可，简明扼要不拖沓。

> 题目：浏览器从加载页面到渲染页面的过程

### 加载过程

要点如下：

* 浏览器根据 DNS 服务器得到域名的 IP 地址
* 向这个 IP 的机器发送 HTTP 请求
* 服务器收到、处理并返回 HTTP 请求
* 浏览器得到返回内容

例如在浏览器输入https://juejin.im/timeline，然后经过 DNS 解析，juejin.im对应的 IP 是36.248.217.149（不同时间、地点对应的 IP 可能会不同）。然后浏览器向该 IP 发送 HTTP 请求。

server 端接收到 HTTP 请求，然后经过计算（向不同的用户推送不同的内容），返回 HTTP 请求，返回的内容如下：


其实就是一堆 HMTL 格式的字符串，因为只有 HTML 格式浏览器才能正确解析，这是 W3C 标准的要求。接下来就是浏览器的渲染过程。

### 渲染过程

要点如下：

* 根据 HTML 结构生成 DOM 树
* 根据 CSS 生成 CSSOM
* 将 DOM 和 CSSOM 整合形成 RenderTree
* 根据 RenderTree 开始渲染和展示
* 遇到 script 时，会执行并阻塞渲染

上文中，浏览器已经拿到了 server 端返回的 HTML 内容，开始解析并渲染。最初拿到的内容就是一堆字符串，必须先结构化成计算机擅长处理的基本数据结构，因此要把 HTML 字符串转化成 DOM 树 —— 树是最基本的数据结构之一。

解析过程中，如果遇到 link href="..." 和 script src="..." 这种外链加载 CSS 和 JS 的标签，浏览器会异步下载，下载过程和上文中下载 HTML 的流程一样。只不过，这里下载下来的字符串是 CSS 或者 JS 格式的。

浏览器将 CSS 生成 CSSOM，再将 DOM 和 CSSOM 整合成 RenderTree ，然后针对 RenderTree 即可进行渲染了。大家可以想一下，有 DOM 结构、有样式，此时就能满足渲染的条件了。另外，这里也可以解释一个问题 —— 为何要将 CSS 放在 HTML 头部？—— 这样会让浏览器尽早拿到 CSS 尽早生成 CSSOM，然后在解析 HTML 之后可一次性生成最终的 RenderTree，渲染一次即可。如果 CSS 放在 HTML 底部，会出现渲染卡顿的情况，影响性能和体验。

最后，渲染过程中，如果遇到 script 就停止渲染，执行 JS 代码。因为浏览器渲染和 JS 执行共用一个线程，而且这里必须是单线程操作，多线程会产生渲染 DOM 冲突。待 script 内容执行完之后，浏览器继续渲染。最后再思考一个问题 —— 为何要将 JS 放在 HTML 底部？—— JS 放在底部可以保证让浏览器优先渲染完现有的 HTML 内容，让用户先看到内容，体验好。另外，JS 执行如果涉及 DOM 操作，得等待 DOM 解析完成才行，JS 放在底部执行时，HTML 肯定都解析成了 DOM 结构。JS 如果放在 HTML 顶部，JS 执行的时候 HTML 还没来得及转换为 DOM 结构，可能会报错。

关于浏览器整个流程，百度的多益大神有更加详细的文章，推荐阅读下：《从输入 URL 到页面加载完成的过程中都发生了什么事情？ 》。

## 参考网址
[掘进小册]()