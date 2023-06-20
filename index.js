var express = require('express'); 

const app = express(); 

app.get('/', function(req, res){
    res.json({'hello': 'World'})
})

app.get('/nobuhle', function(req,res){
    res.json({"hello": "Nobuhle"}); 
})

app.get('/app', function(req, res){
    res.json({'app': 'here'})
})

app.get('/gideon', function(req, res){
    res.json({"Hello ": "Gideon"}); 
})

app.listen(3000, function(){
    console.log('app now running on port 3000'); 
    console.log('we added a new branch'); 
})





