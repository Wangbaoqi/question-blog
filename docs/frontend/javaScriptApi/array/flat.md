## 数组扁平化

数组扁平化也是常用的一种数组解决方案。

### ES10 flat

```javascript
const arr = [1, [2, 3, [4, 5]]]
arr.flat(Infinity);
```

### 递归 + for

```javascript
const flatten = (arr) => {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    }else {
      res.push(arr[i])
    }
  }
  return res
}
```

### 递归 + Reduce

```javascript
const flatten1 = (arr) => {
  arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten1(cur) : cur)
  }, [])
}
```

### 循环 + stack 

```javascript
const flatten2 = (arr) => {
  const stack = [...arr]
  const result = []
  
  while(stack.length) {
    const cur = stack.shift();
    
    if(Array.isArray(cur)) {
      stack.push(...cur)
    }else {
      result.push(cur)
    }
  }
  return result;
}
```