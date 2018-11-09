/*字面量方式创建对象*/

var person = {
    name:'zhangsan',
    sayName:function () {
        console.log(this.name);
    }
};

person.sayName();


//Object构造函数
var person2 = new Object();
person2.name = 'lisi';
person2.sayName = function () {
    console.log(this.name);
};

person2.sayName();

//字面量与Object构造函数的缺点：不能确定对象的类型，大量重复代码

console.log(typeof person);
console.log(person2 instanceof Object);