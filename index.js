const express =require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

app=express();

const port = process.env.PORT || 8000;

const corsOption = {
    origin:`http://localhost:${port}`
}


 

// parse requests of content-type - application/json
app.use(bodyParser.json());

//to synchoronize the db
// const db = require("./models/index.js");
// db.sequelize.sync();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: 1 }));

// app.get('/', (req, res)=>{
// res.send('<h1>Welcome to my web api</h1>');
// })


require("./route/parking.route")(app);


app.listen(port,()=>{
    console.log('Le serveur est en ligne');
})