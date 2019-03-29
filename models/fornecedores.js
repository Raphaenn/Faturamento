const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    const Fornecedor = new Schema({

        nome: {
            type: String,
            required: true
        },

        localidade: {
            type: String,
            required: true
        },

        cnpj: {
            type: String,
            required: true
        }
    })

mongoose.model("fornecedores", Fornecedor);