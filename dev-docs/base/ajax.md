# ajax
客户端与服务端通信

## 手写一个基本的ajax
具备了通信交互动态的能力，通信的开端，同时也是插件中通信部分的常用的封装

```javascript
function myAjax(options) {
	var xhr = new XMLHttpRequest();
	xhr.open(options.url, options.method);
	xhr.onhashchange = function() {
		if(xhr.readystate === 4 && xhr.status === 200) {
			options.success(xhr.responseText);
		} else {
			options.error('error');
		}
	};
	xhr.send(null);
}
```

## fetch
fetch作为新的API方法，可以不受浏览器安全的限制

```javascript
fetch({
	url: _url,
	method: _method,
	data: _data,
	success: function() {
		console.log('success');
	},
	error: function() {
		console.log('error');
	}
})
```

## jQuery 中的通信用法
jQuery作为最常用的库，用法如何呢

```javascript
$.ajax({
	url: _url,
	method: _method,
	data: _data,
	success: function() {
		console.log('success');
	},
	error: function() {
		console.log('error');
	}
})
```

## $http
angularjs中通信的服务

```javascript
$http({
	url: _url,
	method: _method,
	data: _data,
	success: function() {
		console.log('success');
	},
	error: function() {
		console.log('error');
	}
})
```

## axios
React, Vue 中常用的通信方法

```javascript
axios({
	url: _url,
	method: _method,
	data: _data,
	success: function() {
		console.log('success');
	},
	error: function() {
		console.log('error');
	}
})
```
------

::: tip
以下是拓展，针对于 异步请求 来说
:::


## Promise
解决异步请求中的回调地域问题

```javascript
const ajax = new Promise((resolve, reject) =>  {
	//处理异步请求
	$.ajax({
		url: _url,
		method: _method,
		data: _data,
		success: function() {
			console.log('success');
			resolve('success');
		},
		error: function() {
			console.log('error');
			reject('error');
		}
	})
})
```

## Redux-saga
react的状态管理中对于异步请求的处理

```javascript
function* login() {
	try {
		const res = yield axios.get(_url);
		const action = loginSuccessAction(res.data);
		yield put(action);//相当于dispatch
	} catch(e) {
		console.log('请求失败', e);
		const action = loginErrorAction();
		yield put(action);
	}
}
```










