const mongoose = require("mongoose");
const Schema = mongoose.Schema;


    const Lancamento = new Schema({

        empresa: {
            type: String,
            required: true
        },

        fornecedor: {
            type: Schema.Types.ObjectId,
            ref: "fornecedores",
            required: true
        },

        tipo: {
            type: String,
            required: true
        },

        justificativa: {
            type: String,
            required: true
        },

        centro: {
            type: String,
            required: true
        },

        unidade: {
            type: String,
            require: true
        },

        natureza: {
            type: Schema.Types.ObjectId,
            ref: "naturezas",
            required: true
        },

        nota: {
            type: String,
            required: true
        },
        
        ordem: {
            type: String,
            required: true
        },

        emissao: {
            type: Date,
            required: true
        },

        competencia: {
            type: String,
            required: true
        },

        responsavel: {
            type: String,
            required: true
        },

        vencimento: {
            type: Date,
            required: true
        },

        recebimento: {
            type: Date,
            required: true
        },

        valor: {
            type: Number,
            requered: true
        },

        date: {
            type: Date,
            default: Date.now()
        },

        ticket: {
            type: String,
            required: true
        }

    }) 


mongoose.model("lancamentos", Lancamento)