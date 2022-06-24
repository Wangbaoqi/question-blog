# 数组之间交集、并集、差集

## 数组的交集

```javascript
let b = [2, 4, 5];
let a = [1, 2, 3];
// result [2]
```

方法有很多，这里用`filter+includes`

```javascript
const arr_mix = a.filter(e => b.includes(e))
```

## 数组的并集
```javascript

let a = [1, 2, 3];
let b = [2, 4, 5];
// result [1,2,3,4,5]
```

方法也有很多，这里合并去重

```javascript
const arr_union = [...new Set([...a, ...b])]
```

## 数组的差集

```javascript
let a = [1, 2, 3];
let b = [2, 4, 5];
// result [1,3,4,5]
```

```javascript
const arr_diff = arr.union.filter(e => !arr_mix.includes(e))
```