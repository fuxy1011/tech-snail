# 原型和原型链

JavaScript 是基于原型的语言，原型理解起来非常简单，但却特别重要，下面还是通过题目来理解下JavaScript 的原型概念。

> 题目：如何理解 JavaScript 的原型

对于这个问题，可以从下面这几个要点来理解和回答，下面几条必须记住并且理解

* 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（null除外）
* 所有的引用类型（数组、对象、函数），都有一个__proto__属性，属性值是一个普通的对象
* 所有的函数，都有一个prototype属性，属性值也是一个普通的对象
* 所有的引用类型（数组、对象、函数），__proto__属性值指向它的构造函数的prototype属性值

通过代码解释一下，大家可自行运行以下代码，看结果。

```js
// 要点一：自由扩展属性
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn () {}
fn.a = 100;

// 要点二：__proto__
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);

// 要点三：函数有 prototype
console.log(fn.prototype)

// 要点四：引用类型的 __proto__ 属性值指向它的构造函数的 prototype 属性值
console.log(obj.__proto__ === Object.prototype)
```

## 原型
先写一个简单的代码示例。

```js
// 构造函数
function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    alert(this.name)
}
// 创建示例
var f = new Foo('zhangsan')
f.printName = function () {
    console.log(this.name)
}
// 测试
f.printName()
f.alertName()
```

执行printName时很好理解，但是执行alertName时发生了什么？这里再记住一个重点 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它的构造函数的prototype）中寻找，因此f.alertName就会找到Foo.prototype.alertName。

那么如何判断这个属性是不是对象本身的属性呢？使用hasOwnProperty，常用的地方是遍历一个对象的时候。

```js
var item
for (item in f) {
    // 高级浏览器已经在 for in 中屏蔽了来自原型的属性，但是这里建议大家还是加上这个判断，保证程序的健壮性
    if (f.hasOwnProperty(item)) {
        console.log(item)
    }
}
```

> 题目：如何理解 JS 的原型链

## 原型链

还是接着上面的示例，如果执行f.toString()时，又发生了什么？

```js
// 省略 N 行

// 测试
f.printName()
f.alertName()
f.toString()
```

因为f本身没有toString()，并且f.__proto__（即Foo.prototype）中也没有toString。这个问题还是得拿出刚才那句话——当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它的构造函数的prototype）中寻找。

如果在f.__proto__中没有找到toString，那么就继续去f.__proto__.__proto__中寻找，因为f.__proto__就是一个普通的对象而已嘛！

* f.__proto__即Foo.prototype，没有找到toString，继续往上找
* f.__proto__.__proto__即Foo.prototype.__proto__。Foo.prototype就是一个普通的对象，因此Foo.prototype.__proto__就是Object.prototype，在这里可以找到toString
* 因此f.toString最终对应到了Object.prototype.toString

这样一直往上找，你会发现是一个链式的结构，所以叫做“原型链”。如果一直找到最上层都没有找到，那么就宣告失败，返回undefined。最上层是什么 —— Object.prototype.__proto__ === null

## 原型链中的this

所有从原型或更高级原型中得到、执行的方法，其中的this在执行时，就指向了当前这个触发事件执行的对象。因此printName和alertName中的this都是f。


## 参考网址
[掘进小册]()





