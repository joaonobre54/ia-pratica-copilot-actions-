// src/orders.js
// Exemplo de função de negócio gerada com GitHub Copilot (simulação)


/**
* Prompt usado com Copilot (inserir como comentário):
* "Crie uma função em JavaScript que calcule o total de um pedido.
* O pedido tem itens com {price, quantity} e pode haver um cupom de desconto
* que aplica percentual sobre o subtotal. Retorne o total arredondado em 2 casas."
*/


function calculateOrderTotal(order) {
const subtotal = (order.items || []).reduce((acc, it) => acc + (it.price * it.quantity), 0);
const discount = order.coupon ? (subtotal * (order.coupon.percentage / 100)) : 0;
const shipping = order.shipping || 0;
const total = subtotal - discount + shipping;
return Number(total.toFixed(2));
}


module.exports = { calculateOrderTotal };
