const express =require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

app=express();

const port = process.env.PORT || 8080;

const corsOption = {
    origin:`http://localhost:${port}`
}


app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// to synchoronize the db
// const db = require("./models/index.js");
// db.sequelize.sync();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
res.send('<h1>Welcome to my web api</h1>');
})



app.listen(port,()=>{
    console.log('Le serveur est en ligne');
})