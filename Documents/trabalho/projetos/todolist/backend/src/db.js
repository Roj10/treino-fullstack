const mysql = require('mysql2/promise');

const clientes = mysql.createPool(process.env.CONNECTION_STRING);

async function selectcustomers(){
    const results = await clientes.query("SELECT * FROM clientes;");
    return results(0);
}

function selectcustomer(id){
    return clientes.find(c => c.id === id);
}

function insertcustomer(customer){
    customer.push(customer);
}

module.exports = {
    selectcustomers,
    selectcustomer,
    insertcustomer
}