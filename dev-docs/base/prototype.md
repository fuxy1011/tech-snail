# js原型
JavaScript中最重要的一块内容

## 5个重要点

* 所有的引用类型(数组，函数，对象) 都具有 prototype 属性，也就是显示原型
* 所有的实例对象 都具有 __proto__ 属性，也就是隐式原型
* 所有的构造函数都具有 prototype 属性
* 所有的实例对象的 __proto__ 属性 指向 它对应构造函数的 prototype 属性
* 当实例对象中找不到方法或属性的时候，会去它对应构造函数的 prototype 属性上 不断寻找，知道 Object.prototype为止。

## 原型链
当实例对象找不到方法或属性值时，去构造函数的 prototype 属性上 不断向上查找所形成的链式结构就是 原型链

```javascript
//以下是原型链实例
function Foo() {
	this.name = 'foo';
}

Foo.prototype.call = function() {
	console.log("call");
}

function Bar() {
	Foo.call(this);
}

var bar = new Bar();
console.log(bar.name);//会在原型链上找到name，输出foo
```

## instanceof
检测是否在原型链上

## 面试题
跟原型相关的面试题

```javascript
function A(){
}

function B(a){
　this.a = a;
}

function C(a){
　　if(a){
　　　this.a = a;
　　}
}

A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;
console.log(new A().a);
console.log(new B().a);
console.log(new C(2).a);
```

## 参考网址

[关于js原型的面试题](https://www.cnblogs.com/momo798/p/5903921.html)  





