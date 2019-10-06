# 变量
JavaScript 是一种弱类型脚本语言，所谓弱类型指的是定义变量时，不需要什么类型，在程序运行过程中会自动判断类型。

ECMAScript 中定义了 6 种原始类型：

* Boolean
* String
* Number
* Null
* Undefined
* Symbol（ES6 新定义）

注意: 原始类型不包含 Object。

> 题目：类型判断用到哪些方法？

## typeof

typeof xxx得到的值有以下几种类型：undefined boolean number string object function、symbol ，比较简单，不再一一演示了。这里需要注意的有三点：

* typeof null结果是object ，实际这是typeof的一个bug，null是原始值，非引用类型
* typeof [1, 2]结果是object，结果中没有array这一项，引用类型除了function其他的全部都是object
* typeof Symbol() 用typeof获取symbol类型的值得到的是symbol，这是 ES6 新增的知识点

## instanceof
用于实例和构造函数的对应。例如判断一个变量是否是数组，使用typeof无法判断，但可以使用[1, 2] instanceof Array来判断。因为，[1, 2]是数组，它的构造函数就是Array。同理：

```js
function Foo(name) {
    this.name = name
}
var foo = new Foo('bar')
console.log(foo instanceof Foo) // true
```

> 题目：值类型和引用类型的区别

## 值类型 vs 引用类型
除了原始类型，ES 还有引用类型，上文提到的typeof识别出来的类型中，只有object和function是引用类型，其他都是值类型。

根据 JavaScript 中的变量类型传递方式，又分为值类型和引用类型，值类型变量包括 Boolean、String、Number、Undefined、Null，引用类型包括了 Object 类的所有，如 Date、Array、Function 等。在参数传递方式上，值类型是按值传递，引用类型是按共享传递。

下面通过一个小题目，来看下两者的主要区别，以及实际开发中需要注意的地方。

```js
// 值类型
var a = 10
var b = a
b = 20
console.log(a)  // 10
console.log(b)  // 20
```

上述代码中，a b都是值类型，两者分别修改赋值，相互之间没有任何影响。再看引用类型的例子：

```js
// 引用类型
var a = {x: 10, y: 20}
var b = a
b.x = 100
b.y = 200
console.log(a)  // {x: 100, y: 200}
console.log(b)  // {x: 100, y: 200}
```

上述代码中，a b都是引用类型。在执行了b = a之后，修改b的属性值，a的也跟着变化。因为a和b都是引用类型，指向了同一个内存地址，即两者引用的是同一个值，因此b修改属性时，a的值随之改动。

再借助题目进一步讲解一下。

> 说出下面代码的执行结果，并分析其原因。

```js
function foo(a){
    a = a * 10;
}
function bar(b){
    b.value = 'new';
}
var a = 1;
var b = {value: 'old'};
foo(a);
bar(b);
console.log(a); // 1
console.log(b); // value: new
```

通过代码执行，会发现：

* a的值没有发生改变
* 而b的值发生了改变

这就是因为Number类型的a是按值传递的，而Object类型的b是按共享传递的。

JS 中这种设计的原因是：按值传递的类型，复制一份存入栈内存，这类类型一般不占用太多内存，而且按值传递保证了其访问速度。按共享传递的类型，是复制其引用，而不是整个复制其值（C 语言中的指针），保证过大的对象等不会因为不停复制内容而造成内存的浪费。

引用类型经常会在代码中按照下面的写法使用，或者说容易不知不觉中造成错误！

```js
var obj = {
    a: 1,
    b: [1,2,3]
}
var a = obj.a
var b = obj.b
a = 2
b.push(4)
console.log(obj, a, b)
```

虽然obj本身是个引用类型的变量（对象），但是内部的a和b一个是值类型一个是引用类型，a的赋值不会改变obj.a，但是b的操作却会反映到obj对象上。

## 参考网址
[掘进小册]()

