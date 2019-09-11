# ES6
标准，协议，规范~   
基础中的基础了。

## 字符串的扩展
基础数据类型-string

### 字符的 Unicode 表示法
至此, JavaScript 共有 6 种方法可以表示一个字符

```javascript
'\z' === 'z' //true
'\172' === 'z' //true
'\x7A' === 'z' //true
'\u007A' === 'z' //true
'\u{7A}' === 'z' //true
```

### codePointAt()
正确处理 4 个字节储存的字符

```javascript
var s = '𠮷a';

s.codePointAt(0);// 134071
s.codePointAt(1);// 57271
s.codePointAt(2);// 97
```

## 数值的扩展
基础数据类型-number

## 数组的扩展
引用数据类型-array

## 对象的扩展
引用数据类型-object

## 函数的扩展
引用数据类型-function

## Symbol
基础数据类型-symbol

## Set 和 Map 数据结构

## 变量的解构赋值

## let 和 const
块级作用域

## 正则的扩展
了解即可

## Proxy

## Promise

## Generator

## Reflect

## Iterator 和 for...of 循环

## async 函数

## Class
class语法糖实现继承

## Module

## ArrayBuffer

## 修饰器
