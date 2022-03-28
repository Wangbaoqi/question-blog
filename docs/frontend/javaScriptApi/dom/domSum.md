## DOM树的操作

* 获取DOM树的节点个数
* 获取DOM树的最大深度
* 获取DOM树的最大子节点个数

```js
/**
 * 2.DOM 的体积过大会影响页面性能，假如你想在用户关闭页面时统计（计算并反馈给服务器）
 当前页面中元素节点的数量总和、元素节点的最大嵌套深度以及最大子元素个数，请用 JS 配合
 原生 DOM API 实现该需求（不用考虑陈旧浏览器以及在现代浏览器中的兼容性，可以使用任意
 浏览器的最新特性；不用考虑 shadow DOM）。比如在如下页面中运行后：
 */
<html>
  <head></head>
  <body>
    <section>
      <span>f</span>
      <span>o</span>
      <span>o</span>
    </section>
  </body>
</html>
// 会输出：
{
  totalElementsCount: 7,
  maxDOMTreeDepth: 4,
  maxChildrenCount: 3
}
```

### DOM树的节点总数

遍历DOM树的节点会使用`深度优先遍历`

```js
// DFS 递归实现
const computeDOMCount = (dom) => {
  let c = 0;
  const computer = dom => {
    c++
    if(dom.children) {
      [...dom.children].forEach(v => computer(v))
    }
  }
  computer(dom)
  return c
}

// DFS 迭代实现
const computeDOMCount = (dom) => {
  let stack = [dom]
  let c = 0;
  while(stack.length) {
    let nodes = stack.shift();
    c++
    [...nodes.children].forEach(v => stack.push(v))
  }
  return c
}
```

### DOM树的最大深度

```js
// DFS 递归实现
const computeDOMDepth = dom => {

  if(!dom.children.length) return 1;

  let levelMax = [...dom.children].map(v => computeDOMDepth(v))

  return 1 + Math.max(...levelMax)
}

// DFS 迭代实现
const computeDOMDepth = dom => {

  let stack = [dom];
  let depth = 0;
  while(stack.length) {
    depth++
    const count = stack.length;
    let s = 0;
    while(s < count) {
      s++
      const nodes = stack.shift();
      for(let item of nodes) {
        stack.push(item)
      }
    }
  }
}
```

### DOM树最大子元素个数

```js
// BFS 
const computeDOMMaxChildCount = dom => {
  let stack = [dom];
  let count = 0;

  while(stack.length) {
    let size = stack.length;
    let levels = [];
    let i = 0;
    count = Math.max(count, size)

    while(i < size) {
      i++;
      const nodes = stack.shift();
      for(const node of nodes) {
        levels.push(node)
      }
    }
    stack = levels
  }
  return count;
}
```

### 同时获取三者

```js

// BFS 层序遍历 获取所有的节点值
const computeDOM = dom => {

  let stack = [dom];

  let totalElementsCount = 0,
      maxDOMTreeDepth = stack.length || 0,
      maxChildrenCount = 0;
  
  let nextLevel = []

  while(stack.length || nextLevel.length) {

    if(!stack.length) {
      stack = nextLevel;
      maxDOMTreeDepth++;
      nextLevel = [];
      continue;
    }
    totalElementsCount++;
    const nodes = stack.shift();
    maxChildrenCount = Math.max(maxChildrenCount, nodes.children.length);
    nextLevel=[...nodes.children]
  }
}
```