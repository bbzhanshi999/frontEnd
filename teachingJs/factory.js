

function createPerson(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(o.name);
    }
    return o;
}


var person1 = createPerson("zhangsan",18,"engineer");
var person2 = createPerson("lisi",20,"Doctor");

person1.sayName();
person2.sayName();


/*工厂模式解决了重复代码的问题，但是并没有解决识别对象类型的问题*/