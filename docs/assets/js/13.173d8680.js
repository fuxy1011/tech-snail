(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{319:function(n,t,e){"use strict";e.r(t);var a=e(38),r=Object(a.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"人人都要掌握的基础算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#人人都要掌握的基础算法","aria-hidden":"true"}},[n._v("#")]),n._v(" 人人都要掌握的基础算法")]),n._v(" "),e("p",[n._v("枚举和递归是最最简单的算法，也是复杂算法的基础，人人都应该掌握！枚举相对比较简单，我们重点说下递归。")]),n._v(" "),e("p",[n._v("递归由下面两部分组成：")]),n._v(" "),e("ul",[e("li",[n._v("递归主体，就是要循环解决问题的代码")]),n._v(" "),e("li",[n._v("递归的跳出条件，递归不能一直递归下去，需要完成一定条件后跳出")])]),n._v(" "),e("p",[n._v("关于递归有个经典的面试题目是：")]),n._v(" "),e("blockquote",[e("p",[n._v("实现 JS 对象的深拷贝")])]),n._v(" "),e("h2",{attrs:{id:"什么是深拷贝？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是深拷贝？","aria-hidden":"true"}},[n._v("#")]),n._v(" 什么是深拷贝？")]),n._v(" "),e("p",[n._v("「深拷贝」就是在拷贝数据的时候，将数据的所有引用结构都拷贝一份。简单的说就是，在内存中存在两个数据结构完全相同又相互独立的数据，将引用型类型进行复制，而不是只复制其引用关系。")]),n._v(" "),e("p",[n._v("分析下怎么做「深拷贝」：")]),n._v(" "),e("ul",[e("li",[n._v("首先假设深拷贝这个方法已经完成，为 deepClone")]),n._v(" "),e("li",[n._v("要拷贝一个数据，我们肯定要去遍历它的属性，如果这个对象的属性仍是对象，继续使用这个方法，如此往复")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function deepClone(o1, o2) {\n    for (let k in o2) {\n        if (typeof o2[k] === 'object') {\n            o1[k] = {};\n            deepClone(o1[k], o2[k]);\n        } else {\n            o1[k] = o2[k];\n        }\n    }\n}\n// 测试用例\nlet obj = {\n    a: 1,\n    b: [1, 2, 3],\n    c: {}\n};\nlet emptyObj = Object.create(null);\ndeepClone(emptyObj, obj);\nconsole.log(emptyObj.a == obj.a);\nconsole.log(emptyObj.b == obj.b);\n")])])]),e("p",[n._v("递归容易造成爆栈，尾部调用可以解决递归的这个问题，Chrome 的 V8 引擎做了尾部调用优化，我们在写代码的时候也要注意尾部调用写法。递归的爆栈问题可以通过将递归改写成枚举的方式来解决，就是通过for或者while来代替递归。")]),n._v(" "),e("p",[n._v("我们在使用递归的时候，要注意做优化，比如下面的题目。")]),n._v(" "),e("blockquote",[e("p",[n._v("题目：求斐波那契数列（兔子数列） 1,1,2,3,5,8,13,21,34,55,89...中的第 n 项")])]),n._v(" "),e("p",[n._v("下面的代码中count记录递归的次数，我们看下两种差异性的代码中的count的值：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("let count = 0;\nfunction fn(n) {\n    let cache = {};\n    function _fn(n) {\n        if (cache[n]) {\n            return cache[n];\n        }\n        count++;\n        if (n == 1 || n == 2) {\n            return 1;\n        }\n        let prev = _fn(n - 1);\n        cache[n - 1] = prev;\n        let next = _fn(n - 2);\n        cache[n - 2] = next;\n        return prev + next;\n    }\n    return _fn(n);\n}\n\nlet count2 = 0;\nfunction fn2(n) {\n    count2++;\n    if (n == 1 || n == 2) {\n        return 1;\n    }\n    return fn2(n - 1) + fn2(n - 2);\n}\n\nconsole.log(fn(20), count); // 6765 20\nconsole.log(fn2(20), count2); // 6765 13529\n")])])]),e("h2",{attrs:{id:"快排和二分查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快排和二分查找","aria-hidden":"true"}},[n._v("#")]),n._v(" 快排和二分查找")]),n._v(" "),e("p",[n._v("前端中面试排序和查找的可能性比较小，因为 JS 引擎已经把这些常用操作优化得很好了，可能项目中你费劲写的一个排序方法，都不如Array.sort速度快且代码少。因此，掌握快排和二分查找就可以了。")]),n._v(" "),e("p",[n._v("快排和二分查找都基于一种叫做「分治」的算法思想，通过对数据进行分类处理，不断降低数量级，实现O(logN)（对数级别，比O(n)这种线性复杂度更低的一种，快排核心是二分法的O(logN)，实际复杂度为O(N*logN)）的复杂度。")]),n._v(" "),e("h3",{attrs:{id:"快速排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速排序","aria-hidden":"true"}},[n._v("#")]),n._v(" 快速排序")]),n._v(" "),e("p",[n._v("快排大概的流程是：")]),n._v(" "),e("ul",[e("li",[n._v("随机选择数组中的一个数 A，以这个数为基准")]),n._v(" "),e("li",[n._v("其他数字跟这个数进行比较，比这个数小的放在其左边，大的放到其右边")]),n._v(" "),e("li",[n._v("经过一次循环之后，A 左边为小于 A 的，右边为大于 A 的")]),n._v(" "),e("li",[n._v("这时候将左边和右边的数再递归上面的过程")])]),n._v(" "),e("p",[n._v("具体代码如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 划分操作函数\nfunction partition(array, left, right) {\n    // 用index取中间值而非splice\n    const pivot = array[Math.floor((right + left) / 2)]\n    let i = left\n    let j = right\n\n    while (i <= j) {\n        while (compare(array[i], pivot) === -1) {\n            i++\n        }\n        while (compare(array[j], pivot) === 1) {\n            j--\n        }\n        if (i <= j) {\n            swap(array, i, j)\n            i++\n            j--\n        }\n    }\n    return i\n}\n\n// 比较函数\nfunction compare(a, b) {\n    if (a === b) {\n        return 0\n    }\n    return a < b ? -1 : 1\n}\n\nfunction quick(array, left, right) {\n    let index\n    if (array.length > 1) {\n        index = partition(array, left, right)\n        if (left < index - 1) {\n            quick(array, left, index - 1)\n        }\n        if (index < right) {\n            quick(array, index, right)\n        }\n    }\n    return array\n}\nfunction quickSort(array) {\n    return quick(array, 0, array.length - 1)\n}\n\n// 原地交换函数，而非用临时数组\nfunction swap(array, a, b) {\n    ;[array[a], array[b]] = [array[b], array[a]]\n}\nconst Arr = [85, 24, 63, 45, 17, 31, 96, 50];\nconsole.log(quickSort(Arr));\n// 本版本来自：https://juejin.im/post/5af4902a6fb9a07abf728c40#heading-12\n")])])]),e("h3",{attrs:{id:"二分查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二分查找","aria-hidden":"true"}},[n._v("#")]),n._v(" 二分查找")]),n._v(" "),e("p",[n._v("二分查找法主要是解决「在一堆有序的数中找出指定的数」这类问题，不管这些数是一维数组还是多维数组，只要有序，就可以用二分查找来优化。")]),n._v(" "),e("p",[n._v("二分查找是一种「分治」思想的算法，大概流程如下：")]),n._v(" "),e("ul",[e("li",[n._v("数组中排在中间的数字 A，与要找的数字比较大小")]),n._v(" "),e("li",[n._v("因为数组是有序的，所以： a) A 较大则说明要查找的数字应该从前半部分查找 b) A 较小则说明应该从查找数字的后半部分查找")]),n._v(" "),e("li",[n._v("这样不断查找缩小数量级（扔掉一半数据），直到找完数组为止")])]),n._v(" "),e("blockquote",[e("p",[n._v("题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Find(target, array) {\n    let i = 0;\n    let j = array[i].length - 1;\n    while (i < array.length && j >= 0) {\n        if (array[i][j] < target) {\n            i++;\n        } else if (array[i][j] > target) {\n            j--;\n        } else {\n            return true;\n        }\n    }\n    return false;\n}\n\n//测试用例\nconsole.log(Find(10, [\n    [1, 2, 3, 4], \n    [5, 9, 10, 11], \n    [13, 20, 21, 23]\n    ])\n);\n")])])]),e("p",[n._v("另外笔者在面试中遇见过下面的问题：")]),n._v(" "),e("blockquote",[e("p",[n._v("题目：现在我有一个 1~1000 区间中的正整数，需要你猜下这个数字是几，你只能问一个问题：大了还是小了？问需要猜几次才能猜对？")])]),n._v(" "),e("p",[n._v("拿到这个题目，笔者想到的就是电视上面有个「猜价格」的购物节目，在规定时间内猜对价格就可以把实物抱回家。所以问题就是让面试官不停地回答我猜的数字比这个数字大了还是小了。这就是二分查找！")]),n._v(" "),e("p",[n._v("猜几次呢？其实这个问题就是个二分查找的算法时间复杂度问题，二分查找的时间复杂度是O(logN)，所以求log1000的解就是猜的次数。我们知道2^10=1024，所以可以快速估算出：log1000约等于 10，最多问 10 次就能得到这个数！")]),n._v(" "),e("h2",{attrs:{id:"面试遇见不会的算法问题怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试遇见不会的算法问题怎么办","aria-hidden":"true"}},[n._v("#")]),n._v(" 面试遇见不会的算法问题怎么办")]),n._v(" "),e("p",[n._v("面试的时候，在遇见算法题目的时候，应该揣摩面试官的意图，听好关键词，比如：有序的数列做查找、要求算法复杂度是O(logN)这类一般就是用二分的思想。")]),n._v(" "),e("p",[n._v("一般来说算法题目的解题思路分以下四步：")]),n._v(" "),e("ul",[e("li",[n._v("先降低数量级，拿可以计算出来的情况（数据）来构思解题步骤")]),n._v(" "),e("li",[n._v("根据解题步骤编写程序，优先将特殊情况做好判断处理，比如一个大数组的问题，如果数组为两个数长度的情况")]),n._v(" "),e("li",[n._v("检验程序正确性")]),n._v(" "),e("li",[n._v("是否可以优化（由浅到深），有能力的话可以故意预留优化点，这样可以体现个人技术能力")])]),n._v(" "),e("h2",{attrs:{id:"正则匹配解题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则匹配解题","aria-hidden":"true"}},[n._v("#")]),n._v(" 正则匹配解题")]),n._v(" "),e("p",[n._v("很多算法题目利用 ES 语法的特性来回答更加简单，比如正则匹配就是常用的一种方式。笔者简单通过几个真题来汇总下正则的知识点。")]),n._v(" "),e("blockquote",[e("p",[n._v("题目：字符串中第一个出现一次的字符")])]),n._v(" "),e("p",[n._v("请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符「go」时，第一个只出现一次的字符是「g」。当从该字符流中读出前六个字符「google」时，第一个只出现一次的字符是「l」。")]),n._v(" "),e("p",[n._v("这个如果用纯算法来解答需要遍历字符串，统计每个字符出现的次数，然后按照字符串的顺序来找出第一次出现一次的字符，整个过程比较繁琐，如果用正则就简单多了。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function find(str){\n    for (var i = 0; i < str.length; i++) {\n        let char = str[i]\n        let reg = new RegExp(char, 'g');\n        let l = str.match(reg).length\n        if(l===1){\n            return char\n        }\n    }\n}\n")])])]),e("p",[n._v("当然，使用indexOf/lastIndexOf也是一个取巧的方式。再来看一个千分位问题。")]),n._v(" "),e("blockquote",[e("p",[n._v("题目：将1234567 变成 1,234,567，即千分位标注")])]),n._v(" "),e("p",[n._v("这个题目可以用算法直接来解，如果候选人使用正则来回答，这样主动展现了自己其他方面的优势，即使不是算法解答出来的，面试官一般也不会太难为他。这道题目可以利用正则的「零宽断言」(?=exp)，意思是它断言自身出现的位置的后面能匹配表达式 exp。数字千分位的特点是，第一个逗号后面数字的个数是3的倍数，正则：/(\\d{3})+$/；第一个逗号前最多可以有 1~3 个数字，正则：/\\d{1,3}/。加起来就是/\\d{1,3}(\\d{3})+$/，分隔符要从前往后加。")]),n._v(" "),e("p",[n._v("对于零宽断言的详细介绍可以阅读「零宽断言」这篇文章。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function exchange(num) {\n    num += ''; //转成字符串\n    if (num.length <= 3) {\n        return num;\n    }\n\n    num = num.replace(/\\d{1,3}(?=(\\d{3})+$)/g, (v) => {\n        console.log(v)\n        return v + ',';\n    });\n    return num;\n}\n\nconsole.log(exchange(1234567));\n")])])]),e("p",[n._v("当然上面讲到的多数是算法题目取巧的方式，下面这个题目是纯正则考查，笔者在面试的过程中碰见过，这里顺便提一下。")]),n._v(" "),e("blockquote",[e("p",[n._v("题目，请写出下面的代码执行结果")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var str = 'google';\nvar reg = /o/g;\nconsole.log(reg.test(str))\nconsole.log(reg.test(str))\nconsole.log(reg.test(str))\n")])])]),e("p",[n._v("代码执行后，会发现，最后一个不是为true，而是false，这是因为reg这个正则有个g，即global全局的属性，这种情况下lastIndex就发挥作用了，可以看下面的代码执行结果就明白了。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("console.log(reg.test(str), reg.lastIndex)\nconsole.log(reg.test(str), reg.lastIndex)\nconsole.log(reg.test(str), reg.lastIndex)\n")])])]),e("p",[n._v("实际开发中也会犯这样的错误，比如为了减少变量每次都重新定义，会把用到的变量提前定义好，这样在使用的时候容易掉进坑里，比如下面代码：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("(function(){\n    const reg = /o/g;\n    function isHasO(str){\n        // reg.lastIndex = 0; 这样就可以避免这种情况\n        return reg.test(str)\n    }\n    var str = 'google';\n    console.log(isHasO(str))\n    console.log(isHasO(str))\n    console.log(isHasO(str))\n}())\n")])])]),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),e("p",[n._v("本小节介绍了数据结构和算法的关系，作为普通的前端也应该学习数据结构和算法知识，并且顺带介绍了下正则匹配。具体来说，本小节梳理了以下几部分数据结构和算法知识点：")]),n._v(" "),e("ul",[e("li",[n._v("经常用到的数据结构有哪些，它们的特点有哪些")]),n._v(" "),e("li",[n._v("递归和枚举是最基础的算法，必须牢牢掌握")]),n._v(" "),e("li",[n._v("排序里面理解并掌握快速排序算法，其他排序算法可以根据个人实际情况大概了解")]),n._v(" "),e("li",[n._v("有序查找用二分查找")]),n._v(" "),e("li",[n._v("遇见不会的算法问题，先缩小数量级，然后分析推导")])]),n._v(" "),e("p",[n._v("当然算法部分还有很多知识，比如动态规划这些算法思想，还有图和树常用到的广度优先搜索和深度优先搜索。这些知识在前端面试和项目中遇见得不多，感兴趣的读者可以在梳理知识点的时候根据个人情况自行决定是否复习。")]),n._v(" "),e("h2",{attrs:{id:"参考网址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考网址","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考网址")]),n._v(" "),e("p",[e("a",{attrs:{href:""}},[n._v("掘进小册")])])])},[],!1,null,null,null);t.default=r.exports}}]);