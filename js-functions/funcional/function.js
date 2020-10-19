//Function declarations
function sum(x, y) {
    return x + y;
}

// Função anônima
const incrment = function (n) {
}

    (function (n) {
        return n + 1
    })(1);

(function () {
    let x = 1;
    return n + 1
})(1);

// Arrow function is always anonymous
const incrment = (n) => {
    return n + 1;
}

const incrment = n => {
    return n + 1;
}

const incrment = n => n + 1;

// higher - order function
function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

// Função retornando função
function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875);

console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(10.9));