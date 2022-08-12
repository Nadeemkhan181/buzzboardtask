const mongoose = require('mongoose');
const express = require('express');
const app = express();  
const OrderRoute = require("./routes/Order");
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded

app.use(bodyParser.json({ type: 'application/json' }))

//Database Connection
mongoose.connect("mongodb+srv://nadeemKP:Amazon%40123@cluster0.au5ywhy.mongodb.net/testDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));



app.use('/', OrderRoute);

app.listen(5000, () => {
    console.log("Server listning on port 5000...")
})
