

/*原型模式可以通过原型共享属性及方法*/


function Person() {

}


Person.prototype.name = "zhangsan";
Person.prototype.age = 19;
Person.prototype.job = "Engineer";
Person.prototype.hobbys = ["basket","football","reading"];
Person.prototype.sayName = function () {
    console.log(this.name);
};


var person1 = new Person();
var person2 = new Person();


person1.sayName();
person2.sayName();


/*理解原型对象：
* 1.构造函数有一个prototype属性指向原型对象
* 2.原型对象也是一个对象
* 3 默认的原型对象都具有一个constructor属性，其指针指向构造函数
* 4 每一个新对象都有一个不可见的[[prototype]]指针指向原型对象，在chrome引擎中表现为_proto_属性
* 4 原型对象的属性值可以被新对象读取，前提是新对象没有同名的属性
**/

var proto = Object.getPrototypeOf(person1);
console.log(proto);

/*
对象如果设置了自己的属性值，那么就不会读取prototype的值
* */
/*
person1.name = "hehe";
person1.sayName();
*/


/*原型对象的缺点：
* 所有实例的属性值都相同，共享同一个原型对象
* */

Person.prototype.name="kris";
console.log(person1.name);
console.log(person2.name);

person1.name = "Jason";

console.log(person1.name);


person1.hobbys.push("fishing");

console.log(person2.hobbys);

/*确定：引用类型无法*/



