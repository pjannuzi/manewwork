const express = require("express");
const app = express();
const path = require("path");

    //Public
    app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});