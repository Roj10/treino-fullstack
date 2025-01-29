const clientes = [{
    id: 1,
    nome: 'renan',
    idade: '18'
}]

function selectcustomers(){
    return clientes;
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