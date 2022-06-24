# 实现继承

在ES5中有以下几种实现继承的方式，而且每一种都是为了解决上一种存在的问题而存在的。

* 基本模式
* 组合方式
* 寄生式
* 组合寄生

上述几种继承都是不断进行优化的。在实现继承方式之前，首先实现以下 `new` 操作符，这样做的目的是为了更好的理解通过构造函数实例化一个对象。

## 实现new

new 内部的执行过程：

* 创建一个新对象
* 给新对象执行 `原型` 连接（连接构造函数的原型）
* 执行构造函数，新对象绑定构造函数中的this
* 返回新对象（如果构造函数返回对象会覆盖整个新对象）

```javascript
function create_new() {
  let obj = new Object();
  // 获取构造函数
  let Constructor = Array.prototype.shift.call(arguments);
  // 原型连接
  obj.__proto__ = Constructor.prototype;
  // 绑定this
  let result = Constructor.call(obj, arguments);
  // 返回对象
  return result instanceof Object ? result : obj;
}

function Foo() {};
let foo = create_new(Foo);
```

## 基本模式

这种方式是组合继承方式的一部分，通过将一个对象的实例指定给另一个构造函数的 `prototype` ，这个就继承了该对象的属性以及方法。

```javascript
function Parent() {
  this.name = 'nate';
  this.list = [1,2,3];
}

Parent.prototype.getName = function() {
  return this.name
}

function Child() {
  this.age = 20
}

// Child.prototype 继承 Parent的属性方法
// Child 原型被改变了 因此没有了自身的构造函数，而是成了Parent
Child.prototype = create_new(Parent);

// 改变Child的原型的构造函数改变成自身
Child.prototype.constructor = Child;
```

这种基本的模式存在的问题，`Child` 的实例都会共用一个原型链上的属性。

```javascript
// test
let c1 = create_new(Child);
let c2 = create_new(Child);
c1.list.push(4);
c2.list; // [1,2,3,4]
```

每一个`Child`的实例创建时，属性 `list` 都是同一个引用。解决的方法是让每一个`Child`的实例不共用一个引用，也就是每次实例化`Child` 的实例时，执行一遍`Parent`构造函数，每一个`Child`的实例都会继承`list`属性，这样`list`就会有多个副本。

```javascript
function Child() {
  this.age = 20;
  // 获取Parent属性list的副本
  Parent.call(this);
}
```

上述这种方式也可以通过**借助构造函数**来实现继承。

## 组合继承

组合继承也是常用的一种继承方式，其实就是将**基本模式**和**借助构造函数模式**结合在一起。

```javascript
function Parent() {
  this.name = 'nate'
}
Parent.prototype.getName = function() {
  return this.name
}

function Child() {
  this.age = 18;
  Parent.call(this)
}

Child.prototype = create_new(Parent);
Child.prototype.constructor = Child;
```

上述就是完整的组合继承了，不过这种方式也存在问题，那就是调用`Parent`的次数为两次。为了解决这个问题，引出了**寄生式继承。**

## **寄生式继承**

寄生式继承是基于**原型式继承**的。原型式继承是通过已有的对象创建一个新对象，类似于`Object.create`  ，不过`Objec.create` 规范了原型式继承。

```javascript
function createObject(obj) {
  function Foo() {};
  Foo.prototype = obj;
  return new Foo();
}
let obj = { a: 1 };
createObject(obj); // Foo{}
createObject(obj).a; // 1
let aObj = Object.create(obj); // {}
aObj.a; // 1
```

而**寄生继承**则是封装一个函数，该函数继承传入的对象，且可以增强已经继承的对象。

```javascript
function createInherit(obj) {
  let child = createObject(obj); // or Object.create(obj)
  // 增强子类的功能
  child.getAge = function() {
    return this.age
  }
  return child
}
```

## 组合寄生继承

组合寄生继承可以说是比较理想的继承方式，在继承父类原型的时候不再调用其构造函数，而是通过寄生的方式来继承父类的原型（不在调用父类构造函数），且保持原型链不变。

```javascript
function Parent() {
  this.name = 'nate';
}
Parent.prototype.getName = function() {
  return this.name;
}

function Child() {
  this.age = 19;
  Parent.call(this);
}

// 组合继承 子类继承父类 通过调用父类的构造函数
// Child.prototype = create_new(Parent);
// Child.prototype.constructor = Child;

// 寄生式继承 不需要再调用父类的构造函数，而是得到一份父类原型的副本
function inheritPrototype(Parent, Child) {
  let prototype = Object.create(Parent.prototype);
  prototype.constructor = Child;
  Child.prototype = prototype;
}

inheritPrototype(Parent, Child);

```
