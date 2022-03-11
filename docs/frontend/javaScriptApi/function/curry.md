
# 实现函数柯里化



> 实现`add(1)(2)(3)`输出结果`6`



### 原理

1. 使用闭包，管理局部变量
2. 返回内层函数，接收下一次传参，返回内层函数
3. 返回局部变量
   - 通过`toString`方法，类型转换
   - 通过自定的方法去调用

### 实现

```js
const add = initnum => {
  let sum = initnum;
  const reduce = num => {
    sum += num;
    return reduce;
  }
  reduce.toString = () => {
    return sum
  }
  return reduce;
}
```



