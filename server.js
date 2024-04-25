const express = require('express');
const bodyParser = require('body-parser');
const dbconfig = require('./config/db.config')
const mongoose = require('mongoose')
const app = express();
const port = 4000;
const equipementRouters = require('./routes/EquipementRoute');

// parse requests of content type application
app.use(bodyParser.urlencoded({extended:true}))

//parse requests of content type app json
app.use(bodyParser.json())

app.use('/api/equipements',equipementRouters)


//connection data base
mongoose.connect(dbconfig.url).then(()=>{
    console.log("successufuly connected");
}).catch(err=>{
    console.log('could not connect', err);
    process.exit();
})

app.get('/test1',(req,res)=>{
    res.json({"message": "hello node js"})
})

app.listen(port,()=>{
    console.log("node server is running in port 4000");
})