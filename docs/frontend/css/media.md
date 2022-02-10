
# 媒体查询

## 媒体类型

1. print 打印机
2. screen 屏幕
3. all 所有媒体设备
4. speech 屏幕阅读器发声设备

## 媒体使用


### style标签属性指定属性

```html
<style media='print'>
```

### link 标签指定媒体类型对应样式规则

```html
<link rel='stylesheet' href='print' media='print'>
<link rel='stylesheet' href='screen' media='screen'>
<link rel='stylesheet' href='common'>
```

### 利用@import方式引入

```html
<link rel='stylesheet' href='styles.css' />
```

```css
@import url(print.css) print;
@import url(screen.css) screen;
```

### @media控制细节

```css
@media screen {
  h2 {}
}
@media print {
  h1 {}
}
```

### 多设备支持

```css
@media screen,print {}
@import url(screen.css) screen,print;
```

### 设备方向

`orientation`有两个值，`landscape`(横屏)和`portrait`(竖屏)

### 查询条件

1. 横屏显示且宽度小于600px

```css
@media screen and (orientation: landscape) and (max-width: 600px) {}
```

2. 横屏显示或者宽度小于600px

```css
@media screen and (orientation: landscape), screen and (max-width: 600px) {}
```

3. 既不是横屏显宽度又不小于600px

```css
@media not screen and (orientation: landscape) and (max-width: 600px) {}
```

### 引入顺序

如果规则样式前后有重复的，永远应用的是最后一个

### 设备划分

1. 超小屏幕 （小于768px）手机
2. 小屏幕 （大于等于768px）
3. 中等（大于等于992px）
4. 大屏幕（大于等于1200px）