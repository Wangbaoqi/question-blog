# 实现 map

```javascript
/**
 * fn callback
 * thisArg 可选参数
 */ 
Array.prototype.nMap = function(cb, thisArg) {

  if(this == null) {
    throw new TypeError('this is null or not defined')
  }

  if(typeof cb != 'function') {
    throw new TypeError('callback is not function')
  }

  let idx = 0;
  let that = thisArg || window;

  let arr = Object(this)
  let len = arr.length >>> 0;

  let res = []


  while(idx < len) {

    if(idx in arr) {
      res.push(cb.call(that, arr[idx], idx, arr))
    }
    idx++
  }

  return res
}

let newArr = arr.smap((item, index, arr) => {
  return `${item}nate`
})
```