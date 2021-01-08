var firebaseConfig = {
    apiKey: "AIzaSyBrCWl_uAQ1ymSIbyyD58mTHA91n8Qd82Y",
    authDomain: "november-movies-85178.firebaseapp.com",
    databaseURL: "https://november-movies-85178.firebaseio.com",
    projectId: "november-movies-85178",
    storageBucket: "november-movies-85178.appspot.com",
    messagingSenderId: "619279803723",
    appId: "1:619279803723:web:b1c2a364f9802f356474ce",
    measurementId: "G-0WDJ4N459B"
};
// Initialize Firebase/SDK
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

let buttonElement = document.getElementById('login-button');

buttonElement.addEventListener('click', onUserLogin)

function onUserLogin(e) {
    let usernameElement = document.getElementById('username');
    let passwrodElement = document.getElementById('password');
    let subHeaderElement = document.getElementById('sub-header');
    let loginFormElement = document.getElementById('login-form');

    auth.signInWithEmailAndPassword(usernameElement.value, passwrodElement.value)
        .then(res => {
            console.log('Successfuly logged in!');
            subHeaderElement.innerText = `Hello, ${res.user.email}`;
            loginFormElement.style.display = 'none';
        })
        .catch(err => {
            console.log('err:', err);
        })

}