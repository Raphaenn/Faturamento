const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/usuarios");
const Usuario = mongoose.model("usuarios");
const bcrypt = require("bcryptjs");

router.get("/", function(req, res) {
    res.render("home/index");
});

// ******************* REGISTRAR NOVO USUÁRIO **********************//

router.get("/registro", function(req, res) {
    res.render("home/registro")
});

router.post("/registrar", function(req, res) {
    
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({texto: "Nome inválido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "Email inválido"})
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
        erros.push({texto: "Senha inválida"})
    }

    if(req.body.senha.length < 4) {
        erros.push({texto: "Senha muito curta"})
    }

    if(req.body.senha != req.body.senha2) {
        erros.push({texto: "Senhas diferentes, tente novamente"})
    }

    if(erros.length > 0) {

        res.render("home/registro", {erros: erros});

    }else {

        Usuario.findOne({email: req.body.email}).then((usuario) => {
            
            if(usuario) {
                req.flash("error_msg", "Usuário já cadastrado")
                res.redirect("/registro")
            }else {

                const novoUsuario = new Usuario ({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })

                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                        if(erro) {
                            req.flash("error_msg", "Erro ao salvar usuário")
                            res.redirect("/registro")
                        }

                        novoUsuario.senha = hash

                        novoUsuario .save().then(() => {
                            req.flash("success_msg", "Usuário cadastrado com sucesso")
                            res.redirect("/")
                        }).catch((err) => {
                            req.flash("error_msg", "Houve um erro ao criar usuário - 102")
                            res.redirect("/registro")
                        })

                    })
                })

            }
        }).catch((err) =>{
            req.flash("error_msg", "Houve um erro interno - 101")
            res.redirect("/registro")
        })

    }

});

module.exports = router;