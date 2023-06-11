//Домашнее задание №3

//Задание 1

//Алгоритмы сортировок: сортировка пузырьком, сортировка выбором, быстрая сортировка.

//Задание 3

//способ 1 

let Person = {name: 'Mike', surname: 'Connor', id: '001',
sayHello() {
    console.log('Hello!');
},
sayName() {
    console.log('My name is ' + this.name + ' ' + this.surname)
}
}

let Person1 = {
    name: 'Alex', surname: 'Johnson',  id: '007'
}

Object.setPrototypeOf(Person1, Person);
Person1.sayHello();
Person1.sayName();

Person.logInfo = function () {
    console.log('My ID is ' + this.id )
}

Person.logInfo();
Person1.logInfo();

//способ 2

function Person (name, id) {
    this.name = name;
    this.id = id;
}

Person.prototype.logInfo = function() {
    console.log('My ID is ' + this.id );
}

let Person1 = new Person('Bob', '000');
let Person2 = new Person('Richard', '555');
Person1.logInfo();
Person2.logInfo();

//способ 3 

let Person = {name: 'Mike', surname: 'Connor', id: '001',
sayHello() {
    console.log('Hello!');
},
sayName() {
    console.log('My name is ' + this.name + ' ' + this.surname)
}
}

let Person1 = Object.create({}, {
    name: {
        writable: false,
        enumerable: true,
        value: 'Michael'
    },
    surname: {
        writable: false,
        enumerable: true,
        value: 'Jackson'
    },
    id: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: '009'
    },
});

Person1.__proto__ = Person;
Person1.sayHello();
Person1.sayName();

Person.logInfo = function () {
    console.log('My ID is ' + this.id )
}

Person.logInfo();
Person1.logInfo();


//Задание 4

class PersonThree {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setName(str) {
       this.name = str;
    }
}

class Person extends PersonThree {
    constructor(name, surname) {
        super(name);
        this.surname = surname;
           
    }
    getSurname() {
        return super.getName() + ' ' + this.surname ;
    }
 
}

let Harry = new Person('Harry', 'Harrison');
console.log(Harry.getSurname());
Harry.setName('Mike');
console.log(Harry.getSurname());


//Бонус 

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
      for (let i=0;i<arr.length;i++) {
        for (let j=0; j<arr.length; j++) {
            if(arr[i]+arr[j] == total) return [arr[i], arr[j]];
        }
      }
}

console.log(firstSum(arr,total));

//сложность алгоритма O(n^2);