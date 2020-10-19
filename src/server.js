//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const hbs = require('hbs')

//iniciando express
const server = express();

//utilizar body do request
server.use(express.urlencoded({extended: true}))

//utilizando arquivos estaticos
server.use(express.static('public'))

//configurar template views
server.set('views',path.join(__dirname, "views"))
server.set('view engine','hbs')

//
hbs.registerPartials(path.join(path.join(__dirname, "views"),"partials"));

//criar uma rota
server.get('/', pages.index )
server.get('/orphanage', pages.orphanage )
server.get('/orphanages', pages.orphanages )
server.get('/create-orphanage', pages.createOrphanage )
server.post('/save-orphanage', pages.saveOrphanage )

//ligar o servidor
server.listen(5500);