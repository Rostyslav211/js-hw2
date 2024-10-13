// const celsius = 25 
// const fahrenheit = (celsius * 9/5) + 32;
// console.log( celsius fahrenheit);

const celsius = 25; 

const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius} градусів Цельсія дорівнює ${fahrenheit} градусів Фаренгейта.`);

const daysInMonth = 30; 

const hoursInMonth = daysInMonth * 24;

const minutesInMonth = hoursInMonth * 60;

console.log(`У місяці, що складається з ${daysInMonth} днів, є ${hoursInMonth} годин та ${minutesInMonth} хвилин.`);

let health = 100; 
let energy = 50;  

const damage = 20; 
const energyLoss = 10; 

health -= damage; 
energy -= energyLoss; 

console.log(`Після атаки рівень здоров'я гравця: ${health}`);
console.log(`Після використання здібності рівень енергії гравця: ${energy}`);

let totalAmount = 200; 

const discount = 0.10; 
const discountedAmount = totalAmount * (1 - discount); // Застосовуємо знижку

console.log(`Початкова сума покупки: ${totalAmount} грн`);
console.log(`Сума зі знижкою 10%: ${discountedAmount} грн`);

const floatingNumber = 7.85;

const roundedDown = Math.floor(floatingNumber);

console.log(`Початкове число: ${floatingNumber}`);
console.log(`Число після округлення до меншого: ${roundedDown}`);

const stringNumber = "123.45";

const decimalNumber = parseFloat(stringNumber);

console.log(`Рядок: "${stringNumber}"`);
console.log(`Десяткове число після перетворення: ${decimalNumber}`);

const stringNumbeR = "456";

const integerNumber = parseInt(stringNumber);

console.log(`Рядок: "${stringNumber}"`);
console.log(`Ціле число після перетворення: ${integerNumber}`);

const number = 25;

const squareRoot = Math.sqrt(number);

console.log(`Число: ${number}`);
console.log(`Квадратний корінь з числа: ${squareRoot}`);

const integerNum = 100;

const stringNum = "42";

const parsedNum = parseInt(stringNum);

console.log(`Рядок: "${stringNum}"`);
console.log(`Ціле число після перетворення: ${parsedNum}`);

const numberAsString = integerNumber.toString();

console.log(`Цілочисельне значення: ${integerNum}`);
console.log(`Рядок після перетворення: "${numberAsString}"`);



