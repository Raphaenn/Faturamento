const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/natureza");
const Natureza = mongoose.model("naturezas")
require("../models/lancamento");
const Lancamento = mongoose.model("lancamentos");
require("../models/fornecedores")
const Fornecedor = mongoose.model("fornecedores")

//Rota de exibição da tabela principal
router.get("/geral", function(req, res) {
    Lancamento.find().populate("fornecedor").populate("natureza").sort({fornecedor:"asc"}).then((lancamentos) => {
        res.render("main/tabela", {lancamentos: lancamentos})
    }).catch((err) => {
        req.flash("error_msg", "Erro ao carregar tabelas")
        res.redirect("/base/geral")
    })
});

// Rota para carregar formulário de envio -- Propriedade sort definie como será organizada a base, por ordem alfabética, data e etc. 
router.get("/enviar", function(req, res) {
    Natureza.find().populate("naturezas").sort({nome:"asc"}).then((naturezas) =>{
        Fornecedor.find().populate("fornecedores").then((fornecedores)=>{
            res.render("main/enviar", {naturezas: naturezas, fornecedores: fornecedores});
        }).catch((err) => {
            req.falsh("error_msg", "Erro ao listar fornecedores")
            res.redirect("/base/geral")
        })
    }).catch((err) => {
        req.flash("error_msg", "Erro interno 403")
        res.redirect("/base/geral")
    })
    
});

router.post("/enviar/novo", function(req , res){

    var erros = [];

    if(!req.body.fornecedor || typeof req.body.fornecedor == undefined || req.body.fornecedor == null){
        erros.push({texto: "Fornecedor Inválido"});
    }

    if(!req.body.ordem || typeof req.body.ordem == undefined || req.body.ordem == null){
        erros.push({texto: "Ordem de Compra inválida"});
    }

    if(erros.length > 0){
        res.render("main/enviar", {erros: erros})

    }else{

        const novoLancamento = {
            empresa: req.body.empresa,
            fornecedor: req.body.fornecedor,
            tipo: req.body.tipo,
            justificativa: req.body.justificativa,
            centro: req.body.centro,
            unidade: req.body.unidade,
            natureza: req.body.natureza,
            nota: req.body.nota,
            ordem: req.body.ordem,
            emissao: req.body.emissao,
            competencia: req.body.competencia,
            responsavel: req.body.responsavel,
            vencimento: req.body.vencimento,
            recebimento: req.body.recebimento,
            valor: req.body.valor,
            ticket: req.body.ticket
        }

        new Lancamento(novoLancamento).save().then(() => {
            req.flash("success_msg", "Lançamento cadastrado com sucesso");
            res.redirect("/base/geral");
        }).catch(() => {
            req.flash("error_msg", "Erro ao cadastrar lançamento ")
            res.redirect("/base/geral")
        }) 

    }

});

// Rota para excluir lancamento
router.post("/geral/remover", function(req, res){
    Lancamento.remove({_id: req.body.id}).then(() =>{
        req.flash('success_msg', "Lançamento removido")
        res.redirect("/base/geral")
    }).catch((err) => {
        req.flash('error_msg', "Erro ao remover")
        res.redirect("/base/geral")
    })
})

//Rota para monstar lançamento a ser editado
router.get("/lancamento/editar/:id", function(req, res){
    Lancamento.findOne({_id: req.params.id}).populate("fornecedor").populate("natureza").then((lancamentos) =>{
        res.render("main/editlancamento", {lancamentos: lancamentos})
    }).catch((err) => {
        req.flash("error_msg", "Erro interno")
        res.redirect("/base/geral")
    })

})


// Rota de teste
router.get("/json", function(req, res) {
    Lancamento.find().then(lancamentos => res.json({lancamentos: lancamentos}));
});

// Rota de teste
router.get("/teste", function(req, res) {
    res.render("main/teste");
});



module.exports = router;


/* Lancamento.find().populate("fornecedor").populate("natureza").sort({fornecedor:"asc"}).then((lancamentos) => {
    res.render("main/tabela", {lancamentos: lancamentos})
}).catch((err) => {
    req.flash("error_msg", "Erro ao carregar tabelas")
    res.redirect("/base/geral")
}) */