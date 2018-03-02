import React, { Component } from 'react';
import { RenderizarR } from './components/layout/'

 import './css/materialize.min.css';
import './css/simplePagination.css';




var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAQdLyUmyTiMDID_7TOWl5YCdjY3dDZgo4",
    authDomain: "bestbay-1519928307522.firebaseapp.com",
    databaseURL: "https://bestbay-1519928307522.firebaseio.com",
    storageBucket: "bestbay-1519928307522.appspot.com"
};
firebase.initializeApp(config);
//Framework de Express
//var express = require('express');
/*
//Carpeta contenedora de archivo index.
//var routes = require('./components/layout');
//var path = require('path');

// Passport: Middleware de Node que facilita la autenticación de usuarios
var passport = require('passport');

// Importamos la configuración de passport
require('./passport')(passport);

// Iniciamos la aplicación Express
var app = express();

// Middlewares de Express que nos permiten enrutar y poder
// realizar peticiones HTTP (GET, POST, PUT, DELETE)
app.use(express.cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.methodOverride());

// Configuración de Passport. Lo inicializamos
// y le indicamos que Passport maneje la Sesión
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

// Si estoy en local, le indicamos que maneje los errores
// y nos muestre un log más detallado
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
  }

  /* Rutas de la aplicación */
// Cuando estemos en http://localhost:puerto/ (la raiz) se ejecuta el metodo index
// del modulo 'routes'
//app.get('/', routes.index);

/* Rutas de Passport */
// Ruta para desloguearse
/*app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Ruta para autenticarse con Twitter (enlace de login)
app.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
app.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta para autenticarse con Google (enlace de login)
app.get('/auth/google', passport.authenticate('google'));
// Ruta para autenticarse con Facebook (enlace de login)
app.get('/auth/github', passport.authenticate('github'));

// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/twitter/callback', passport.authenticate('twitter',
  { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con Google.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/google/callback', passport.authenticate('google',
  { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con GitHub.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/github/callback', passport.authenticate('github',
  { successRedirect: '/', failureRedirect: '/login' }
));

// Inicio del servidor
app.listen(app.get('port'), function(){
  console.log('Aplicación Express escuchando en el puerto ' + app.get('port'));
});*/

class App extends Component {
    render() {
        return (
          <RenderizarR/>        
        );
    }
}

export default App;