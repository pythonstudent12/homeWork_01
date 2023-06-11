//Домашнее задание №2

//Задание 1 
// Массивы в JS, в отличие от других языков программирования, могут хранить разные типы данных, кроме того являются динамическими, 
//а не статическими, массивы не имеют фиксированной длины, кроме того, массив в JS объединяет в себе очередь и стек, как структуры 
//данных.

//Задание 2
function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);

logger.apply(obj);

let bindedLogger = logger.bind(obj);
bindedLogger();

