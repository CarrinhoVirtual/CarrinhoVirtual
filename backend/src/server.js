const express = require('express');
//express é um microframework, ajuda na definição de rotas
const routes = require('./routes');
//precisa do ./ (caminho relativo) senão ele busca o módulo routes
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://carrinho:carrinho@carrinho-8kxeg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

app.use(express.json()); //falar pro express usar formato json, senão n funcionar
app.use(routes);



app.listen(3333);