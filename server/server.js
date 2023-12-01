const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();
app.use(express.json()); 
app.use(cors());

mongoose.connect("mongodb://localhost:27017/video",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=> console.log("Database connected"))


app.listen(3001,()=> console.log("Server started"));