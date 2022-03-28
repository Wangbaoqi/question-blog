## Array.prototype.reduce

根据**reduce**的定义，实现其`Polyfill` 版本

```
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

接收两个参数

* `callback` 数组中的每个元素需要执行的函数
  * `accumulator`  累加器累计回调的值，是上一次调用回调返回的累加值
  * `currentValue` 当前执行的元素值
  * `index 可选` 当前执行的元素的索引
  * `array 可选` 当前数组副本
* `initialValue 可选` 作为第一次调用 `accumulator` 的初始值

返回值为累加器结果 

```javascript
Array.prototype.nReduce = function(fn, initVal) {
  
  if(this == null) {
     throw new TypeError('this is null or defined')
  }
  if(typeof cb !== 'function') {
    throw new TypeError('callback is not function')
  }

  let array = Object(this)
  let len = array.length >>> 0;

  let idx = 0;
  let value;

  if(arguments.length >= 2) {
    value = initValue
  }else {

    while(idx < len && !(idx in array)) {
      idx++
    }

    if(idx >= len) {
      throw TypeError('Reduce of empty array with no initValue')
    }

    value = array[idx++]
  }

  while(idx < len) {
    if(idx in array) {
      value = cb(value, array[idx], idx, array)
    }
    idx++
  }

  return value
}
```