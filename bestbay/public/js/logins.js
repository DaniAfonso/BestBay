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
        $('.nav-wrapper').find('ul').first().hide();
        $('.nav-wrapper').children().first().after('<div id="usuarioRegistrado" style="position: absolute; display: flex; flex-flow: row wrap; width: 500px; margin-left: 60%;justify-content: space-between; align-items: center;"><img src="' + user.photoURL + '" style="width: 32px; height: 32px;"/><p>Bienvenido ' + user.displayName + '</p><a id="logOut" class="waves-effect waves-light btn"><i class="material-icons left">&#xE879;</i>LogOut</a></div>');
        $('#logOut').click(function () {
            desloguearUsuario();
        });
    }).catch(function (error) {
        var errorMessage = error.message;
        // Email por si decidimos sacar pantallazo de que esta mal el email
        var email = error.email;
        console.log(errorMessage);
    });
}

function desloguearUsuario() {
    firebase.auth().signOut().then(function () {
        $('.nav-wrapper').find('#usuarioRegistrado').remove();
        $('.nav-wrapper').find('ul').first().show();
    }).catch(function (error) {
        console.log(error.message);
    });
}