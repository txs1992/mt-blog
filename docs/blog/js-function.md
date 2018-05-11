# JavaScript 函数调用的四种方式与区别

> 本篇短文大部分内容出自《JavaScript语言精粹》一书，有兴趣的同学可以去购买阅读，很棒的一本书，是js大师 道格拉斯·克罗克福德 的作品。

调用一个函数时，会暂停当前函数的执行，传递控制权和参数给新函数(被调用的函数)。除了被调用的函数声明时的形参，每个函数还接收两个附加的参数：this和arguments。参数this在面向对象编程中非常重要，它的值取决于调用的模式。在JavaScript中函数有4种调用模式：方法调用模式、函数调用模式、构造器调用模式和apply(call)调用模式。这些调用模式在如何初始化this上存在差异。

## 方法调用模式

当一个函数被保存为对象的一个属性时，我们称它为一个方法。当一个对象的方法被调用时，this被绑定到调用方法的对象。

```javascript
var myObj = {
    name : "MT",
    setName : function(name){
        this.name = name;
    }
};

myObj.setName("哀木涕");
console.log(myObj.name);    //"哀木涕"

myObj.setName("小德");
console.log(myObj.name);    //小德
```

方法可以使用this访问自己所属的对象，所以它能从对象中取值或对对象进行修改。this和对象的绑定发生在方法调用的时候。这个“超级”延迟绑定(vary late binding)使得函数可以对this高度复用。通过this可以取得它们所属对象的上下文方法称为公共方法（public method）。

## 函数调用模式

当一函数并非一个对象的属性时，那么它就是被当做一个函数来调用的:

```javascript
var sum = add(1,2);    //sum的值为3。
```

以此模式调用函数时，this被绑定到全局对象。这是语言设计上的一个错误。倘若语言设计正确，那么当内部函数被调用时，this应该仍然绑定到外部函数的this变量。这个设计错误的后果就是方法不能利用内部函数来帮助它工作，因为内部函数的this被绑定了错误的值(全局对象)，所以不能共享该方法对对象的访问权。幸运的是，有一个很容易的解决方案：如果一个对象的方法定义了一个变量并将this赋值给它，那么内部函数就可以通过那个变量访问到外部方法调用的对象。按照约定，我们把那个变量命名为 that。

```javascript
myObj.changeName = function(){
    var that = this;    //解决方法

    var change = function(){
        that.name = "change" + that.name;
    }

    change();   //以函数的方式调用change;
}

//以方法的形式调用changeName。
myObj.changeName();
console.log(myObj.name);
```

## 构造器调用模式

JavaScript是一门基于原型继承的语言。这意味着对象可以直接从其他对象继承属性。该语言是无类型的。

如果在一个函数前面带上 new 关键字来调用，那么背地里将会创建一个连接到该函数的prototype成员的新对象，同时this会被绑定到那个新对象上。

new 前缀也会改变return 语句的行为,如果return 的值是对象，那么将会将这个对象返回，否则将返回默认创建的新对象。

```javascript
//创建一个名为Person的构造器函数。它构造一个带有name属性的对象。
function Person(howName){
    this.name = howName;
}

Person.prototype.getName = function(){
    return this.name;
}

var person = new Person("MT");
console.log(person.getName());
```

一个函数，如果创建的目的就是希望结合new前缀来调用，那它就被称为构造器函数。按照约定，它们保存在以大写格式命名的变量里。如果调用构造函数时没有在前面加上new ,可能会发生非常糟糕的事情，（这时将会以函数的方式调用，由于函数的方式调用this是全局对象，这时不会返回新对象，而是在全局对象上添加属性。）既没有编译时警告，，也没有运行时警告，所以大写约定非常重要。

## apply/call调用模式

因为JavaScript是一门函数式的面向对象编程语言，所以函数可以拥有方法。

apply/call方法允许我们选择this的值。apply方法接受两个参数，第一个是要绑定的this的值，第二个参数是参数数组。call方法第一个参数是要绑定的this的值，后面紧跟的是相关的参数。

```javascript
function setAge(age){
    this.age = age;
}

setAge.call(myObj, 23);
console.log(myObj.age);     //23

setAge.apply(myObj, [24]);
console.log(myObj.age);     //24
```
