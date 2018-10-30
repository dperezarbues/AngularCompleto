'use strict'
var express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

var song1 = {"id": 1,"nombre": "Cancion 1","duracion": 350,"fechaAlta": "2017-10-21"};
var song2 = {"id": 2,"nombre": "Cancion 2","duracion": 260,"fechaAlta": "2017-10-22"};
var song3 = {"id": 3,"nombre": "Cancion 3","duracion": 280,"fechaAlta": "2017-10-23"};

var songs = [song1, song2, song3];

// ******************************************************************
//                      Método GET 
// ******************************************************************
app.get('/canciones', function(req, res) {
    console.log("Entramos en GET");
    res.set('Content-Type','application/json');
    res.end(JSON.stringify(songs));
});

// ******************************************************************
//                      Método GET ByID
// ******************************************************************
app.get('/canciones/:id', function (req, res) {
    var id = req.params.id;
    var resultado = null;
    var song = null;
    console.log("Entramos en GET ById: " + id);

    for(song of songs){
        if (id == song.id){
            resultado = song;
            res.set('Content-Type','application/json');
            res.end(JSON.stringify(resultado));
            return; 
        }
    };

    // TODO Aquí lógica de "no se ha encontrado...";
});

// ******************************************************************
//                      Método POST
// ******************************************************************
app.post('/canciones/', function (req, res){
    res.set('Content-Type','application/json');
    console.log("Entramos en POST");
    const newSong = req.body;
    
    for(var i = 0; i< songs.length; i++){
        // Miramos que no exista otra canción con ese id....
    }

    songs.push(newSong);
    res.end(JSON.stringify(newSong));

    // TODO Resolver que no exista la canción...
});

// ******************************************************************
//                      Método PUT
// ******************************************************************
app.put('/canciones', function (req, res){
    res.set('Content-Type','application/json');
    console.log("Entramos en PUT");
    const updatedSong = req.body;
    //res.set('Content-Type','application/json');

    for(var i = 0; i< songs.length; i++){
        if (updatedSong.id == songs[i].id){
            songs[i] = updatedSong;
            res.send(JSON.stringify(updatedSong));
            return;
        }
    }

    // TODO Resolver qué hacer cuando no exista la canción...
});

// ******************************************************************
//                      Método DELETE
// ******************************************************************
app.delete('/canciones/:id', function (req, res) {
    res.set('Content-Type','application/json');
    var id = req.params.id;
    var deletedSong = null;
    console.log("Entramos en DELETE: " + id);

    for(var i = 0; i< songs.length; i++){
        if (id == songs[i].id){
            deletedSong = songs[i];
            songs.splice(i,1);
            res.send(JSON.stringify(deletedSong));
            return;
        }
    }

    // TODO Resolver qué hacer cuando no exista la canción a eliminar
});


var port = 3000;

var server = app.listen(port, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("App is listening at the http://%s:%s", host, port);
    console.log("******************************************************************************************");
    console.log("*                                                                                        *");
    console.log("*          SERVIDOR CANCIONES V 1.0 EN MARCHA                                            *");
    console.log("*                                                                                        *");
    console.log("*          Ctrl-C para detener                                                           *");
    console.log("*                                                                                        *");
    console.log("*                                                                                        *");
    console.log("******************************************************************************************");
});