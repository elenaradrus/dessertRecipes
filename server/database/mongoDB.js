const mongoose = require('mongoose')

const connection = `mongodb://127.0.0.1:27017/DessertRecipes`;

mongoose.connect(connection)
.then(() => {
    console.log('MongoDB conectada');
})
.catch(() => {
    console.error(err);

})

module.exports = mongoose;