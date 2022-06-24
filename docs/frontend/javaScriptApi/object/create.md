# 实现 Object.create

`Object.create` 返回一个新对象，该对象的原型为传入参数（参数是对象）

```javascript
const obj = {
  name: 'nate'
}
const newObj = Object.create(obj); // newObj.name 
```

## 实现Object.create polyfill

```javascript
const n_creat = (proto, propertiesObject) => {
  if(typeof proto != 'object' && typeof proto != 'function') {
    throw new TypeError('proto object may only is object' + proto)
  }else if(typeof proto == 'null') {
    throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.")
  }
  
  if(typeof propertiesObject != 'undefined') {
    throw new Error('')
  }
  function Fn(){};
  Fn.prototype = proto;
  return new Fn();
}
```
