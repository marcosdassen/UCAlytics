var express = require("express")
var app = express()
var path = require("path")
const mongo= require("mongodb").MongoClient;
const URL="mongodb://localhost:27017/airportdb"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})
app.use(express.static("public"))


mongo.connect(URL, function(err,db){
    if(err){console.log("failed");return}
    console.log("connected");
});


app.get("/report", (req, res) => res.send({
        
}))

app.listen(3000)