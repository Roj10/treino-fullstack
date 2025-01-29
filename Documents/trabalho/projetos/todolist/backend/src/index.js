require('dotenv').config();

const express = require('express')
const mysql = require('mysql2')
const app = express()
const db = require('./db')

app.use(express.json());

app.post('/clientes', (req, res) => {
    const customer = request.body;
    db.insertcustomer(customer);
    res.sendStatus(201);
})

app.get('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.selectcustomer(id));
})

app.get('/clientes', (req, res) => {
    res.json(db.selectcustomers());
})

app.listen(process.env.PORT, () => {
    console.log('App is running');
});

app.get('/', (req, res)=>{
    res.json({
        message: 'it alive'
    })
})