// scripts/generate_data.js
const fs = require('fs');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');


const orders = Array.from({ length: 50 }).map(() => {
const itemsCount = faker.datatype.number({ min: 1, max: 5 });
const items = Array.from({ length: itemsCount }).map(() => ({
name: faker.commerce.productName(),
price: Number(faker.commerce.price(5, 200, 2)),
quantity: faker.datatype.number({ min: 1, max: 5 })
}));
const coupon = faker.datatype.boolean() ? { code: faker.random.alphaNumeric(6), percentage: faker.datatype.number({ min: 5, max: 30 }) } : null;
return {
id: uuidv4(),
customer: faker.person.fullName ? faker.person.fullName() : faker.name.findName(),
items,
coupon,
shipping: Number(faker.commerce.price(0, 30, 2)),
created_at: faker.date.recent(60).toISOString()
};
});


fs.mkdirSync('data', { recursive: true });
fs.writeFileSync('data/orders.json', JSON.stringify(orders, null, 2));
console.log('Generated data/orders.json with', orders.length, 'orders');
