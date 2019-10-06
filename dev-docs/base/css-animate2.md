# CSS3 动画

CSS3 可以实现动画，代替原来的 Flash 和 JavaScript 方案。

首先，使用@keyframes定义一个动画，名称为testAnimation，如下代码，通过百分比来设置不同的 CSS 样式，规定动画的变化。所有的动画变化都可以这么定义出来。

```
@keyframes testAnimation
{
    0%   {background: red; left:0; top:0;}
    25%  {background: yellow; left:200px; top:0;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0; top:200px;}
    100% {background: red; left:0; top:0;}
}
```

然后，针对一个 CSS 选择器来设置动画，例如针对div元素设置动画，如下：

```
div {
    width: 100px;
    height: 50px;
    position: absolute;

    animation-name: myfirst;
    animation-duration: 5s;
}
```

animation-name对应到动画名称，animation-duration是动画时长，还有其他属性：

* animation-timing-function：规定动画的速度曲线。默认是ease
* animation-delay：规定动画何时开始。默认是 0
* animation-iteration-count：规定动画被播放的次数。默认是 1
* animation-direction：规定动画是否在下一周期逆向地播放。默认是normal
* animation-play-state ：规定动画是否正在运行或暂停。默认是running
* animation-fill-mode：规定动画执行之前和之后如何给动画的目标应用，默认是none，保留在最后一帧可以用forwards

> 题目：CSS 的transition和animation有何区别？

首先transition和animation都可以做动效，从语义上来理解，transition是过渡，由一个状态过渡到另一个状态，比如高度100px过渡到200px；而animation是动画，即更专业做动效的，animation有帧的概念，可以设置关键帧keyframe，一个动画可以由多个关键帧多个状态过渡组成，另外animation也包含上面提到的多个属性。


## 参考网址
[掘进小册]()