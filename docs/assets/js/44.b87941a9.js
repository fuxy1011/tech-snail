(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{284:function(a,t,e){"use strict";e.r(t);var s=e(38),n=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"前端构建工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端构建工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端构建工具")]),a._v(" "),e("p",[a._v("构建工具是前端工程化中不可缺少的一环，非常重要，而在面试中却有其特殊性 —— 面试官会通过询问构建工具的作用、目的来询问你对构建工具的了解，只要这些你都知道，不会再追问细节。因为，在实际工作中，真正能让你编写构建工具配置文件的机会非常少，一个项目就配置一次，后面就很少改动了。而且，如果是大众使用的框架（如 React、Vue 等），还会直接有现成的脚手架工具，一键创建开发环境，不用手动配置。")]),a._v(" "),e("blockquote",[e("p",[a._v("题目：前端为何要使用构建工具？它解决了什么问题？")])]),a._v(" "),e("h2",{attrs:{id:"何为构建工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为构建工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 何为构建工具")]),a._v(" "),e("p",[a._v("“构建”也可理解为“编译”，就是将开发环境的代码转换成运行环境代码的过程。开发环境的代码是为了更好地阅读，而运行环境的代码是为了更快地执行，两者目的不一样，因此代码形式也不一样。例如，开发环境写的 JS 代码，要通过混淆压缩之后才能放在线上运行，因为这样代码体积更小，而且对代码执行不会有任何影响。总结一下需要构建工具处理的几种情况：")]),a._v(" "),e("ul",[e("li",[a._v("处理模块化：CSS 和 JS 的模块化语法，目前都无法被浏览器兼容。因此，开发环境可以使用既定的模块化语法，但是需要构建工具将模块化语法编译为浏览器可识别形式。例如，使用 webpack、Rollup 等处理 JS 模块化。")]),a._v(" "),e("li",[a._v("编译语法：编写 CSS 时使用 Less、Sass，编写 JS 时使用 ES6、TypeScript 等。这些标准目前也都无法被浏览器兼容，因此需要构建工具编译，例如使用 Babel 编译 ES6 语法。")]),a._v(" "),e("li",[a._v("代码压缩：将 CSS、JS 代码混淆压缩，为了让代码体积更小，加载更快。")])]),a._v(" "),e("h2",{attrs:{id:"构建工具介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建工具介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建工具介绍")]),a._v(" "),e("p",[a._v("最早普及使用的构建工具是 Grunt ，不久又被 Gulp 给追赶上。Gulp 因其简单的配置以及高效的性能而被大家所接受，也是笔者个人比较推荐的构建工具之一。如果你做一些简单的 JS 开发，可以考虑使用。")]),a._v(" "),e("p",[a._v("如果你的项目比较复杂，而且是多人开发，那么你就需要掌握目前构建工具届的神器 —— webpack 。不过神器也有一个缺点，就是学习成本比较高，需要拿出专门的时间来专心学习，而不是三言两语就能讲完的。我们下面就演示一下 webpack 最简单的使用，全面的学习还得靠大家去认真查阅相关文档，或者参考专门讲解 webpack 的教程。")]),a._v(" "),e("h2",{attrs:{id:"webpack-演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-演示","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 演示")]),a._v(" "),e("p",[a._v("接下来我们演示一下 webpack 处理模块化和混淆压缩代码这两个基本功能。")]),a._v(" "),e("p",[a._v("首先，你需要安装 Node.js，没有安装的可以去 Node.js 官网 下载并安装。安装完成后运行如下命令来验证是否安装成功。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("node -v\nnpm -v\n")])])]),e("p",[a._v("然后，新建一个目录，进入该目录，运行npm init，按照提示输入名称、版本、描述等信息。完成之后，该目录下出现了一个package.json文件，是一个 JSON 文件。")]),a._v(" "),e("p",[a._v("接下来，安装 wepback，运行npm i --save-dev webpack，网络原因需要耐心等待几分钟。")]),a._v(" "),e("p",[a._v("接下来，编写源代码，在该目录下创建src文件夹，并在其中创建app.js和dt.js两个文件，文件内容分别是：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// dt.js 内容\nmodule.exports = {\n    getDateNow: function () {\n        return Date.now()\n    }\n}\n\n// app.js 内容\nvar dt = require('./dt.js')\nalert(dt.getDateNow())\n")])])]),e("p",[a._v("然后，再返回上一层目录，新建index.html文件（该文件和src属于同一层级），内容是")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>test</title>\n</head>\n<body>\n    <div>test</div>\n    \n    <script src='./dist/bundle.js'><\/script>\n</body>\n</html>\n")])])]),e("p",[a._v("然后，编写 webpack 配置文件，新建webpack.config.js，内容是")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const path = require('path');\nconst webpack = require('webpack');\nmodule.exports = {\n  context: path.resolve(__dirname, './src'),\n  entry: {\n    app: './app.js',\n  },\n  output: {\n    path: path.resolve(__dirname, './dist'),\n    filename: 'bundle.js',\n  },\n  plugins: [\n    new webpack.optimize.UglifyJsPlugin({\n        compress: {\n          //supresses warnings, usually from module minification\n          warnings: false\n        }\n    }),\n  ]\n};\n")])])]),e("p",[a._v("总结一下，目前项目的文件目录是：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("src\n  +-- app.js\n  +-- dt.js\nindex.html\npackage.json\nwebpack.config.js\n")])])]),e("p",[a._v("接下来，打开package.json，然后修改其中scripts的内容为：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('  "scripts": {\n    "start": "webpack"\n  }\n')])])]),e("p",[a._v("在命令行中运行npm start，即可看到编译的结果，最后在浏览器中打开index.html，即可弹出Date.now()的值。")]),a._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("最后再次强调，深刻理解构建工具存在的价值，比你多会一些配置代码更加有意义，特别是对于应对面试来说。")]),a._v(" "),e("h2",{attrs:{id:"参考网址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考网址","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考网址")]),a._v(" "),e("p",[e("a",{attrs:{href:""}},[a._v("掘进小册")])])])},[],!1,null,null,null);t.default=n.exports}}]);