# js闭包
前端面试，几乎逢面必考题

## 什么是闭包
函数A中包含函数B，函数B中使用了未声明定义的自由变量x，同时函数A返回了函数B，此时就形成了闭包

## 自由变量
函数中使用了未定义的变量的就叫做自由变量

## 父级作用域
函数中使用了自由变量，在自由变量输出的时候，会由内到外一级一级向上查找这个自由变量的定义。

注意点:

* 自由变量的值是在父级作用域定义时确定的，而不是执行时确定的
* 执行时可以通过赋值改变自由变量的值。

## 写一个闭包

```javascript
function A () {
	var x = 100;
	function B() {
		console.log(x);
	}
	return B;
}
x = 200;
A()();//此时的值为100
```

## 常见闭包面试题

```javascript
//输出1到9
for(var i = 1; i < 10; i++) {
	setTimeout(function() {
		console.log(i);//实际运行结果输出9次10
	})
}

//修改方法
/**
1、let
for(let i = 1; i < 10; i++) {
	setTimeout(function() {
		console.log(i);//结果正常输出1到9
	})
}

2、闭包
for(var i = 1; i < 10; i++) {
	(function(i) {
		setTimeout(function() {
			console.log(i);//结果正常输出1到9
		})
	})(i);
}
*/
```

## 用途
闭包的两个用途

* 能够保留访问其他作用域中的变量值
* 作为参数使用


