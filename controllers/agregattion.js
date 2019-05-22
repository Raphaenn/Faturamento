


/*  Tetantiva de fazer agregação com dados do banco de lancamentos*/ 

const lancamentosA = require('../models/lancamento');

    module.exports = {
        getInformation() {

            let getAnalises = lancamentosA.aggregate([
                {
                    $group: {
                        _id: {competencia: '$competencia', total: {$sum: "$valor"}},
                    }
                }
            ]);


            return Promise.all([
                getAnalises
            ]).then(results  => {
                return {
                    getAnalises: results,
                };
            })

        }};
        


/*  Testes realiados direto no terminal do mongo*/ 


       /*  app.get('/analytics', (req, res, next) => {
            require('./analytics_service').getAnalytics()
                .then(analytics => res.render('analytics', { analytics }));
        }); */

        /* db.lancamentos.aggregate(     [          {$group: {_id: "$competencia", total: {$sum: "$valor"}}}     ] ) */