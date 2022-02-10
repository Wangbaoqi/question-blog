
# `margin`折叠

## 什么是`margin`折叠

在同一个BFC渲染区域中块级元素在垂直方向上`margin`会产生重叠

## 解决`margin`折叠

当然，解决此问题的方法无疑最好的是采用BFC，将此区域中的一个元素采用BFC，这样，该元素中如何布局跟外部没有任何关系了。

1. 首先，用元素包裹要参与BFC的元素

```html
<div class='parent'>
  <div class='child1'></div>
  <div class='parent2'>
    <div class='child2'></div>
  </div>
</div>
```

```css 
.child1 {
  margin-bottom: 20px;
}
.child2 {
  margin-top: 40px;
}
```

用`parent2`元素包裹住`child2`元素

2. 为`parent2`元素生成BFC区域

**第一种**产生BFC，为父元素添加`overflow: hidden`

```css
.parent {
  overflow: hidden
}
```

这种虽然能够产生BFC区域，但是有局限性，而且也会产生子元素`margin`溢出的问题

**第二种**，为父元素添加边框，边框可以阻隔margin的溢出

```css
.parent {
  border: 1px solid transparent
}
```

增加边框属性，会影响元素的大小，也会影响布局

**第三种**，用父元素`padding`代替子元素的`margin`，同时设置父元素`box-sizing: border-box`，否则`padding`会影响父元素的高度

```css
.parent {
  box-sizing: border-box;
  padding-top: 40px
}
```

**第四种**，在第一个子元素的前面添加`<table></table>`，会形成BFC区域，阻隔之后的子元素的`margin`溢出

```html
<div class='parent'>
  <div class='child1'></div>
  <div class='parent2'>
    <table></table>
    <div class='child2'></div>
  </div>
</div>
```

**第五种**，父元素添加`::before`伪元素，设置伪元素`display:table`，产生BFC

```css
.parent::before {
  content: '';
  display: table;
}
```



