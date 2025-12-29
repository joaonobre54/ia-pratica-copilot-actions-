// src/index.js
const express = require('express');
const { calculateOrderTotal } = require('./orders');
const ordersData = require('../data/orders.json');
const app = express();
app.use(express.json());


app.get('/orders', (req, res) => {
res.json(ordersData);
});


app.get('/orders/:id/total', (req, res) => {
const id = req.params.id;
const order = ordersData.find(o => o.id === id);
if (!order) return res.status(404).json({ error: 'Order not found' });
const total = calculateOrderTotal(order);
res.json({ id, total });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
