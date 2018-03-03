/** 
 * Array asociativo con la configuracion de los login
*/
let config = {
    apiKey: "AIzaSyAQdLyUmyTiMDID_7TOWl5YCdjY3dDZgo4",
    authDomain: "bestbay-1519928307522.firebaseapp.com",
    databaseURL: "https://bestbay-1519928307522.firebaseio.com",
    storageBucket: "bestbay-1519928307522.appspot.com"
};

/** 
 * Tipo de login a utilizar, se asigna dependiendo del 
 * login que elija el usuario
*/
let provider = null;

/** 
 * Inicializa los login, asignando los click que correspondan
*/
function initLogin() {
    firebase.initializeApp(config);

    $('#loginFace').click(function () {
        provider = new firebase.auth.FacebookAuthProvider();
        openLoginProcess();
    });
    $('#loginGoogle').click(function () {
        provider = new firebase.auth.GoogleAuthProvider();
        openLoginProcess();
    });
    $('#loginTwitter').click(function () {
        provider = new firebase.auth.TwitterAuthProvider();
        openLoginProcess();
    });
    $('#loginGithub').click(function () {
        provider = new firebase.auth.GithubAuthProvider();
        openLoginProcess();
    });
}

/** 
 * Abre el proceso de login que corresponda con el hecho click
*/
function openLoginProcess() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        let token = result.credential.accessToken;
        let user = result.user;
        console.log(user);
        $('.nav-wrapper').find('ul').first().hide();
        $('.nav-wrapper').children().first().after('<div id="usuarioRegistrado" style="position: absolute; display: flex; flex-flow: row wrap; width: 500px; margin-left: 60%;justify-content: space-between; align-items: center;"><img src="' + user.photoURL + '" style="width: 32px; height: 32px;"/><p>Bienvenido ' + user.displayName + '</p><a id="logOut" class="waves-effect waves-light btn"><i class="material-icons left">&#xE879;</i>LogOut</a></div>');
        $('#logOut').click(function () {
            logOut();
        });
    }).catch(function (error) {
        let errorMessage = error.message;
        // Email por si decidimos sacar pantallazo de que esta mal el email
        let email = error.email;
        console.log(errorMessage);
    });
}

/** 
 * Desloguea la cuenta que esté iniciada para posteriormente volver
 * a iniciar con otra cuenta 
*/
function logOut() {
    firebase.auth().signOut().then(function () {
        $('.nav-wrapper').find('#usuarioRegistrado').remove();
        $('.nav-wrapper').find('ul').first().show();
    }).catch(function (error) {
        console.log(error.message);
    });
}