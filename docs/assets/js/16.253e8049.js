(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{316:function(t,a,n){"use strict";n.r(a);var e=n(38),i=Object(e.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"如何实现居中对齐？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何实现居中对齐？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何实现居中对齐？")]),t._v(" "),n("blockquote",[n("p",[t._v("题目：如何实现水平居中？")])]),t._v(" "),n("h2",{attrs:{id:"水平居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#水平居中","aria-hidden":"true"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),n("p",[t._v("inline 元素用text-align: center;即可，如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n   text-align: center;\n}\n")])])]),n("p",[t._v("block 元素可使用margin: auto;，PC 时代的很多网站都这么搞。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n    text-align: center; \n}\n.item {\n    width: 1000px;\n    margin: auto; \n}\n")])])]),n("p",[t._v("绝对定位元素可结合left和margin实现，但是必须知道宽度。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n    position: relative;\n    width: 500px;\n}\n.item {\n    width: 300px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    margin: -150px;\n}\n")])])]),n("blockquote",[n("p",[t._v("题目：如何实现垂直居中？")])]),t._v(" "),n("h2",{attrs:{id:"垂直居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中","aria-hidden":"true"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),n("p",[t._v("inline 元素可设置line-height的值等于height值，如单行文字垂直居中：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n   height: 50px;\n   line-height: 50px;\n}\n")])])]),n("p",[t._v("绝对定位元素，可结合left和margin实现，但是必须知道尺寸。")]),t._v(" "),n("ul",[n("li",[t._v("优点：兼容性好")]),t._v(" "),n("li",[t._v("缺点：需要提前知道尺寸")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n    position: relative;\n    height: 200px;\n}\n.item {\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-top: -20px;\n    margin-left: -40px;\n}\n")])])]),n("p",[t._v("绝对定位可结合transform实现居中。")]),t._v(" "),n("ul",[n("li",[t._v("优点：不需要提前知道尺寸")]),t._v(" "),n("li",[t._v("缺点：兼容性不好")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n    position: relative;\n    height: 200px;\n}\n.item {\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background: blue;\n}\n")])])]),n("p",[t._v("绝对定位结合margin: auto，不需要提前知道尺寸，兼容性好。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".container {\n    position: relative;\n    height: 300px;\n}\n.item {\n    width: 100px;\n    height: 50px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n")])])]),n("p",[t._v("其他的解决方案还有，不过没必要掌握太多，能说出上文的这几个解决方案即可。")]),t._v(" "),n("h2",{attrs:{id:"参考网址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考网址","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考网址")]),t._v(" "),n("p",[n("a",{attrs:{href:""}},[t._v("掘进小册")])])])},[],!1,null,null,null);a.default=i.exports}}]);