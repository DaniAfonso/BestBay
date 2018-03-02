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
        $('.nav-wrapper').find('ul').first().empty();
        $('.nav-wrapper').children().first().after('<div style="display: flex; flex-flow: row wrap; width: 350px; margin-left: 600px; margin-top: 0px;justify-content: center; align-items: center;"><img src="' + user.photoURL + '" style="width: 32px; height: 32px;"/><p>Bienvenido ' + user.displayName + '</p>');
        // ...
    }).catch(function (error) {
        var errorMessage = error.message;
        // Email por si decidimos sacar pantallazo de que esta mal el email
        var email = error.email;
        console.log(errorMessage);
    });
}
/*
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });*/
/*
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
     <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a id="loginGithub"><img src="recursos/logos/github.png"/>Login GitHub</a>
                        </li>
                        <li>
                            <a id="loginFace"><img src="recursos/logos/facebook.png"/>Login Facebook</a>
                        </li>
                        <li>
                            <a id="loginTwitter"><img src="recursos/logos/twitter.png"/>Login Twitter</a>
                        </li>
                        <li>
                            <a id="loginGoogle"><img src="recursos/logos/google.png"/>Login Google</a>
                        </li>
                    </ul>
  }).catch(function(error) {
    // An error happened.
  });*/