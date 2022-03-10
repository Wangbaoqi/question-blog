# BFC

- 什么是BFC
- 避免高度坍塌
- 避免垂直方向`margin`合并
- 避免垂直方向`margin`溢出
- 解决两栏布局（左定宽，右侧自适应）

## 什么是BFC

**BFC**是块级格式上下，是网页中的一个**独立的渲染区域**，这个渲染区域只有**块级元素**才能参与，规定了内部的块级元素如何布局，与区域外部毫不相干，外部的元素也不会影响BFC区域内的元素。

除了**BFC**，还有另外一种渲染方式**IFC（行级格式上下文）**，这种针对**行内元素的渲染方式**。

块级渲染区域：所有`display`为`block`、`list-item`、`table`的元素会生成块级渲染区域。

行级渲染区域：所有`display`为`inline-block`、`inline`和`inline-table`的元素会生成行级渲染区域。

### BFC布局规则

- 默认，内部的块级会在垂直方向，按照顺序进行排列，每个块级元素独占一行。
- 块元素垂直方向的总距离由`padding + margin`共同决定。
- 属于同一个BFC的两个相邻块级元素在垂直方向上的`margin`会发生重叠，水平方向不会重叠。
- 计算父元素BFC渲染区域的高度，内部浮动元素的高度也必须计算在内（可以解决高度坍塌）。

### BFC渲染区域的产生

下面几种方式会产生BFC渲染区域：

- `float`的值不是`none`
- `position`的值不是`static`和`relative`
- `display`的值是`inline-block`、`table-cell`、`flex`、`table-cell`或者`inline-flex`
- `overflow`的值不是`visible`