const express = require('express');
//const { route } = require('./routes/routes');

require('./database/mongoDB');

const router =require("./routes/routes")

const app = express();

app.use(express.json());
app.use("/", router);

const port = 5050;

app.listen(port , console.log("Sevidor escuchando en puerto "+ port))