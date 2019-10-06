# 定位position

position 用于网页元素的定位，可设置 static/relative/absolute/fixed 这些值，其中 static 是默认值，不用介绍。

> 题目：relative 和 absolute 有何区别？

## relative

相对定位 relative 可以用一个例子很轻松地演示出来。例如我们写 4 个 p ，出来的样子大家不用看也能知道。

```html
<p>第一段文字</p>
<p>第二段文字</p>
<p>第三段文字</p>
<p>第四段文字</p>
```

然后我们在第三个 p 上面，加上position:relative并且设置left和top值，看这个 p 有什么变化。

```html
<p>第一段文字</p>
<p>第二段文字</p>
<p style="position:relative; top: 10px; left: 10px">第三段文字</p>
<p>第四段文字</p>
```

上图中，大家应该要识别出两个信息（相信大部分人会忽略第二个信息）

* 第三个 p 发生了位置变化，分别向右向下移动了10px；
* 其他的三个 p 位置没有发生变化，这一点也很重要。

可见，relative 会导致自身位置的相对变化，而不会影响其他元素的位置、大小。这是 relative 的要点之一。还有第二个要点，就是 relative 产生一个新的定位上下文。下文有关于定位上下文的详细介绍，这里可以先通过一个例子来展示一下区别：


注意看这两图的区别，下文将有解释。

## absolute

还是先写一个基本的 demo。

```html
<p>第一段文字</p>
<p>第二段文字</p>
<p style="background: yellow">第三段文字</p>
<p>第四段文字</p>
```

然后，我们把第三个 p 改为position:absolute;，看看会发生什么变化。


从上面的结果中，我们能看出几点信息：

* absolute 元素脱离了文档结构。和 relative 不同，其他三个元素的位置重新排列了。只要元素会脱离文档结构，它就会产生破坏性，导致父元素坍塌。（此时你应该能立刻想起来，float 元素也会脱离文档结构。）
* absolute 元素具有“包裹性”。之前 p 的宽度是撑满整个屏幕的，而此时 p 的宽度刚好是内容的宽度。
* absolute 元素具有“跟随性”。虽然 absolute 元素脱离了文档结构，但是它的位置并没有发生变化，还是老老实实地呆在它原本的位置，因为我们此时没有设置 top、left 的值。
* absolute 元素会悬浮在页面上方，会遮挡住下方的页面内容。

最后，通过给 absolute元素设置 top、left 值，可自定义其内容，这个都是平时比较常用的了。这里需要注意的是，设置了 top、left 值时，元素是相对于最近的定位上下文来定位的，而不是相对于浏览器定位。

## fixed

其实 fixed 和 absolute 是一样的，唯一的区别在于：absolute 元素是根据最近的定位上下文确定位置，而 fixed 根据 window （或者 iframe）确定位置。

> 题目：relative、absolute 和 fixed 分别依据谁来定位？

## 定位上下文

relative 元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。


fixed 元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。


absolute 的定位相对于前两者要复杂许多。如果为 absolute 设置了 top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了position:relative/absolute/fixed的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。如下两个图所示：

## 参考网址
[掘进小册]()
