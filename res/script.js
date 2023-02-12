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
var msgBox = document.querySelector('.msgbox');
//Sign in Validation
logInButton.addEventListener('click', () => {

    let getLogInUserName = logInUserNameInput.value;
    let getLogInPassword = logInPasswordInput.value;

    //username checker
    if (logInUserName == getLogInUserName && logInPassword == getLogInPassword) {
        alert("Success....!");
        msgBox.innerHTML = "User Name : " + getLogInUserName + "Password : " + getLogInPassword;
        logInModelBox.classList.add('active');
    } else {
        alert("Tryagain....!");
        logInModelBox.style.display = "flex"
    }
})


//open ModelBox Back
var closeLogInModelBtn = document.querySelector('#close');
var logInNavToolCaller = document.querySelector('.sign-in-btn-show');

logInNavToolCaller.addEventListener('click', () => {
    logInModelBox.style.display = "flex";
})

closeLogInModelBtn.addEventListener('click', () => {
    logInModelBox.style.display = "none";
})
