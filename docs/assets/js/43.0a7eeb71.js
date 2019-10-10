(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{287:function(e,t,a){"use strict";a.r(t);var o=a(38),s=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储","aria-hidden":"true"}},[e._v("#")]),e._v(" 存储")]),e._v(" "),a("blockquote",[a("p",[e._v("题目：cookie 和 localStorage 有何区别？")])]),e._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[e._v("#")]),e._v(" cookie")]),e._v(" "),a("p",[e._v("cookie 本身不是用来做服务器端存储的（计算机领域有很多这种“狗拿耗子”的例子，例如 CSS 中的 float），它是设计用来在服务器和客户端进行信息传递的，因此我们的每个 HTTP 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了。")]),e._v(" "),a("p",[e._v("使用起来也非常简单，document.cookie = ....即可。")]),e._v(" "),a("p",[e._v("但是 cookie 有它致命的缺点：")]),e._v(" "),a("ul",[a("li",[e._v("存储量太小，只有 4KB")]),e._v(" "),a("li",[e._v("所有 HTTP 请求都带着，会影响获取资源的效率")]),e._v(" "),a("li",[e._v("API 简单，需要封装才能用")])]),e._v(" "),a("h2",{attrs:{id:"localstorage-和-sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-和-sessionstorage","aria-hidden":"true"}},[e._v("#")]),e._v(" localStorage 和 sessionStorage")]),e._v(" "),a("p",[e._v("后来，HTML5 标准就带来了sessionStorage和localStorage，先拿localStorage来说，它是专门为了浏览器端缓存而设计的。其优点有：")]),e._v(" "),a("ul",[a("li",[e._v("存储量增大到 5MB")]),e._v(" "),a("li",[e._v("不会带到 HTTP 请求中")]),e._v(" "),a("li",[e._v("API 适用于数据存储 localStorage.setItem(key, value) localStorage.getItem(key)")])]),e._v(" "),a("p",[e._v("sessionStorage的区别就在于它是根据 session 过去时间而实现，而localStorage会永久有效，应用场景不同。例如，一些需要及时失效的重要信息放在sessionStorage中，一些不重要但是不经常设置的信息，放在localStorage中。")]),e._v(" "),a("p",[e._v("另外告诉大家一个小技巧，针对localStorage.setItem，使用时尽量加入到try-catch中，某些浏览器是禁用这个 API 的，要注意。")]),e._v(" "),a("h2",{attrs:{id:"参考网址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考网址","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考网址")]),e._v(" "),a("p",[a("a",{attrs:{href:""}},[e._v("掘进小册")])])])},[],!1,null,null,null);t.default=s.exports}}]);