## 节流防抖

节流和防抖在优化性能起着一定的作用。

### 防抖

防抖应用的场景是频繁操作，比如频繁点击按钮，需要调用接口时，一段时间内执行一次。

```js
const debounce = (fn, wait, im) => {
  let timer = null, cIm = im;

  return (...args) => {
    if(cIm) {
      fn.apply(this, args)
      cIm = false
    }
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    },wait)
  }
}
```

### 节流

节流和防抖都是阻止频繁操作，不同的是`节流`是**每隔一段时间执行一次**，`防抖`是**一段时间内执行一次**

```js
const throttle = (fn, wait) => {
  let timer;
  return (...args) => {
    if(timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait)
  }
}

```

### Lodash 防抖节流

> 源码[入口](https://github.com/lodash/lodash/blob/master/debounce.js#L65)

**debounce**

```js
function debounce(fn, wait, options) {
  
  /* 初始化变量 */
  let lastArgs,   // 上次传递的参数
    lastThis,     // 上次调用时的this
    maxWait,      // 最大的等待时间
    result,       // 回调函数fn执行的返回值
    timerId,      // 定时器id 
    lastCallTime  // 上一次调用 debounce 的时间

  let lastInvokeTime = 0 // 上一次调用回调函数fn的时间
  let leading = false    // 延迟前执行
  let maxing = false     // 是否设置最大等待时间，用于 throttle
  let trailing = true    // 延迟后执行

  // root 是当前执行环境上下文
  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  wait = +wait || 0
  // 处理初始化变量
  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }


  /* 定时器处理函数 */ 

  // 延迟前
  function leadingEdge(time) {}

  // 延迟后回调
  function trailingEdge(time) {}

  // 调用回调函数fn
  function invokeFunc(time) {}

  // 判断是否当前需要执行fn
  function shouldInvoke(time) {}




  // 计算需要等待的时间
  function remainingWait(time) {}

  // 定时器回调
  function timerExpired() {}

  // 开始定时器
  function startTimer(pendingFunc, wait) {}

  // 取消定时器
  function cancelTimer() {}



  /* 外部接口 */

  // 取消延迟
  function cancel() {}

  // 立即调用
  function flush() {}

  // 是否在定时器中
  function pending() {}


  /* 入口 */

  function debounced() {}


  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;

  return debounced
}
export {debounce}

```
