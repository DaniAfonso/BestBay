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
    $(".button-collapse").sideNav();
    $('.loginFace').click(function () {
        provider = new firebase.auth.FacebookAuthProvider();
        openLoginProcess();
    });
    $('.loginGoogle').click(function () {
        provider = new firebase.auth.GoogleAuthProvider();
        openLoginProcess();
    });
    $('.loginTwitter').click(function () {
        provider = new firebase.auth.TwitterAuthProvider();
        openLoginProcess();
    });
    $('.loginGithub').click(function () {
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
        $('#logIcons').hide();
        $('#logUser, #logUserM').append(
            '<div class="usuarioRegistrado">'
            + '<li> <img src=' + user.photoURL + ' /> </li>'
            + ' <li> <p> ' + user.displayName + '</p> </li>'
            + ' <li> <a class="logOut waves-effect waves-light btn">Log Out</a> </li>'
            + '</div>');
        $('.logOut').click(function () {
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
        $('#logUser').find('.usuarioRegistrado').remove();
        $('#logUserM').find('.usuarioRegistrado').remove();
        $('#logIcons').show();
    }).catch(function (error) {
        console.log(error.message);
    });
}