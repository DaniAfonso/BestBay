var config = {
    apiKey: "AIzaSyAQdLyUmyTiMDID_7TOWl5YCdjY3dDZgo4",
    authDomain: "bestbay-1519928307522.firebaseapp.com",
    databaseURL: "https://bestbay-1519928307522.firebaseio.com",
    storageBucket: "bestbay-1519928307522.appspot.com"
};
firebase.initializeApp(config);

var provider = null;

$(document).ready(function () {
    $('#loginFace').click(function () {
        provider = new firebase.auth.FacebookAuthProvider();
        abrirLoginProcess();
    });
    $('#loginGoogle').click(function () {
        provider = new firebase.auth.GoogleAuthProvider();
        abrirLoginProcess();
    });
    $('#loginTwitter').click(function () {
        provider = new firebase.auth.TwitterAuthProvider();
        abrirLoginProcess();
    });
    $('#loginGithub').click(function () {
        provider = new firebase.auth.GithubAuthProvider();
        abrirLoginProcess();
    });
});

function abrirLoginProcess() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
<<<<<<< HEAD
        $('.nav-wrapper').find('ul').first().hide();
        $('.nav-wrapper').children().first().after('<div id="usuarioRegistrado" style="position: absolute; display: flex; flex-flow: row wrap; width: 500px; margin-left: 60%;justify-content: space-between; align-items: center;"><img src="'+user.photoURL+'" style="width: 32px; height: 32px;"/><p>Bienvenido '+user.displayName+'</p><a id="logOut" class="waves-effect waves-light btn"><i class="material-icons left">&#xE879;</i>LogOut</a></div>');
        $('#logOut').click(function(){
            desloguearUsuario();
        });
    }).catch(function(error) {
=======
        $('.nav-wrapper').find('ul').first().empty();
        $('.nav-wrapper').children().first().after('<div style="display: flex; flex-flow: row wrap; width: 350px; margin-left: 600px; margin-top: 0px;justify-content: center; align-items: center;"><img src="' + user.photoURL + '" style="width: 32px; height: 32px;"/><p>Bienvenido ' + user.displayName + '</p>');
        // ...
    }).catch(function (error) {
>>>>>>> a45998567035e7dc37cabf97fcc3a1aea166b9f2
        var errorMessage = error.message;
        // Email por si decidimos sacar pantallazo de que esta mal el email
        var email = error.email;
        console.log(errorMessage);
    });
}

function desloguearUsuario(){
  firebase.auth().signOut().then(function() {
    $('.nav-wrapper').find('#usuarioRegistrado').remove();
    /*$('.nav-wrapper').children().first().after('<ul id="nav-mobile" className="right hide-on-med-and-down">' +
                                            '<li><h5>Login: </h5></li>' +
                                            '<li><a id="loginGithub"><img src="recursos/logos/github.png"/></a></li>'+
                                            '<li><a id="loginFace"><img src="recursos/logos/facebook.png"/></a></li>'+
                                            '<li><a id="loginTwitter"><img src="recursos/logos/twitter.png"/></a></li>'+
                                            '<li><a id="loginGoogle"><img src="recursos/logos/google.png"/></a></li>'+
                                            '</ul>');
    */
   $('.nav-wrapper').find('ul').first().show();
  }).catch(function(error) {
    console.log(error.message);
  });
}