# 继承
面向对象的3大特性:封装，继承，多态

## 实现继承的几种方式
套路不同，各有优缺点，迭代调优

### 方式1
构造函数继承

```javascript
function Parent() {
	this.name = 'parent';
	this.books = [1,2,3];
}

function Child() {
	Parent.call(this);
	this.type = 'child';
}

var foo = new Child(); 
```

### 方式2
原型链继承

```javascript
function Parent() {
	this.name = 'parent';
	this.books = [1,2,3];
}

Parent.prototype.output = function () {
	console.log('parent output');
}

function Child() {
	this.type = 'child';
}

Child.prototype = new Parent();

var foo = new Child();
```

### 方式3
组合继承

```javascript
function Parent() {
	this.name = 'parent';
	this.books = [1,2,3];
}

Parent.prototype.output = function() {
	console.log('parent output')
}

function Child() {
	Parent.call(this);
	this.type = 'child';
}

Child.prototype = new Parent();

var foo = new Child();
```

### 方式4
组合继承优化(父类构造函数执行2次)

```javascript
function Parent() {
	this.name = 'parent';
	this.books = [1,2,3];
}

Parent.prototype.output = function() {
	console.log('parent output');
}

function Child() {
	Parent.call(this);
	this.type = 'child';
}

Child.prototype = Parent.prototype;

var foo = new Child();

```

### 方式5
寄生组合继承

```javascript
function Parent() {
	this.name = 'parent';
	this.books = [1,2,3];
}

Parent.prototype.output = function() {
	console.log('parent output');
}

function Child() {
	Parent.call(this);
	this.type = 'child';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var foo = new Child();
```


