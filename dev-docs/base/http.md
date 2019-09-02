# HTTP

## 1.从输入 URL 到页面加载完成的过程

* 首先做 DNS 查询，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来
* 接下来是 TCP 握手，应用层会下发数据给传输层，这里 TCP 协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP 地址，并且指示了数据传输中如何跳转路由器。然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了
* TCP 握手结束后会进行 TLS 握手，然后就开始正式的传输数据
* 数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务端会响应一个 HTML 文件
* 首先浏览器会判断状态码是什么，如果是 200 那就继续解析，如果 400 或 500 的话就会报错，如果 300 的话会进行重定向，这里会有个重定向计数器，避免过多次的重定向，超过次数也会报错
* 浏览器开始解析文件，如果是 gzip 格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件
* 文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。如果遇到 script 标签的话，会判断是否存在 async 或者 defer ，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML 解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS 执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0 协议的话会极大的提高多图的下载效率。
* 初始的 HTML 被完全加载和解析后会触发 DOMContentLoaded 事件
CSSOM 树和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定页面元素的布局、样式等等诸多方面的东西
* 在生成 Render 树的过程中，浏览器就开始调用 GPU 绘制，合成图层，将内容显示在屏幕上了

## 2.HTTP 报文结构

报文一般包括了：通用头部，请求/响应头部，请求/响应体

通用字段	作用
* Cache-Control	控制缓存的行为
* Connection	浏览器想要优先使用的连接类型，比如 keep-alive
* Date	创建报文时间
* Pragma	报文指令
* Via	代理服务器相关信息
* Transfer-Encoding	传输编码方式
* Upgrade	要求客户端升级协议
* Warning	在内容中可能存在错误

请求字段	作用
* Accept	能正确接收的媒体类型
* Accept-Charset	能正确接收的字符集
* Accept-Encoding	能正确接收的编码格式列表
* Accept-Language	能正确接收的语言列表
* Expect	期待服务端的指定行为
* From	请求方邮箱地址
* Host	服务器的域名
* If-Match	两端资源标记比较
* If-Modified-Since	本地资源未修改返回 304（比较时间）
* If-None-Match	本地资源未修改返回 304（比较标记）
* User-Agent	客户端信息
* Max-Forwards	限制可被代理及网关转发的次数
* Proxy-Authorization	向代理服务器发送验证信息
* Range	请求某个内容的一部分
* Referer	表示浏览器所访问的前一个页面
* TE	传输编码方式

响应字段	作用
* Accept-Ranges	是否支持某些种类的范围
* Age	资源在代理缓存中存在的时间
* ETag	资源标识
* Location	客户端重定向到某个 URL
* Proxy-Authenticate	向代理服务器发送验证信息
* Server	服务器名字
* WWW-Authenticate	获取资源需要的验证信息

实体字段	作用
* Allow	资源的正确请求方式
* Content-Encoding	内容的编码格式
* Content-Language	内容使用的语言
* Content-Length	request body 长度
* Content-Location	返回数据的备用地址
* Content-MD5	Base64加密格式的内容 MD5检验值
* Content-Range	内容的位置范围
* Content-Type	内容的媒体类型
* Expires	内容的过期时间
* Last_modified	内容的最后修改时间

## 3.HTTP 状态码

2XX 成功

* 200 OK，表示从客户端发来的请求在服务器端被正确处理
* 204 No content，表示请求成功，但响应报文不含实体的主体部分
* 205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容
* 206 Partial Content，进行范围请求

3XX 重定向

* 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
* 302 found，临时性重定向，表示资源临时被分配了新的 URL
* 303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源
* 304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
* 307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求

4XX 客户端错误

* 400 bad request，请求报文存在语法错误
* 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
* 403 forbidden，表示对请求资源的访问被服务器拒绝
* 404 not found，表示在服务器上没有找到请求的资源

5XX 服务器错误

* 500 internal sever error，表示服务器端在执行请求时发生了错误
* 501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
* 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

## 4.长连接和短连接

首先看tcp/ip层面的定义：

* 长连接：一个tcp/ip连接上可以连续发送多个数据包，在tcp连接保持期间，如果没有数据包发送，需要双方发检测包以维持此连接，一般需要自己做在线维持（类似于心跳包）

* 短连接：通信双方有数据交互时，就建立一个tcp连接，数据发送完成后，则断开此tcp连接

然后在http层面：

* http1.0中，默认使用的是短连接，也就是说，浏览器没进行一次http操作，就建立一次连接，任务结束就中断连接，譬如每一个静态资源请求时都是一个单独的连接

* http1.1起，默认使用长连接，使用长连接会有这一行Connection: keep-alive，在长连接的情况下，当一个网页打开完成后，客户端和服务端之间用于传输http的tcp连接不会关闭，如果客户端再次访问这个服务器的页面，会继续使用这一条已经建立的连接

## 5.http 2.0

http2.0不是https，它相当于是http的下一代规范（譬如https的请求可以是http2.0规范的）

然后简述下http2.0与http1.1的显著不同点：

* http1.1中，每请求一个资源，都是需要开启一个tcp/ip连接的，所以对应的结果是，每一个资源对应一个tcp/ip请求，由于tcp/ip本身有并发数限制，所以当资源一多，速度就显著慢下来

* http2.0中，一个tcp/ip请求可以请求多个资源，也就是说，只要一次tcp/ip请求，就可以请求若干个资源，分割成更小的帧请求，速度明显提升。

然后简述下http2.0的一些特性：

* 多路复用（即一个tcp/ip连接可以请求多个资源）

* 首部压缩（http头部压缩，减少体积）

* 二进制分帧（在应用层跟传送层之间增加了一个二进制分帧层，改进传输性能，实现低延迟和高吞吐量）

* 服务器端推送（服务端可以对客户端的一个请求发出多个响应，可以主动通知客户端）

* 请求优先级（如果流被赋予了优先级，它就会基于这个优先级来处理，由服务器决定需要多少资源来处理该请求。）

## 6.https

https就是安全版本的http，譬如一些支付等操作基本都是基于https的，因为http请求的安全系数太低了。

简单来看，https与http的区别就是： 在请求前，会建立ssl链接，确保接下来的通信都是加密的，无法被轻易截取分析

一般来说，如果要将网站升级成https，需要后端支持（后端需要申请证书等），然后https的开销也比http要大（因为需要额外建立安全链接以及加密等），所以一般来说http2.0配合https的体验更佳（因为http2.0更快了）

一般来说，主要关注的就是SSL/TLS的握手流程，如下（简述）：

* 1. 浏览器请求建立SSL链接，并向服务端发送一个随机数–Client random和客户端支持的加密方法，比如RSA加密，此时是明文传输。 

* 2. 服务端从中选出一组加密算法与Hash算法，回复一个随机数–Server random，并将自己的身份信息以证书的形式发回给浏览器
（证书里包含了网站地址，非对称加密的公钥，以及证书颁发机构等信息）

* 3. 浏览器收到服务端的证书后
    
    - 验证证书的合法性（颁发机构是否合法，证书中包含的网址是否和正在访问的一样），如果证书信任，则浏览器会显示一个小锁头，否则会有提示
    
    - 用户接收证书后（不管信不信任），浏览会生产新的随机数–Premaster secret，然后证书中的公钥以及指定的加密方法加密`Premaster secret`，发送给服务器。
    
    - 利用Client random、Server random和Premaster secret通过一定的算法生成HTTP链接数据传输的对称加密key-`session key`
    
    - 使用约定好的HASH算法计算握手消息，并使用生成的`session key`对消息进行加密，最后将之前生成的所有信息发送给服务端。 
    
* 4. 服务端收到浏览器的回复

    - 利用已知的加解密方式与自己的私钥进行解密，获取`Premaster secret`
    
    - 和浏览器相同规则生成`session key`
    
    - 使用`session key`解密浏览器发来的握手消息，并验证Hash是否与浏览器发来的一致
    
    - 使用`session key`加密一段握手消息，发送给浏览器
    
* 5. 浏览器解密并计算握手消息的HASH，如果与服务端发来的HASH一致，此时握手过程结束，
之后所有的https通信数据将由之前浏览器生成的session key并利用对称加密算法进行加密

## 7.http缓存

缓存可以简单的划分成两种类型：强缓存（200 from cache）与协商缓存（304）

区别简述如下：

* 强缓存（200 from cache）时，浏览器如果判断本地缓存未过期，就直接使用，无需发起http请求

* 协商缓存（304）时，浏览器会向服务端发起http请求，然后服务端告诉浏览器文件未改变，让浏览器使用本地缓存

--------

上述提到了强缓存和协商缓存，那它们是怎么区分的呢？

答案是通过不同的http头部控制

属于强缓存控制的：

* （http1.1）Cache-Control/Max-Age
* （http1.0）Pragma/Expires

注意：Max-Age不是一个头部，它是Cache-Control头部的值

属于协商缓存控制的：

* （http1.1）If-None-Match/E-tag
* （http1.0）If-Modified-Since/Last-Modified

可以看到，上述有提到http1.1和http1.0，这些不同的头部是属于不同http时期的

再提一点，其实HTML页面中也有一个meta标签可以控制缓存方案-Pragma

```html
<META HTTP-EQUIV="Pragma" CONTENT="no-cache" />
```

不过，这种方案还是比较少用到，因为支持情况不佳，譬如缓存代理服务器肯定不支持，所以不推荐

头部的区别

首先明确，http的发展是从http1.0到http1.1

而在http1.1中，出了一些新内容，弥补了http1.0的不足。

http1.0中的缓存控制：

* Pragma：严格来说，它不属于专门的缓存控制头部，但是它设置no-cache时可以让本地强缓存失效（属于编译控制，来实现特定的指令，主要是因为兼容http1.0，所以以前又被大量应用）

* Expires：服务端配置的，属于强缓存，用来控制在规定的时间之前，浏览器不会发出请求，而是直接使用本地缓存，注意，Expires一般对应服务器端时间，如Expires：Fri, 30 Oct 1998 14:19:41

* If-Modified-Since/Last-Modified：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-Modified-Since，而服务端的是Last-Modified，它的作用是，在发起请求时，如果If-Modified-Since和Last-Modified匹配，那么代表服务器资源并未改变，因此服务端不会返回资源实体，而是只返回头部，通知浏览器可以使用本地缓存。Last-Modified，顾名思义，指的是文件最后的修改时间，而且只能精确到1s以内

http1.1中的缓存控制：

* Cache-Control：缓存控制头部，有no-cache、max-age等多种取值

* Max-Age：服务端配置的，用来控制强缓存，在规定的时间之内，浏览器无需发出请求，直接使用本地缓存，注意，Max-Age是Cache-Control头部的值，不是独立的头部，譬如Cache-Control: max-age=3600，而且它值得是绝对时间，由浏览器自己计算

* If-None-Match/E-tag：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-None-Match，而服务端的是E-tag，同样，发出请求后，如果If-None-Match和E-tag匹配，则代表内容未变，通知浏览器使用本地缓存，和Last-Modified不同，E-tag更精确，它是类似于指纹一样的东西，基于FileEtag INode Mtime Size生成，也就是说，只要文件变，指纹就会变，而且没有1s精确度的限制。

## 8.http缓存 细节

::: tip
Max-Age相比Expires？

Expires使用的是服务器端的时间

但是有时候会有这样一种情况-客户端时间和服务端不同步

那这样，可能就会出问题了，造成了浏览器本地的缓存无用或者一直无法过期

所以一般http1.1后不推荐使用Expires

而Max-Age使用的是客户端本地时间的计算，因此不会有这个问题

因此推荐使用Max-Age。

注意，如果同时启用了Cache-Control与Expires，Cache-Control优先级高
:::

::: tip
E-tag相比Last-Modified？

Last-Modified：

表明服务端的文件最后何时改变的

它有一个缺陷就是只能精确到1s，

然后还有一个问题就是有的服务端的文件会周期性的改变，导致缓存失效

而E-tag：

是一种指纹机制，代表文件相关指纹

只有文件变才会变，也只要文件变就会变，

也没有精确时间的限制，只要文件一遍，立马E-tag就不一样了

如果同时带有E-tag和Last-Modified，服务端会优先检查E-tag
:::

## 9.请求方式

* Get:
* Post:
* Put
* Delete:

## 10.Get和Post的区别

* Get 请求能缓存，Post 不能
* Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。
* Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术
* URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
* Post 支持更多的编码类型且不对数据类型限制

## 参考网址

[前端进阶之道](https://yuchengkai.cn/docs/cs/#从输入-url-到页面加载完成的过程)  
[一次完整的HTTP请求过程](https://www.cnblogs.com/xuzekun/p/7527736.html)  
[HTTP 状态码的分类，各状态码的意义](https://blog.csdn.net/mydistance/article/details/83386901)   
[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)  
