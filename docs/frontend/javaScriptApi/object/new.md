
# new以及instanceof实现

## new实现

new 内部的执行过程：

* 创建一个新对象
* 给新对象执行 `原型` 连接（连接构造函数的原型）
* 执行构造函数，新对象绑定构造函数中的this
* 返回新对象（如果构造函数返回对象会覆盖整个新对象）

```javascript
const selfNew = () => {
  const temp = Object();
  const Con = Array.prototype.shift.call(arguments);
  temp.__protp__ = Con.prototype;
  const result = arguments.length ? Con.call(temp, arguments) : Con.call(temp)
  return result instanceof Object ? result : temp 
}
```

## instanceof 实现

instanceof 是判断左侧的实例的原型链上是否存在右侧构造函数的原型

```javascript
const seftInstaceof = (target, Fn) => {
  const _proto_ = target.__proto__;
  const prototype = Fn.prototype;
  while(true) {
    if(_proto_ == null) return false;
    
    if(_proto_ == prototype) return true;
    
    _proto_ = _proto_.__proto__
  }
}
```