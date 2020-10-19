const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el

const total = numbers.reduce((total, el) => total + el)

console.log(total);

// variável, valor, índice, array
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}
const media = numbers.reduce(avg);

console.log(media);