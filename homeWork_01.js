//Домашнее задание №2

//Задание 1 написать про массив почему он 'неправильный'

//Задание 2
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);

logger.apply(obj);

let bindedLogger = logger.bind(obj);
bindedLogger();

