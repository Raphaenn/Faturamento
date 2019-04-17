const express = require("express");
const app = express();
const handlebars = require('express-handlebars'); //precisa instalar
const bodyparser = require('body-parser'); //precisa instalar
const path = require('path');
const adm = require("./routes/admin")
const index = require("./routes/home")
const main = require("./routes/painel")
const mongoose = require("mongoose"); //precisa instalar
const session = require('express-session'); // precisa instalar 
const flash = require('connect-flash'); // precisa instalar 
var hbs = require('handlebars'); // conectart para formatar datas


// Configurações
    //body-parsers
        app.use(bodyparser.urlencoded({extended:true}))
        app.use(bodyparser.json())

//Mongoose configuracao
mongoose.Promise = global.Promise; //Padrão
mongoose.connect("mongodb+srv://finance:321993@finance-wjml9.mongodb.net/test?retryWrites=true").then(() => {
    console.log("Conectado ao mongo");
}).catch((err) => {
    console.log("Erro ao conectar ao mongo"+err);
});

    //sessão
    app.use(session({
        secret: "sitenode",
        resave: true,
        saveUnitialized: true
    }))
    app.use(flash())
    
//middleware 
    app.use(function(req, res, next) {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })

   //handelebars
   hbs.registerHelper('dateFormat', require('handlebars-dateformat')); // linha para formatar datas
   app.engine('handlebars', handlebars({defaultLayout: 'main'}))
   app.set('view engine', 'handlebars');
   app.set('views', path.join(__dirname, 'views'));

//Public - Carregar uso das pastes js e css contidos na pasta public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/public'));

// Carregar rota principal
app.use("/", index);

// Carregar rota adminsitrativa 
app.use("/admin", adm);

// Carregar rota do painel
app.use("/base", main)

app.listen(3000, function() {
    console.log("Servidor rodando");
})




