//for Log in & Sign up System
//Hide and show sign up and sign in section
const signUpSectionHeading = document.querySelector('#up');
const signInSectionHeading = document.querySelector('#in');
const signUpSection = document.querySelector('#sign-up');
const signInSection = document.querySelector('#sign-in');

signUpSectionHeading.addEventListener('click', () => {
    signUpSection.classList.add('active');
    signInSection.classList.remove('active');
    signUpSectionHeading.classList.add('active');
    signInSectionHeading.classList.remove('active');
})

signInSectionHeading.addEventListener('click', () => {
    signInSection.classList.add('active');
    signUpSection.classList.remove('active');
    signUpSectionHeading.classList.remove('active');
    signInSectionHeading.classList.add('active');
})

//Log in access identification
var logInModelBox = document.querySelector('.log-in-model-box-container');
var logInUserName = "zed";
var logInPassword = "sharing";
var logInUserNameInput = document.querySelector('#input-sign-in-username');
var logInPasswordInput = document.querySelector('#input-sign-in-password');
var logInButton = document.querySelector('#sign-in-btn');

//msgBox
var msgBox = document.querySelector('.msg-box');
//Sign in Validation
logInButton.addEventListener('click', () => {

    let getLogInUserName = logInUserNameInput.value;
    let getLogInPassword = logInPasswordInput.value;

    //username checker
    if (logInUserName == getLogInUserName && logInPassword == getLogInPassword) {
        msgBox.innerHTML = "User Name : " + getLogInUserName + "| Password : " + getLogInPassword;
        logInModelBox.style.display = "none";
        logInNavToolCaller.innerHTML = "Admin Account";
        logInNavToolCaller.style.cssText = "background-color: green; color: white";
        msgBox.classList.add('active');
        alert("You have access Admin User Account!" + " Username: " + logInUserName + "| Password: " + logInPassword + "! You can enjoy using our blog. Thanks!")
        console.log("click log-in true")
    } else {
        msgBox.innerHTML = "Wrong Entry Information! Try again!";
        logInModelBox.style.display = "flex";
        // location.reload();
        console.log("click log-in but wrong")
    }
})


//open ModelBox Back
var signUpNavigatorForSignIn = document.querySelector('#sign-up-navigator');
var closeLogInModelBtn = document.querySelector('#close');
var logInNavToolCaller = document.querySelector('.sign-in-btn-show');

logInNavToolCaller.addEventListener('click', () => {
    logInModelBox.style.display = "flex";
})

closeLogInModelBtn.addEventListener('click', () => {
    logInModelBox.style.display = "none";
})

signUpNavigatorForSignIn.addEventListener('click', () => {
    signUpSection.classList.add('active');
    signInSection.classList.remove('active');
    signUpSectionHeading.classList.add('active');
    signInSectionHeading.classList.remove('active');
})



//Hamburger Btn action
const hamburger = document.querySelector('.hamburger');
const hamBtn = document.querySelector('.hamburger-btn');

let menuOpen = false;

hamburger.addEventListener('click', () => {
    if(!menuOpen) {
        hamBtn.classList.add('active');
        menuOpen = true;
    } else {
        hamBtn.classList.remove('active');
        menuOpen = false;
    }
})
