# 190901
->目标: js-运行机制
=>时间:
预计:30分钟
实际:
30+10+2+5=47分钟
->不是很有利的掌控
失控比例:(30-47)/30 = 57%
多花了 57% 时间
下次目标:尽可能的缩短时间，减少发散，几种注意力。
思考:预估的时间是否靠谱?


遇到的问题

1.行文要不要来个先后顺序(不要，觉得重要的就写上去，理解后再整理)
2.怎么判断是否重要(关联性大的，核心的就重要，关联性小的先不写)
3.如何判断关联性，核心(举个例子韭菜鸡蛋盖饭，如果没了韭菜和鸡蛋还是韭菜鸡蛋盖饭吗?韭菜和鸡蛋就是强相关以及核心。其他的葱姜蒜只是辅料，还有汽水啥的就先不写)
4.周围环境哈哈大笑或者楼上马桶声音的干扰思路庆旭(带上耳机放开纯音乐)
5.微信群干扰(退掉微信)
6.运行机制的文件命名(简单就叫 js-run-origin.md就好。最小意志力)
7.摘录东西多，只留了3分钟整理
8.刚写的文章链接没有生效(路径问题, 没解决的聊)
9.延时10分钟解决路径问题及接下来的问题(绝对路径不行，不带.md不行，相对路径试试。)
10.全部删掉内容，随便写点。可以显示(证明是内容问题，一点点的粘贴。控制台出现编译错误哦)
11.<p>tip:
  123|  在浏览器渲染的时候遇到<script>
     |             ^^^^^^^^
  tag <p> has no matching end tag（

  错误代码:
  	>tip:
    在浏览器渲染的时候遇到<script>标签，就会停止GUI的渲染，然后js引擎线程开始工作，执行里面的js代码，等js执行完毕，js引擎线程停止工作，GUI继续渲染下面的内容。所以如果js执行时间太长就会造成页面卡顿的情况，这也是后面性能优化的点。

    更正(注意要换个行):

    >tip:

    在浏览器渲染的时候遇到<script>标签，就会停止GUI的渲染，然后js引擎线程开始工作，执行里面的js代码，等js执行完毕，js引擎线程停止工作，GUI继续渲染下面的内容。所以如果js执行时间太长就会造成页面卡顿的情况，这也是后面性能优化的点。


  ）
12.页面会刷新跳转( 带上.md后缀不跳转了)
13.想将 运行机制放到左侧导航栏上(修改vuepress配置文件 - 延迟2分钟，直接在sidebar上加上链接)
14.要不要展开更细层级导航(算了，不展开了。让自己想。时间也到了。修改sidbardepth)


总结(又花了5分钟左右):
1.时间还是有点少。思想太容易发散了。导致后面收尾工作来不及时间做。
2.收尾工作(查看页面显示；纠正页面不显示问题；回顾页面内容正确与否；整理过程中的问题；归档;代码提交)