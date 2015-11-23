var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routesApi = require('./routes/apiroutes')
    
    
var mongoose = require('mongoose')
mongoose.connect("mongodb://davidcr-mean-2151856:27017/test", function(err) {
    if(err) {
        console.log('connection error', err)
    } else {
        console.log('connection successful')
    }
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.use('/api/', routesApi)

app.get('*', function(req, res){
  res.sendFile('public/index.html' , { root : __dirname})
});

console.log("https://mean-davidcr.c9users.io")
app.listen(process.env.PORT || 3000, process.env.IP)