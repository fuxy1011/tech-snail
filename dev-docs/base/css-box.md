# 盒子模型

## 1 四大金刚

### 1.1 content

对于非替换元素如div,其content就是div内部的元素。 而对于替换元素，其content就是可替换部分的内容。

CSS中的content属性主要用于伪元素:before/:after中，除了做字体库或少写个div，对于一般开发来说并无卵用

### 1.2 padding

padding是四大金刚中最稳定的了，少见有什么异常。尽管如此还是有些需要注意的地方：

* 大部分情况下我们会将元素重置为box-sizing: border-box，宽高的计算是包含了padding的，给人一种padding也是content box一部分的感觉，好像line-height属性也作用于padding上。但实际上，元素真正的内容的宽高只是content 
* padding不可为负值，但是可以为百分比值。为百分比时水平和垂直方向的padding都是相对于父级元素宽度计算的。将一个div设为padding: 100%就能得到一个正方形，padding: 10% 50%可以得到一个宽高比 5:1 的矩形。
* padding配合background-clip属性，可以制作一些特殊形状：

### 1.3 margin

* 作为外边距，margin属性并不会参与盒子宽度的计算，但通过设置margin为负值，却能改变元素水平方向的尺寸：

此时div元素的宽度是比父级元素的宽度大200px的。但是这种情况只会发生在元素是流布局的时候，即元素width是默认的auto并且可以撑满一行的时候。如果元素设定了宽度，或者元素设置了float: left / position: absolute这样的属性改变了流体布局，那么margin为负也无法改变元素的宽度了。

* 块级元素的垂直方向会发生margin合并，存在以下三种场景：

相邻兄弟元素之间margin合并；
父元素margin-top和子元素margin-top，父元素margin-bottom和子元素margin-bottom；
空块级元素自身的margin-top和margin-botom合并，例子如下。

* margin的百分比值跟padding一样，垂直方向的margin和水平方向上的一样都是相对于父元素宽度计算的。

```javascript
<div class="box">
  <div></div>
</div>
<style>
  .box{
    overflow: hidden;
    background-color: lightblue;
  }
  .box > div{
    margin: 50%;
  }
</style>
```

复制代码此时 .box 是一个宽高比 2:1 的矩形，因为空块级元素自身的垂直方向的margin发生了合并。
这里父元素设置overflow: hidden是利用 bfc 的特性阻止子元素的margin和父元素合并，换成其他 bfc 特性或者设置 1px 的 border / padding都是可以达到效果的。

* margin: auto能在块级元素设定宽高之后自动填充剩余宽高。margin: auto自动填充触发的前提条件是元素在对应的水平或垂直方向具有自动填充特性，显然默认情况下块级元素的高度是不具备这个条件的。典型应用是块级元素水平局中的实现：

```css
display: block;
width: 200px;
margin: 0 auto;
```

auto的特性是，如果两侧都是auto，则两侧均分剩余宽度；如果一侧margin是固定的，另一侧是auto，则这一侧auto为剩余宽度.

除了水平方向，垂直方向的margin也能实现垂直居中，但是需要元素在垂直方向具有自动填充特性，而这个特性可以利用position实现：

### 1.4 border

border主要作用是做边框。border-style属性的值有none/solid/dashed/dotted/double等，基本看名字就能猜出什么来了:

border-width属性的默认值是3px，是为了照顾小弟border-style: double，你懂的。值得注意的是，border-color默认是跟随字体的颜色，相当于默认设置了border-color: currentColor一样。


## 2 弹性布局

弹性布局是指display: flex或display: inline-flex的布局。注意，设为弹性布局以后，子元素的float、clear、vertical-align属性都会失效

## 3 网格布局

网格布局（Grid）是最强大的 CSS 布局方案。注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效

## 4 可视化格式模型

这一部分内容很多参考《精通CSS-高级Web标准解决方案》以及参考来源

前面提到了整体的渲染概念，但实际上文档树中的元素是按什么渲染规则渲染的，是可以进一步展开的，此部分内容即： CSS的可视化格式模型

-> CSS的可视化格式模型就是规定了浏览器在页面中如何处理文档树

### 4.1 关键字

包含块（Containing Block）  
控制框（Controlling Box）  
BFC（Block Formatting Context）  
IFC（Inline Formatting Context）  
定位体系  
浮动  
...  

### 4.2 包含块

一个元素的box的定位和尺寸，会与某一矩形框有关，这个框就称之为包含块。

元素会为它的子孙元素创建包含块，但是，并不是说元素的包含块就是它的父元素，元素的包含块与它的祖先元素的样式等有关系

譬如：

* 根元素是最顶端的元素，它没有父节点，它的包含块就是初始包含块
* static和relative的包含块由它最近的块级、单元格或者行内块祖先元素的内容框（content）创建
* fixed的包含块是当前可视窗口
* absolute的包含块由它最近的position 属性为absolute、relative或者fixed的祖先元素创建
	如果其祖先元素是行内元素，则包含块取决于其祖先元素的direction特性
	如果祖先元素不是行内元素，那么包含块的区域应该是祖先元素的内边距边界

### 4.3 控制框

块级元素和块框以及行内元素和行框的相关概念

#### 4.3.1 块框

块框:

* 块级元素会生成一个块框（Block Box），块框会占据一整行，用来包含子box和生成的内容
* 块框同时也是一个块包含框（Containing Box），里面要么只包含块框，要么只包含行内框（不能混杂），如果块框内部有块级元素也有行内元素，那么行内元素会被匿名块框包围

换句话说:

如果一个块框在其中包含另外一个块框，那么我们强迫它只能包含块框，因此其它文本内容生成出来的都是匿名块框（而不是匿名行内框）

#### 4.3.2 行内框

行内框：

* 一个行内元素生成一个行内框
* 行内元素能排在一行，允许左右有其它元素

#### 4.3.3 display属性的影响

display的几个属性也可以影响不同框的生成：

* block，元素生成一个块框
* inline，元素产生一个或多个的行内框
* inline-block，元素产生一个行内级块框，行内块框的内部会被当作块块来格式化，而此元素本身会被当作行内级框来格式化（这也是为什么会产生BFC）
* none，不生成框，不再格式化结构中，当然了，另一个visibility: hidden则会产生一个不可见的框


#### 4.3.4 小结

总结：

* 如果一个框里，有一个块级元素，那么这个框里的内容都会被当作块框来进行格式化，因为只要出现了块级元素，就会将里面的内容分块几块，每一块独占一行（出现行内可以用匿名块框解决）
* 如果一个框里，没有任何块级元素，那么这个框里的内容会被当成行内框来格式化，因为里面的内容是按照顺序成行的排列

### 4.4 BFC 

FC即格式上下文，它定义框内部的元素渲染规则，比较抽象，譬如

::: tip
FC像是一个大箱子，里面装有很多元素

箱子可以隔开里面的元素和外面的元素（所以外部并不会影响FC内部的渲染）

内部的规则可以是：如何定位，宽高计算，margin折叠等等
:::

->不同类型的框参与的FC类型不同，譬如块级框对应BFC，行内框对应IFC

=>注意，并不是说所有的框都会产生FC，而是符合特定条件才会产生，只有产生了对应的FC后才会应用对应渲染规则

BFC规则：

* 在块格式化上下文中
* 每一个元素左外边与包含块的左边相接触（对于从右到左的格式化，右外边接触右边）
* 即使存在浮动也是如此（所以浮动元素正常会直接贴近它的包含块的左边，与普通元素重合）
* 除非这个元素也创建了一个新的BFC

---------

> 总结几点BFC特点：

* 内部box在垂直方向，一个接一个的放置
* box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠
* BFC区域不会与float box重叠（可用于排版)
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
* 计算BFC的高度时，浮动元素也参与计算（不会浮动坍塌）

---------

> 如何触发BFC？

* 根元素
* float属性不为none
* position为absolute或fixed
* display为inline-block, flex, inline-flex，table，table-cell，table-caption
* overflow不为visible

这里提下，display: table，它本身不产生BFC，但是它会产生匿名框（包含display: table-cell的框），而这个匿名框产生BFC

### 4.5 IFC 

IFC即行内框产生的格式上下文

::: tip
IFC规则

在行内格式化上下文中

框一个接一个地水平排列，起点是包含块的顶部。

水平方向上的 margin，border 和 padding 在框之间得到保留

框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐
:::

行框

包含那些框的长方形区域，会形成一行，叫做行框

行框的宽度由它的包含块和其中的浮动元素决定，高度的确定由行高度计算规则决定

行框的规则：

::: tip
如果几个行内框在水平方向无法放入一个行框内，它们可以分配在两个或多个垂直堆叠的行框中（即行内框的分割）

行框在堆叠时没有垂直方向上的分割且永不重叠

行框的高度总是足够容纳所包含的所有框。不过，它可能高于它包含的最高的框（例如，框对齐会引起基线对齐）

行框的左边接触到其包含块的左边，右边接触到其包含块的右边。
:::


结合补充下IFC规则：

::: tip
浮动元素可能会处于包含块边缘和行框边缘之间

尽管在相同的行内格式化上下文中的行框通常拥有相同的宽度（包含块的宽度），它们可能会因浮动元素缩短了可用宽度，而在宽度上发生变化

同一行内格式化上下文中的行框通常高度不一样（如，一行包含了一个高的图形，而其它行只包含文本）

当一行中行内框宽度的总和小于包含它们的行框的宽，它们在水平方向上的对齐，取决于 `text-align` 特性

空的行内框应该被忽略

即不包含文本，保留空白符，margin/padding/border非0的行内元素，
以及其他常规流中的内容(比如，图片，inline blocks 和 inline tables)，
并且不是以换行结束的行框，
必须被当作零高度行框对待
:::

总结：

* 行内元素总是会应用IFC渲染规则
* 行内元素会应用IFC规则渲染，譬如text-align可以用来居中等
* 块框内部，对于文本这类的匿名元素，会产生匿名行框包围，而行框内部就应用IFC渲染规则
* 行内框内部，对于那些行内元素，一样应用IFC渲染规则
* 另外，inline-block，会在元素外层产生IFC（所以这个元素是可以通过text-align水平居中的），当然，它内部则按照BFC规则渲染

->相比BFC规则来说，IFC可能更加抽象（因为没有那么条理清晰的规则和触发条件）  
->但总的来说，它就是行内元素自身如何显示以及在框内如何摆放的渲染规则，这样描述应该更容易理解



## 参考网址

[撒网要见鱼](https://segmentfault.com/u/dailc)  
[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)  
[深入理解CSS系列（一）：理解CSS的盒子模型](https://www.cnblogs.com/yugege/p/9260563.html)  
[CSS盒子模型](https://baike.baidu.com/item/CSS%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B/9814562?fr=aladdin)  
[前端基础篇之CSS世界](https://juejin.im/post/5ce607a7e51d454f6f16eb3d)  