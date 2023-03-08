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
var checkBox1 = document.querySelector('.agree-checkbox-sign-in');

//Sign in Validation
logInButton.addEventListener('click', () => {

    let getLogInUserName = logInUserNameInput.value;
    let getLogInPassword = logInPasswordInput.value;

    //username checker
    if (logInUserName == getLogInUserName && logInPassword == getLogInPassword && checkBox1.checked == true) {
        msgBox.innerHTML = "User Name : " + getLogInUserName + "| Password : " + getLogInPassword;
        logInModelBox.classList.add('active');
        logInNavToolCaller.innerHTML = "Admin Account";
        logInNavToolCaller.style.cssText = "background-color: green; color: white";
        msgBox.classList.add('active');
        alert("You have access Admin User Account!" + " Username: " + logInUserName + "| Password: " + logInPassword + "! You can enjoy using our blog. Thanks!")
        console.log("click log-in true");
    } else {
        msgBox.innerHTML = "Wrong Entry Information! Try again!";
        logInModelBox.classList.remove('active');
        alert("You need to agree our pravicy policies");
        location.reload();
        console.log("click log-in but wrong")
    }
})




// //Hamburger Btn action
// const hamburger = document.querySelector('.hamburger');
// const hamBtn = document.querySelector('.hamburger-btn');
// const nav_link = document.querySelector('.side-bar');

// let menuOpen = false;

// hamburger.addEventListener('click', () => {
//     if (!menuOpen) {
//         hamBtn.classList.add('active');
//         nav_link.classList.add('active');
//         menuOpen = true;
//     } else {
//         hamBtn.classList.remove('active');
//         nav_link.classList.remove('active');
//         menuOpen = false;
//     }
// })

//Top bar sticky

// window.onscroll = function() {myFunction()};
// var nav = document.querySelector('.side-bar');

// var sticky = nav.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add("sticky")
//   } else {
//     nav.classList.remove("sticky");
//   }
// }

