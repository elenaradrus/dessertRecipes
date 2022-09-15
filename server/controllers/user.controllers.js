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
            const dbo = db.db(dataBase);
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
            const dbo = db.db(dataBase);
            const query = { "_id": ObjectId(recipeId)};
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
            const dbo = db.db(dataBase);
            const query = { "tags": recipeTag};
            dbo.collection(collection).find(query).toArray(function (err, result) {
                if (err) throw err;
                //console.log(result);
                res.json({code: 200, message: result, status: true});
                //db.close();
            });
        });
    },
    addRecipe: (req, res) => {
        const {
            newRecipeName,
            newRecipeDescription,
            splitIngredients,
            splitTags,
            newRecipeHowTo
        } = req.body;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db(dataBase);
            const newRecipe = { 
                "name": newRecipeName,
                "description": newRecipeDescription,
                "ingredients": splitIngredients,
                "tags": splitTags,
                "steps": newRecipeHowTo
            };
    
            dbo.collection(collection).insertOne(newRecipe, function (err, result) {
                if (err) throw err;
                res.json({code: 200, message: "Receta añadida correctamente", status: true});
                console.log("Documento insertado");
                db.close();
            });
        });
    }
};

module.exports = user;