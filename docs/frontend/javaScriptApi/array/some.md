## Array.prototype.some

根据**some**的定义，实现其`Polyfill` 版本

```
arr.some(callback(element[, index[, array]])[, thisArg])
```

接收的参数跟forEach 一致，返回值为`true or false` 

```javascript
Array.prototype.nSome = function(cb, thisArg) {
  
  if(this == null) {
    throw new TypeError('this is null or defined')
  }
  
  if(typeof cb != 'function') {
    throw new TypeError('callback is not function')
  }
  let idx = 0, that = thisArg || void 0;
  
  const array = Object(this);
  const len = array.length >>> 0;
  
  while(idx < len) {
    if(idx in array && cb.call(that, array[idx], idx, array)) {
      return true
    }
  }
  return false;
}
```