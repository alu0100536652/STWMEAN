var express = require('express'),
    app = express(),
    routesApi = require('./routes/apiroutes');

app.use(express.static(__dirname + '/public'));

app.use('/api/', routesApi);

app.get('*', function(req, res){
  res.sendFile('public/index.html' , { root : __dirname});
});

console.log("https://mean-davidcr.c9users.io");
app.listen(process.env.PORT || 3000, process.env.IP);