module.exports = random = (num1, num2) => {
    min = Math.ceil(num1);
    max = Math.floor(num2);
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}
