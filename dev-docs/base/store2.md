# 存储

> 题目：cookie 和 localStorage 有何区别？

## cookie

cookie 本身不是用来做服务器端存储的（计算机领域有很多这种“狗拿耗子”的例子，例如 CSS 中的 float），它是设计用来在服务器和客户端进行信息传递的，因此我们的每个 HTTP 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了。

使用起来也非常简单，document.cookie = ....即可。

但是 cookie 有它致命的缺点：

* 存储量太小，只有 4KB
* 所有 HTTP 请求都带着，会影响获取资源的效率
* API 简单，需要封装才能用

## localStorage 和 sessionStorage

后来，HTML5 标准就带来了sessionStorage和localStorage，先拿localStorage来说，它是专门为了浏览器端缓存而设计的。其优点有：

* 存储量增大到 5MB
* 不会带到 HTTP 请求中
* API 适用于数据存储 localStorage.setItem(key, value) localStorage.getItem(key)

sessionStorage的区别就在于它是根据 session 过去时间而实现，而localStorage会永久有效，应用场景不同。例如，一些需要及时失效的重要信息放在sessionStorage中，一些不重要但是不经常设置的信息，放在localStorage中。

另外告诉大家一个小技巧，针对localStorage.setItem，使用时尽量加入到try-catch中，某些浏览器是禁用这个 API 的，要注意。

## 参考网址
[掘进小册]()