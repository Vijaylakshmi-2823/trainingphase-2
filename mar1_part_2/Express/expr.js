var express = require("express");
var app = express();
app.get("/",(req,res)=>{
    res.send("My first Service in Express...");
})

app.get("/viju",(req,res)=>{
    res.send("Hi I am Vijaylakshmi...");
})

app.get("/show/:name",(req,res)=>{
    const name=req.params.name;
    res.send("Hi Welcome to "+name);
})

app.listen(1111,(req,res)=>{
    console.log("Node Js Application started...");
})