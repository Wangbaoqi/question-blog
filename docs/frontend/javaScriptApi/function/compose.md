# 实现compose



> 实现一个 compose 函数，进行函数合成，比如 redux 中的 compose，react 高阶组件连续调用时的 compose

```js
const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

// (10 + 100) * 10 + 10 = 1110
compose(add10, mul10, add100)(10);
```



## 简介

`compose` 函数可以接收多个独立的函数作为参数，然后将这些函数进行组合串联，最终返回一个“组合函数”。

**组合函数**执行时，其内部的所有函数都会按照组合时的顺序并以队列的形式有序的执行，前一个函数的返回值会作为下一个函数的参数被接收，因此“组合函数”中的第一个执行的函数可以接收多个参数，而之后的函数只能接收一个参数（上一个函数的返回值）。像这样一个或多个指定的参数会从**组合函数**的入口函数（第一个执行的函数）中被传入，而之后则会在多个组合串联的函数管道中进行加工、传输和输出。

组合函数的执行格式以及参数在管道中传输的格式如下：

```
f(h(j(1, 2)));
```

**compose 函数的特点:**

- 参数是多个函数，返回值是一个“组合函数”。
- 组合函数内的所有的函数从右至左一个一个执行（主要符合数学从右到左的操作概念）。
- 组合函数内除了第一个执行函数的参数是多元的，其它函数的参数都是接收上一个函数的返回值。

**使用形式：**

```js
let sayHello = (...str) => `Hello , ${str.join(" And ")}`;
let toUpper = str => str.toUpperCase();
let combin = compose(
  toUpper,
  sayHello
);

combin("jack", "bob"); // HELLO , JACK AND BOB
```

## 实现



### 闭包 + reduce

```js
const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((p, f) => {
      return f(p)
    }, ...args)
  }
}
const compose1 = (...fn) => {
  return fn.reduce((p, f) => {
    return (...args) => {
      return p(f(...args))
    }
  })
}
```

