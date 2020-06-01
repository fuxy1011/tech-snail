# 浏览器缓存策略

## 概要

- 强缓存
- 协商缓存

## 总结

- 先判断浏览器缓存是否过期(通过 Cache-Control/Expires 判断)
- 如果未过期，则强制使用缓存(强缓存)，即返回 200 from cache，通知浏览器使用本地缓存
- 如果已过期，则使用协商缓存。即进行接口请求和服务端协商，如果服务端确认本地文件未修改后，服务端返回 304，通知浏览器使用本地缓存。

## 强缓存

> 强制直接使用本地缓存。浏览器判断本地缓存是否过期，未过期时，就直接使用，无需发起http请求

## 协商缓存

> 发送http和服务端协商后使用本地缓存。浏览器判断本地缓存是否过期，已经过期时，使用协商缓存

## 实际应用

> 协商缓存 方案

- 唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag) =》服务器判断资源是否被修改，
- 最后一次修改时间: Last-Modified(response) & If-Modified-Since (request，上一次返回的Last-Modified)

结果处理:

* 如果一致，则直接返回 304 通知浏览器使用缓存
* 如不一致，则服务端返回新的资源

## 易混淆说明

- 如何区分强缓存和协商缓存？

    * 通过http头部。
    * 强缓存: （```http1.1```）Cache-Control/Max-Age(Max-Age不是一个头部，它是Cache-Control头部的值);（http1.0）Pragma/Expires
    * 协商缓存:（```http1.1```）If-None-Match/E-tag;（http1.0）If-Modified-Since/Last-Modified

- Cache-Control(```http1.1```)：缓存控制头部，有no-cache、max-age等多种取值
- Max-Age(```http1.1```)：服务端配置的，用来控制强缓存，在规定的时间之内，浏览器无需发出请求，直接使用本地缓存，注意，Max-Age是Cache-Control头部的值，不是独立的头部，譬如Cache-Control: max-age=3600，而且它值得是绝对时间，由浏览器自己计算
- Pragma(http1.0)：严格来说，它不属于专门的缓存控制头部，但是它设置no-cache时可以让本地强缓存失效（属于编译控制，来实现特定的指令，主要是因为兼容http1.0，所以以前又被大量应用）
- Expires(http1.0)：服务端配置的，属于强缓存，用来控制在规定的时间之前，浏览器不会发出请求，而是直接使用本地缓存，注意，Expires一般对应服务器端时间，如Expires：Fri, 30 Oct 1998 14:19:41
- (E-tag)If-None-Match/E-tag(```http1.1```)：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-None-Match，而服务端的是E-tag，同样，发出请求后，如果If-None-Match和E-tag匹配，则代表内容未变，通知浏览器使用本地缓存，和Last-Modified不同，E-tag更精确，它是类似于指纹一样的东西，基于FileEtag INode Mtime Size生成，也就是说，只要文件变，指纹就会变，而且没有1s精确度的限制。
- (Last-Modified)If-Modified-Since/Last-Modified(http1.0)：这两个是成对出现的，属于协商缓存的内容，其中浏览器的头部是If-Modified-Since，而服务端的是Last-Modified，它的作用是，在发起请求时，如果If-Modified-Since和Last-Modified匹配，那么代表服务器资源并未改变，因此服务端不会返回资源实体，而是只返回头部，通知浏览器可以使用本地缓存。Last-Modified，顾名思义，指的是文件最后的修改时间，而且只能精确到1s以内

## 注意事项

> Cache-Control的 max-age 优先级高于 Expires

```
Expires使用的是服务器端的时间

但是有时候会有这样一种情况-客户端时间和服务端不同步

那这样，可能就会出问题了，造成了浏览器本地的缓存无用或者一直无法过期

所以一般http1.1后不推荐使用Expires

而Max-Age使用的是客户端本地时间的计算，因此不会有这个问题

因此推荐使用Max-Age。

注意，如果同时启用了Cache-Control与Expires，Cache-Control优先级高
```

> Etag高于Last-Modified

```
Last-Modified：

表明服务端的文件最后何时改变的

* 周期性修改，但内容未变时，会导致缓存失效
* 最小粒度只到 s， s 以内的改动无法检测到

而E-tag：

是一种指纹机制，代表文件相关指纹

* 只有文件变才会变，也只要文件变就会变，
* 也没有精确时间的限制，只要文件一遍，立马E-tag就不一样了

如果同时带有E-tag和Last-Modified，服务端会优先检查E-tag
```

## 参考

[中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)](https://juejin.im/post/5c64d15d6fb9a049d37f9c20)  
[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](http://www.dailichun.com/2018/03/12/whenyouenteraurl.html)