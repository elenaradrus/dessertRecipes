require('express');
const mongo = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/DessertRecipes';
//si teneis windows cambiad la url
const MongoClient = mongo.MongoClient;
const dataBase = "DessertRecipes";
const collection = "Recipes";
var ObjectId = require('mongodb').ObjectId;


const user = {
    recipes: (req, res) => {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(dataBase);
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
    },
    showRecipe: (req, res) => {

        const recipeId = req.body.recipeId;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(dataBase);
            var query = { "_id": ObjectId(recipeId)};
            dbo.collection(collection).find(query).toArray(function (err, result) {
                if (err) throw err;
                //console.log(result);
                res.json({code: 200, message: result, status: true});
                //db.close();
            });
        });
    },
    findRecipe: (req, res) => {

        const recipeTag = req.body.recipeTag;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(dataBase);
            var query = { "tags": recipeTag};
            dbo.collection(collection).find(query).toArray(function (err, result) {
                if (err) throw err;
                //console.log(result);
                res.json({code: 200, message: result, status: true});
                //db.close();
            });
        });
    }
};

module.exports = user;