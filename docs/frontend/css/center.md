# 水平垂直居中



- 水平居中
- 垂直居中

## 水平居中



> 前提
>
> - 父元素必须是块级盒子
> - 父元素的宽度必须已经被设定好

**场景一**：子元素是**块级元素**且宽度没有设定，不会存在水平居中，子元素的宽度会充满父元素

**场景二**：子元素是**行内元素**，子元素的宽度由其内容撑开，可以给父元素设定`text-align:center`

**场景三**：子元素是**块级元素**且宽度已经设定

方案一：给子元素添加`margin:0 auto`

方案二：通过计算父元素的`margin`或者`padding`以及`border`的宽度，设置父子元素`box-sizing:border-box`

方案三：通过绝对定位的方式，子元素设置`left:50%`,`margin-left:负子元素宽一半`

```css
.parent {
  position: relative;
  width: 200px;
}
.child {
  position: absolute;
  width: 100px;
  left: 50%;
  margin-left: -50px; // or transform: translateX(-50%)
}
```

方案四：通过弹性布局

## 垂直居中



> 前提：父元素是盒子容器

**场景一**：子元素是**行内元素**，高度由其内容撑开

方案一：设置父元素的`line-height`为其高度。

方案二：多行，通过给父元素设定`display`为`table-cell`,`vertical-align:middle`

**场景二**：子元素是块级元素但其高度没有设定

方案一：通过给父元素设定`display`为`table-cell`,`vertical-align:middle`

方案二：通过弹性布局

**场景三**：子元素是块级元素但其高度已经设定

方案一：通过计算父元素的`margin`或者`padding`以及`border`的宽度，设置父子元素`box-sizing:border-box`

方案二：绝对定位，子元素设置`top:50%`,`margin-top:负子元素宽一半`或者`transform:translateY(-50%)`

方案三：弹性布局