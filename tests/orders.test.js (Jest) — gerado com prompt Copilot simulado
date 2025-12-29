// tests/orders.test.js
/**
* Prompt (usado com Copilot):
* "Escreva testes unitários em Jest para a função calculateOrderTotal.
* Teste: pedido sem cupom, pedido com cupom, pedido com shipping, pedido vazio."
*/


const { calculateOrderTotal } = require('../src/orders');


test('subtotal sem cupom', () => {
const order = { items: [{ price: 10, quantity: 2 }, { price: 5, quantity: 1 }], shipping: 0 };
expect(calculateOrderTotal(order)).toBe(25);
});


test('aplica cupom percentual', () => {
const order = { items: [{ price: 100, quantity: 1 }], coupon: { percentage: 10 }, shipping: 0 };
expect(calculateOrderTotal(order)).toBe(90);
});
test('inclui shipping', () => {
const order = { items: [{ price: 20, quantity: 1 }], shipping: 5 };
expect(calculateOrderTotal(order)).toBe(25);
});


test('pedido vazio retorna 0', () => {
const order = {};
expect(calculateOrderTotal(order)).toBe(0);
});
