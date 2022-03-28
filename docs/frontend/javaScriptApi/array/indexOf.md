## Array.prototype.indexOf

根据`indexOf` 的定义，这里实现了其`Polyfill`版本

```javascript
arr.indexOf(searchElement[, fromIndex])
```

接收两个参数  

* `searchElement` 查询目标值 
* `fromIndex` 从什么位置查
  * `fromIndex >= len`   不会再数组中查
  * `fromIndex` 为负值，如`-1`代表从数组末尾查找，依次类推。不过不会影响其查找顺序。
  * `len - Math.abs(fromIndex) < 0`   则还是查找整个数组，索引从`0`开始

返回值

* 查询有结果 返回其值索引位置
* 无结果 返回 -1

```javascript
Array.prototype.nIndexOf = function(target, fromIdx) {
  let idx;
  
  const arr = Object(this);

  const len = arr.length >>> 0;

  if(len == 0) return -1;

  // 将fromIdx 转换成 number 类型
  idx = +fromIdx || 0;

  if(Math.abs(idx) === Infinity) {
    idx = 0;
  }

  if(idx >= len) return -1;

  // 抵消idx 
  idx = Math.max(n >= 0 ? 0 : len - Math.abs(n), 0)

  while(idx < len) {
    if(idx in arr && arr[idx] === target) {
      return idx
    }
    idx++;
  }

  return -1
}
```