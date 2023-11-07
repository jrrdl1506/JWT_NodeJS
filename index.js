const express = require('express');

const cors = require("cors");
const conectarDB = require('./config/db');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")

conectarDB();
app.use(cors({
    credentials:true,//Permite compartir la cookie del jwt
    origin:'http://localhost:4200' //url del front
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use('/api',require('./routes/routes'));

app.listen(4000,()=>{
    console.log('El servidor esta corriendo perfectamente');
});