# 弹性布局

> 现代Web开发要求，网页应该尽 量适应不同显示设备的大小要求， 灵活显示网页内容。 这就要求，网页内容要可以随显 示设备的大小而动态调整布局。 浮动定位float属性， 的确可以实现根据显示设备大小， 自动换行显示。但是，浮动定位 float提供的可控制的属性太少了， 以至于难于随心所欲的控制布局。

**float浮动定位带来的问题**

想要把多个块级元素放到一行内，要计算的元素太多。元素的总宽度`width = content + padding*2 + border*2 + margin*2`，一行中有太多元素的话，计算起来太麻烦。

而弹性布局带来最大的一个优点是**自动计算**，也就是自适应宽度。

## 弹性布局的概念

弹性布局的概念概括：

- 布局的容器
- 主轴
- 容器的属性

### 布局的容器和子项

容器就是承载元素的盒子，也被称为弹性盒子

![](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

这定义了一个弹性容器；内联或块取决于给定的值。它为其所有直接子级启用了弹性上下文。

```css
.container {
  display: flex; /* or inline-flex */
}
```

而弹性盒子中的元素被称为**项（弹性项目）**

![https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)

默认情况下，弹性项目按源顺序排列。但是，该`order`属性控制它们在弹性容器中出现的顺序。

```css
.item {
  order: 5; /* default is 0 */
}
```

### 布局的主轴和交叉轴

主轴，是指弹性布局的多个项目排列方向上的一根轴。 

- 如果弹性布局的多个项目按`X`轴排列，那么`X`轴就是主轴。
- 如果弹性布局的多个项目按`Y`轴排列，那么`Y`轴就是主轴。

交叉轴，是指与主轴交叉的一根轴称为交叉轴 .

- 如果主轴是`X`轴，那么`Y`轴就是交叉轴。
- 如果主轴是`Y`轴，那么`X`轴就是交叉轴

### 容器的属性

容器的属性大致有一下几种：

- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`

#### `flex-direction`弹性方向

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg" alt="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg" style="zoom:100%;" />

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`（默认）：从左到右`ltr`；从右到左`rtl`
- `row-reverse`：从右到左`ltr`；从左到右`rtl`
- `column`: 相同，`row`但从上到下
- `column-reverse`: 相同，`row-reverse`但从下到上

#### **`flex-wrap`换行**

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg" alt="https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg" style="zoom:200%;" />

默认情况下，弹性项目都将尝试适合一行。您可以更改它并允许使用此属性根据需要包装项目。

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`（默认）：所有弹性项目都将在一行
- `wrap`: flex 项目将从上到下包裹到多行。
- `wrap-reverse`: flex 项目将从下到上换行成多行。

#### `flex-flow`

这是`flex-direction`and`flex-wrap`属性的简写，它们共同定义了 flex 容器的主轴和交叉轴。默认值为`row nowrap`。

```css
.container {
  flex-flow: column wrap;
}
```

#### `justify-content`

<img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" alt="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" style="zoom:25%;" />

这定义了沿主轴的对齐方式。当一行上的所有 flex 项目都不灵活，或者是灵活的但已达到最大大小时，它有助于分配额外的可用空间。当项目溢出行时，它还会对项目的对齐方式施加一些控制。

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```

- `flex-start`（默认）：项目被打包朝向 flex-direction 的开始。
- `flex-end`: 项目被打包到 flex-direction 的末尾。
- `start`: 物品被包装在方向的开始处`writing-mode`。
- `end`: 物品被包装到方向的尽头`writing-mode`。
- `left`: 物品被包装在容器的左边缘，除非这对 . 没有意义，否则`flex-direction`它的行为就像`start`.
- `right`: 物品被包装在容器的右边缘，除非这对 . 没有意义，否则`flex-direction`它的行为就像`end`.
- `center`：项目沿线居中
- `space-between`：物品均匀分布在行中；第一项在起始行，最后一项在结束行
- `space-around`：项目均匀分布在行中，周围空间相等。请注意，视觉上的空间是不相等的，因为所有项目的两边都有相等的空间。第一个项目将在容器边缘有一个空间单位，但下一个项目之间有两个空间单位，因为下一个项目有自己的适用间距。
- `space-evenly`：项目分布使得任何两个项目之间的间距（以及边缘的空间）相等。

请注意，浏览器对这些值的支持是有细微差别的。例如，`space-between`某些版本的 Edge 从未获得过支持，并且 Chrome 还没有开始/结束/左/右。MDN[有详细的图表](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)。最安全的值是`flex-start`、`flex-end`和`center`。

还有两个额外的关键字可以与这些值配对：`safe`和`unsafe`. 使用`safe`确保无论您如何进行这种类型的定位，您都不能推动一个元素，使其呈现在屏幕外（例如，离开顶部），这样内容也不能滚动（称为“数据丢失”） .

#### `align-items`

![https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

这定义了弹性项目如何沿当前行的**交叉轴**布局的默认行为。将其视为`justify-content`横轴（垂直于主轴）的版本。

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}
```

- `stretch`（默认）：拉伸以填充容器（仍然尊重最小宽度/最大宽度）
- `flex-start`// `start`:`self-start`项目放置在横轴的开始处。这些之间的区别是微妙的，是关于尊重`flex-direction`规则或`writing-mode`规则的。
- `flex-end`// `end`:`self-end`项目放置在横轴的末端。区别又是微妙的，是关于尊重`flex-direction`规则与`writing-mode`规则的。
- `center`：项目在横轴上居中
- `baseline`：项目对齐，例如它们的基线对齐

`safe`and`unsafe`修饰符关键字可以与所有其他关键字一起使用（尽管注意浏览[器支持](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)），并帮助您防止对齐元素以使内容变得不可访问。

#### `align-content`

![https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

当横轴上有额外空间时，这将对齐 flex 容器的线，类似于在`justify-content`主轴内对齐单个项目的方式。

**注意：**该属性只对多行灵活容器生效，这里`flex-wrap`设置为`wrap`或`wrap-reverse`)。单行灵活容器（即 where`flex-wrap`设置为其默认值`no-wrap`）不会反映`align-content`.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}
```

- `normal`（默认）：项目被打包在它们的默认位置，就好像没有设置值一样。
- `flex-start`/ `start`：包装到容器开头的物品。（更受支持的）`flex-start`尊重，`flex-direction`而`start`尊重`writing-mode`方向。
- `flex-end`/ `end`：包装到容器末端的物品。（更多支持）`flex-end`尊重，`flex-direction`而端尊重`writing-mode`方向。
- `center`：在容器中居中的项目
- `space-between`：项目均匀分布；第一行在容器的开头，最后一行在结尾
- `space-around`：项目在每行周围均匀分布
- `space-evenly`：项目均匀分布，周围空间相等
- `stretch`: 线条伸展以占用剩余空间

`safe`and`unsafe`修饰符关键字可以与所有其他关键字一起使用（尽管注意浏览[器支持](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)），并帮助您防止对齐元素以使内容变得不可访问。

#### `Gap`

![https://css-tricks.com/wp-content/uploads/2021/09/gap-1.svg](https://css-tricks.com/wp-content/uploads/2021/09/gap-1.svg)

[该`gap`属性](https://css-tricks.com/almanac/properties/g/gap/)明确控制弹性项目之间的空间。它仅在不在外边缘的*项目之间*应用该间距。

```css
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

该行为可以被认为是*最小*排水沟，就好像排水沟以某种方式更大（因为类似`justify-content: space-between;`），那么只有当该空间最终变得更小时，差距才会生效。

它不仅适用于 flexbox，也`gap`适用于网格和多列布局。

### 项目属性

- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `order`
- `align-self`

#### `flex-grow`

![https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

这定义了弹性项目在必要时增长的能力。它接受用作比例的无单位值。它规定了项目应该占用的弹性容器内的可用空间量。

如果所有项目都`flex-grow`设置为`1`，则容器中的剩余空间将平均分配给所有子项。如果其中一个孩子的值为`2`，则该孩子将占用其他孩子之一的两倍空间（或者至少会尝试）。

```css
.item {
  flex-grow: 4; /* default 0 */
}
```

负数无效。

#### `flex-shrink`

弹性收缩，这定义了弹性项目在必要时收缩的能力。

```css
.item {
  flex-shrink: 3; /* default 1 */
}
```

负数无效。

#### `flex-basis`

这定义了在分配剩余空间之前元素的默认大小。它可以是长度（例如 20%、5rem 等）或关键字。关键字的`auto`意思是“看看我的宽度或高度属性”（这是由`main-size`关键字临时完成的，直到被弃用）。关键字的`content`意思是“根据项目的内容调整大小”——这个关键字还没有得到很好的支持，所以很难测试，也很难知道它的兄弟`max-content`、、`min-content`和`fit-content`做什么。

```css
.item {
  flex-basis:  | auto; /* default auto */
}
```

如果设置为`0`，则不考虑内容周围的额外空间。如果设置为`auto`，则根据其`flex-grow`值分配额外空间。[请参阅此图。](https://www.w3.org/TR/css3-flexbox/images/rel-vs-abs-flex.svg)

#### `flex`

这是`flex-grow,` `flex-shrink`和`flex-basis`组合的简写。第二个和第三个参数 (`flex-shrink`和`flex-basis`) 是可选的。默认值为`0 1 auto`，但如果您使用单个数值设置它，例如`flex: 5;`，则会将 更改`flex-basis`为 0%，所以它就像设置`flex-grow: 5; flex-shrink: 1; flex-basis: 0%;`。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

**建议您使用此速记属性**，而不是设置单个属性。速记智能地设置其他值。

#### `Order`

![https://css-tricks.com/wp-content/uploads/2018/10/order.svg](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)

默认情况下，弹性项目按源顺序排列。但是，该`order`属性控制它们在弹性容器中出现的顺序。

```css
.item {
  order: 5; /* default is 0 */
}
```

#### `align-self`

![https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg)

`align-items`这允许为单个弹性项目覆盖默认对齐方式（或由 指定的对齐方式）。

请参阅`align-items`说明以了解可用值。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

请注意`float`，`clear`和`vertical-align`对弹性项目没有影响。

## 参考

- [css-trick](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-properties-for-the-childrenflex-items)

