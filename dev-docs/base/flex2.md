# flex布局

布局的传统解决方案基于盒子模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中（下文会专门讲解）就不容易实现。在目前主流的移动端页面中，使用 flex 布局能更好地完成需求，因此 flex 布局的知识是必须要掌握的。

## 基本使用

任何一个容器都可以使用 flex 布局，代码也很简单。

```html
<style type="text/css">
    .container {
      display: flex;
    }
    .item {
        border: 1px solid #000;
        flex: 1;
    }
</style>

<div class="container">
    <div class="item">aaa</div>
    <div class="item" style="flex: 2">bbb</div>
    <div class="item">ccc</div>
    <div class="item">ddd</div>
</div>
```

注意，第三个 div 的flex: 2，其他的 div 的flex: 1，这样第二个 div 的宽度就是其他的 div 的两倍。

## 设计原理

设置了display: flex的元素，我们称为“容器”（flex container），其所有的子节点我们称为“成员”（flex item）。容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。


将以上文字和图片结合起来，再详细看一遍，这样就能理解 flex 的设计原理，才能更好地实际使用。

## 设置主轴的方向
flex-direction可决定主轴的方向，有四个可选值：

* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

```css
.box {
  flex-direction: column-reverse| column | row | row-reverse;
}
```

以上代码设置的主轴方向，将依次对应下图：


## 设置主轴的对齐方式

justify-content属性定义了项目在主轴上的对齐方式，值如下：

* flex-start（默认值）：向主轴开始方向对齐。
* flex-end：向主轴结束方向对齐。
* center： 居中。
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

```css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

## 交叉轴的对齐方式

align-items属性定义项目在交叉轴上如何对齐，值如下：

* flex-start：交叉轴的起点对齐。
* flex-end：交叉轴的终点对齐。
* center：交叉轴的中点对齐。
* baseline: 项目的第一行文字的基线对齐。
* stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

```css
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

## 参考网址
[掘进小册]()