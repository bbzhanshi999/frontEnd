/*var arr = new Array();
arr.push("red","yellow");
console.log(arr instanceof Array);
console.log(arr instanceof Object);
*/

/*构造函数模式可以解决识别对象类型的问题
* 通过构造函数创建
*
* */


function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = sayName;
    /*this.sayName = function () {
        console.log(this.name);
    }*/
   /* this.sayName = new Function("console.log(this.name)");*/
}

function sayName() {
    console.log(this.name);
}

var person1 = new Person("zhangsan",19,'Engineer');
var person2 = new Person("lisi",24,'Doctor');


/*与构造函数的直观区别：
* 1 并没有 new Object（）
* 2 属性直接赋值给了this
* 3 没有return
* */

/** new Person的含义及动作
 * 1. new 代表创建新对象
 * 2  将构造函数的作用域赋给了新对象（this）
 * 3  执行构造函数内的代码
 * 4  隐式返回对象
 */


console.log("%s","person is Person?",person1 instanceof Person);
console.log("%s","person is Object?",person1 instanceof Object);


/**
 * 构造函数也可以普通函数使用
 */
Person("wangwu",19,"Programmer");

global.sayName();
console.log(global.age);

var o = {};

/**
 * 调用apply ，call方法指定作用域
 */
Person.apply(o,["zhaoliu",22,"student"]);
console.log(o);

/**
 * 构造函数的缺点：sayName方法被重新定义了多次，每个对象的sayName方法都是不同的函数实例,
 * 而在面向对象的语言中，由于函数不是对象，因此不存在这个问题（例如java中类声明的方法，在类加载过程中被放入方法区）
 * 改进方式可以是定义全局作用域的方法，但是缺点是全局作用域变得名不副实，并且如果一个类型中有多个方法声明，就要
 * 在全局作用域中进行声明
 */







