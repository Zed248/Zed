//Side bar show / hide
const sideBarBtn = document.querySelector('#side-bar-btn');
const sideBar = document.querySelector('.side-bar-container');

let menuOpen = false;

sideBarBtn.addEventListener('click', () => {
    if (!menuOpen) {
        sideBar.classList.add('active');
        menuOpen = true;
    } else {
        sideBar.classList.remove('active');
        menuOpen = false;
    }
})


// Mood action on / off
//Side bar show / hide
const moodBtn = document.querySelector('#mood-btn');
const moodBtnLabel = document.querySelector('#mood-label');
const body = document.querySelector('body');


moodBtn.addEventListener('click', () => {
    if (!menuOpen) {
        body.classList.add('active');
        moodBtn.className = "fa-solid fa-moon fa-1x";
        moodBtnLabel.innerText = "Dark";
        menuOpen = true;
    } else {
        body.classList.remove('active');
        moodBtn.className = "fa-solid fa-sun fa-1x";
        moodBtnLabel.innerText = "Light";
        menuOpen = false;
    }
})


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

