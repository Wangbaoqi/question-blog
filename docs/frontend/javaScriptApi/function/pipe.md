

# 实现函数pipe

## 函数Pipe实现

函数Pipe跟函数组合基本差不多，唯一的不同是函数执行的顺序不同，Pipe是从左到右的。

```javascript
const pipe = (...fns) => {
  return fns.reduce((prev, cur) => {
    return (...args) => {
      return cur(prev(...args))
    }
  })
}
```