// 测试用例
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.running = function() {
    console.log("running~")
}

Person.prototype.eating = function() {
    console.log( this.name + "eating~")
}

function Student(name, age, score) {
    this.name = name 
    this.age = age 
    this.score = score
}

// 1.原型链继承：引用类型会被所有实例对象共享，子类不能向父类传递参数
// 将Student的prototype的隐式原型通过new绑定到Person上
Student.prototype = new Person()
let stu1 = new Student()
// stu1.prototype.studying = function() {
//     console.log("studying~")
// }

// 2.借用构造函数继承：无法实现函数的复用，父类的方法子类型无法访问
function Student(name, age, score) {
    Person.call(this, name)
    this.age = age
    this.score = score
}

// 3.组合式：借用构造函数+原型链
// 调用两次父类的构造函数，子类中多出不必要属性

// 4.寄生组合式继承 寄生：用Object.create创建父类原型的副本；组合：借用构造函数
function Student(name, age, score) {
    Person.call(this, name)
    this.age = age
    this.score = score
}
// 子类的原型指向对象p，该对象的__proto__指向Person.prototype，好处是避免创建不必要属性
Student.prototype = Object.create(Person.prototype)
// 将子类构造函数的原型的构造器指向它本身
Student.prototype.constructor = Student


function Staff(name, salary) {
    // 调用父类的构造方法
    Person.call(this, name);
    this.salary = salary
}
Staff.prototype = Object.create(Person.prototype)
Staff.prototype.constructor = Staff

let staff = new Staff('yxb', '25k')
Staff.prototype.happy = function() {
    console.log(this.salary + 'jjjj')
}
staff.eating()
staff.happy()

let staff2 = new Staff('wyl', '99k')
staff2.happy()


