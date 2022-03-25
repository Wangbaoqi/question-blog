

# 实现apply、call和apply


## 实现apply 

> apply使用：[MDN - apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


```js
Function.prototype.nApply = function (ctx) {
  ctx = ctx || (typeof window === 'undefined' ? globalThis : window);

  const key = Symbol('key');
  ctx[key] = this;

  const args = arguments[1];
  const res = ctx[key](...args);
  delete ctx[key];

  return res;
}
```

## 实现call

> call使用：[MDN - call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

```js
Function.prototype.nCall = function (ctx) {
  ctx = ctx || (typeof window === 'undefined' ? globalThis : window);
  
  const key = Symbol('key');
  ctx[key] = this;

  const args = [...arguments].slice(1);

  const res = ctx[key](...args)

  delete ctx[key];

  return res;
}
```

## 实现bind

> bind使用：[MDN - bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```js
Function.prototype.nBind = function (ctx = globalThis) {

  const fn = this;
  const preArgs = [...arguments].slice(1);

  function bound () {
    const args = [...arguments, ...preArgs];
    // 只有通过new才能强制改变this的指向， 其他的强绑如 call apply等，其ctx都是第一次bind的时候已经强制绑定了
    if (this instanceof bound) {
      fn.apply(this, args);
    } else {
      return fn.apply(ctx, args);
    }
  }
  // 为了实现通过new构造对象
  bound.prototype = fn.prototype

  return bound;
}
```

