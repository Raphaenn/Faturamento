const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/natureza");
const Natureza = mongoose.model("naturezas")
require("../models/fornecedores");
const Fornecedor = mongoose.model("fornecedores")
require("../models/lancamento");
const Lancamento = mongoose.model("lancamentos");


// Categorias são referentes aos itens do Oracle
router.get("/categorias", function(req, res) {
    Natureza.find().sort({nome:"asc"}).then((naturezas) => {
        res.render('admin/categorias', {naturezas: naturezas})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias!")
    })
})

router.get("/addcategorias", function(req, res) {
    res.render("admin/addcategoria")
})

// Salvar cadastros de natureza no banco de dados
router.post("/categorias/nova", function(req, res){
    
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido!"})
    }

    if(!req.body.area || typeof req.body.area == undefined || req.body.area == null){
        erros.push({texto: "Área inválida"})
    }

    if(req.body.nome.length <=2 || req.body.area <=2){
        erros.push({texto: "Nome muito pequeno"})
    }

    if(erros.length > 0) {
        res.render("admin/addcategoria", {erros: erros})

    }else{

        const novaNatureza = {
            nome: req.body.nome,
            area: req.body.area
        } 

        new Natureza(novaNatureza).save().then(() => {
            req.flash("success_msg", "Natureza cadastrada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err) =>{
            req.flash("error_msg", "Erro ao cadastrar categoria!")
            res.redirect("/admin/categorias")
        })

    }

})

//Rota para monstar item a ser editado
router.get("/categorias/editar/:id", function(req, res){
    Natureza.findOne({_id: req.params.id}).then((naturezas) => {
        res.render("admin/editarcategorias", {naturezas: naturezas})
    }).catch((err) => {
        req.flash("error_msg", "Erro interno")
        res.redirect("/admin/categorias")
    })
})

//Rota para editar item selecionado na rota acima
router.post("/categorias/editar", function(req, res) {
    
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido!"})
    }

    if(!req.body.area || typeof req.body.area == undefined || req.body.area == null){
        erros.push({texto: "Área inválida"})
    }

    if(req.body.nome.length <=2 || req.body.area <=2){
        erros.push({texto: "Nome muito pequeno"})
    }

    if(erros.length > 0) {
        res.render("admin/categorias", {erros: erros})

    }else {
        Natureza.findOne({_id: req.body.id}).then((naturezas)=> {

            naturezas.nome = req.body.nome,
            naturezas.area = req.body.area

        naturezas.save().then(() => {
            req.flash("success_msg", "Natureza editada com sucesso")
            res.redirect("/admin/categorias")
        }).catch((err) =>{
            req.flash("error_msg", "Erro ao editar natureza")
            res.redirect("/admin/categorias")
        })
        }).catch((err) =>{
            req.flash("error_msg", "Erro interno 2")
        })
    }

    
})

// Rota para remover item selecionado
router.post("/categorias/remove", function(req, res) {
    Natureza.remove({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Natureza removida com successo")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        req.flash("error_msg", "Errou ao remover natureza")
    })
})


//************************************************************************************************************** */

// Rota para cadastro da empresa 
router.get("/fornecedores", function(req, res) {
    Fornecedor.find().sort({nome:"asc"}).then((fornecedores)=>{
        res.render("admin/fornecedor", {fornecedores: fornecedores})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar os forneceres!")
        res.redirect("/main/home")
    })
})

// Rota para listar posts pertencentes a uma determinada categoria
router.get("/fornecedores/:nome", function(req, res) {
    Fornecedor.findOne({nome: req.params.nome}).then((fornecedor) => {
        if(fornecedor){

            Lancamento.find({fornecedor: fornecedor._id}).populate("fornecedor").populate("natureza").then((lancamentos) => {
                res.render("admin/detalhe", {fornecedor: fornecedor, lancamentos: lancamentos})

            }).catch((err) => {
                req.flash("error_msg", "Erro interno")
                res.redirect("/admin/fornecedores")
            })

        }else {
            req.flash("error_msg", "Houve um erro ao carregar postagem")
            res.redirect("/admin/fornecedores")
        }
    }).catch((err) => {
        req.flash("error_msg", "Erro 404")
        res.redirect("/admin/fornecedores")
    })
})


// Carregar formulario de add fornecedor
router.get("/addfornecedor", function(req, res) {
    res.render("admin/addfornecedor")
})

// Cadastrar novo fornecedor
router.post("/fornecedor/novo", function(req, res){

    var erros = [];

    if(!req.body.nome ||  typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome invalido"})
    }

    if(req.body.nome.length <=2 || req.body.area <=2){
        erros.push({texto: "Nome muito pequeno"})
    }

    if(erros.length > 0) {
        res.render("admin/fornecedor", {erros: erros})

    }else {

        const novoFornecedor = {
            nome: req.body.nome,
            localidade: req.body.localidade,
            cnpj: req.body.cnpj
        } 

        new Fornecedor(novoFornecedor).save().then(() => {
            req.flash("success_msg", "Fornecedor cadastrado com sucesso!")
            res.redirect("/admin/fornecedores")
        }).catch((err) =>{
            req.flash("error_msg", "Erro ao cadastrar categoria!")
            res.redirect("/admin/fornecedores")
        })

    }


})

// Rota para excluir fornecedor 
router.post("/fornecedor/remove", function(req, res){
    Fornecedor.remove({_id: req.body.id}).then(() =>{
        req.flash("success_msg", "Fornecedor excluido")
        res.redirect("/admin/fornecedores");
    }).catch((err) => {
        req.flash("error_msg", "Erro ao tentar remover fornecedor")
    })
})


module.exports = router;