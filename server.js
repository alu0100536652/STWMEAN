var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routesApi = require('./server/routes/apiroutes')
    
    
var mongoose = require('mongoose')
mongoose.connect("mongodb://davidcr-mean-2151856:27017/test", function(err) {
    if(err) {
        console.log('connection error', err)
    } else {
        console.log('connection successful')
    }
})

app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())

app.use('/api/', routesApi)

app.get('*', function(req, res){
  res.sendFile('/client/index.html' , { root : __dirname})
});

console.log("https://mean-davidcr.c9users.io")
app.listen(process.env.PORT || 8081, process.env.IP)