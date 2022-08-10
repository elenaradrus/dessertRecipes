require('express');
const mongo = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/DessertRecipes';
//si teneis windows cambiad la url
const MongoClient = mongo.MongoClient;
const dataBase = "DessertRecipes";
const collection = "Recipes";


const user = {
    recipes: (req, res) => {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(dataBase);
            //var query = { "lugar": "Tenerife" };
            dbo.collection(collection).find().toArray(function (err, result) {
                if (err) throw err;
                if(result) {
                    res.json({ code: 200, message: result, satus: true });
                    // console.log(result);
                    // res.send({result});
                };
                //db.close();
            });
        });
    }
};

module.exports = user;