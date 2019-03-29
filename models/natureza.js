const mongoose = require("mongoose");
const Schema = mongoose.Schema; 


const Natureza = new Schema({

    nome: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    }
})

mongoose.model("naturezas", Natureza)