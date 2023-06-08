//Задание 1 Создание объектов

//1 способ

const Ray = { name: 'Ray', surname: 'Bradbury', language: 'English' };

//2 способ

class Writer {
    constructor(name, surname, language) {
        this.name = name;
        this.surname = surname;
        this.language = language;
    }
}

const Robert = new Writer('Robert', 'Heinlein', 'English');

//3 способ 

const Alfred = Object.create({}, {
    name: {
        writable: false,
        enumerable: true,
        value: 'Alfred'
    },
    surname: {
        writable: false,
        enumerable: true,
        value: 'Bester'
    },
    language: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: 'English'
    },
});

//4 способ

const RayUSA = Object.assign({ country: 'USA' }, Ray);

//Задание 2 Копирование объектов

//1 способ

var _ = require('lodash');

const Lovecraft = Object.create(null, {
    name: {
        writable: false,
        enumerable: true,
        value: 'Howard'
    },
    surname: {
        writable: false,
        enumerable: true,
        value: 'Lovecraft'
    },
    language: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: 'English'
    },
});

const clone = _.cloneDeep(Lovecraft);
console.log(clone);

//2 способ

let Stephen = { name: 'Stephen', surname: 'King', language: 'English' };
let clone = JSON.parse(JSON.stringify(Stephen));
console.log(clone);

  //3 способ

let Stephen = { name: 'Stephen', surname: 'King', language: 'English' };
let clone = { ...Stephen};
console.log(clone); 

//4 способ

let Stephen = { name: 'Stephen', surname: 'King', language: 'English' };
let clone = Object.assign({}, Stephen);
console.log(clone);

//5 способ

let Stephen = { name: 'Stephen', surname: 'King', language: 'English' };
let clone = {};
for (let key in Stephen) {
   clone[key] = Stephen[key];
}
console.log(clone);

//6 способ 
class Writer {
    constructor(name, surname, language) {
        this.name = name;
        this.surname = surname;
        this.language = language;
    }
  produce () { 
    return new Writer (this.name, this.surname, this.language);
  }
}
let writer = new Writer ('Mark', 'Twain', 'English');
let writer1 = writer.produce();
let writer2 = writer.produce();
console.log(writer1);
console.log(writer2);


//Задание 3 Создание функции

function makeCounter (x, y) {
    return x + y;
}

let makeCounter = function (x, y) {
    return x + y;
}

let makeCounter = function makeCounter (x, y) {
    return x + y;
}

let makeCounter = (x, y) => x + y;

//Бонус Задание 2 

function reverseStr(str) {
    return Array.from(str).reverse().join('');
}
