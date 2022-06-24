# 实现 forEach

根据forEach的定义，实现其`Polyfill` 版本

```
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```

接收两个参数

* `callback` 数组中的每个元素需要执行的函数
  * `currentValue` 当前执行的元素值
  * `index 可选` 当前执行的元素的索引
  * `array 可选` 当前数组副本
* `thisArg 可选` 当执行回调函数时，用作`this`的值

返回值为`undefined` 

#### 注意事项

`forEach()` 按升序为数组中的每一项元素执行回调函数。

:::warning
`thisArg` 如果有值，则回调函数中this指向其`thisArg`，如果未指定值，回调函数中`this`指向全局对象。

`forEach` 在遍历的第一次已经确定了其范围，也就是整个数组的值，在遍历的过程中，向数组添加的值（删除的值）不会被`callback`接收到。

**如果想要终止、跳出`forEach`循环，只能抛出异常**。
:::


```javascript
Array.prototype.nForEach = function(cb, thisArg) {

  if(this == null) {
    throw new TypeError('this is null or defined')
  }

  let that = null;
  let idx = 0;
  // 
  let array = Object(this);
  let len = array.length >>> 0;

  if(typeof cb !== 'function') {
    throw new TypeError('callback is not function')
  }

  if(arguments.length > 1) {
    that = thisArg
  }

  while(idx < len) {
    let val

    if(idx in array) {
      val = array[idx]
      cb.call(that, val, idx, array)
    }
    idx++
  }
}
```