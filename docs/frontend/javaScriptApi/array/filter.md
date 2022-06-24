# 实现 filter 

```javascript
// this 是执行callback fn 中使用的this的值
Array.prototype.sfilter = function(cb, thisArg) {
  if(this == null) {
    throw new TypeError('this is null or defined')
  }
  
  if(typeof cb != 'function') {
    throw new TypeError('callback is not function')
  }
  let idx = 0;
  let that = thisArg || null;

  let array = Object(this)
  let len = array.length >>> 0;

  let result = []

  while(idx < len) {
    if(idx in array && cb.call(that, array[idx], idx, array)) {
      result.push(array[idx])
    }
    idx++
  }
  return result
}

// test 1
let filterArr = arr.sfilter((item, index, arr) => {
  return item > 4
}, arr)

// test 2
let ffArr = Array.prototype.sfilter.call(arr, (item, index, arr) => {
  return item > 4
})
```