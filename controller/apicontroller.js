var Guachinche = require('../model/guachinche')

exports.guachincheList = function(req, res) {
    Guachinche.find({}, function(err, Guachinche) {
        if (err) 
            throw err
        console.log(Guachinche)
        res.status(200).json(Guachinche)
    })
}

exports.guachinchePost = function(req, res) {
    console.log("Data: " + req.body)
    console.log("Nombre: " + req.body['name'])
    Guachinche.create({name: req.body['name'], direction: req.body['direction'], city: req.body['city']}, function(err, Guachinche){
        if(err) 
            res.status(200).json({ error: err.message })
        else 
            res.status(201).json({ message: 'Insertado correctamente' })
    })
}