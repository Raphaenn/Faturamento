
 const mongoose = require("mongoose");

db.lancamentos.aggregate(
    [
        {$match: {} },
        {$group: {_id: "$competencia", total: {$sum: "$valor"}}}
    ]
)

mongoose.model("fornecedores", Fornecedor); 

/* var id = global.actuallUser._doc._id;
            id = id.toString();
            global.databaseStatistic.collection(global.ARTICLEPRESS).aggregate(
                    [
                        {$match: {
                                $and: [
                                    {
                                        store: id,
                                        date: {
                                            $gte: new Date('12/01/2013'),
                                            $lte: new Date('12/01/2017')
                                        }
                                    }
                                ]
                            }},
                        {$group: {"_id": {name: "$name", day: {$dayOfMonth: "$date"},month: {$month: "$date"},year: {$year: "$date"}}, "count": {$sum: 1}}}
                    ]
                    ).toArray(function (err, result) {
                res.send(result);
            }); */