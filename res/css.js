/* This is license to Rakkha Lin Maung */
    var r = document.querySelector('.redc');
    var g = document.querySelector('.greenc');
    var b = document.querySelector('.bluec');
    var cExtCode = document.querySelector('.c-ext-code');
    var extBox = document.querySelector('.color-ext-model-box');

function loop() {
    requestAnimationFrame(loop)
    let getRed = r.value;
    let getGreen = g.value;
    let getBlue = b.value;
    

    extBox.style.backgroundColor = "rgb(" + getRed + ", " + getGreen + ", " + getBlue +")";
    cExtCode.value = extBox.style.backgroundColor
}


loop()


function flex_center() {
    const display = document.querySelector('.model-box-container-display');
    let display_input = document.querySelector('.display-code-display');
    display.style.cssText = "align-items: center; justify-content: center";
    display_input.value = 'display: flex; justify-content: center; align-items: center'
    console.log("flex-center")
}


function flex_start() {
    const display = document.querySelector('.model-box-container-display');
    let display_input = document.querySelector('.display-code-display');
    display.style.cssText = "align-items: flex-start";
    display_input.value = 'display: flex; justify-content: flex-start; align-items: flex-start'
    console.log("flex-center")
}

function flex_row() {
    const display = document.querySelector('.model-box-container-display');
    let display_input = document.querySelector('.display-code-display');
    display.style.cssText = "align-items: left; flex-direction: row";
    display_input.value = 'display: flex; flex-direction: row'
    console.log("flex-center")
}

function flex_column() {
    const display = document.querySelector('.model-box-container-display');
    let display_input = document.querySelector('.display-code-display');
    display.style.cssText = "flex-direction: column";
    display_input.value = "flex-direction: column"
    console.log("flex-center")
}

const paddingModel = document.querySelector('.padding-model');
const padCode = document.querySelector('.padding-code');

function pad12px() {
    paddingModel.style.cssText = 'padding: 12px';
    padCode.value = "padding: 12px;"
}

function pad22px() {
    paddingModel.style.cssText = 'padding: 22px';
    padCode.value = "padding: 22px;"
}

function pad35px() {
    paddingModel.style.cssText = 'padding: 35px';
    padCode.value = "padding: 35px;"
}

function pad40px() {
    paddingModel.style.cssText = 'padding: 40px';
    padCode.value = "padding: 40px;"
}

function alignleft() {
    paddingModel.style.cssText += "text-align: left"
    padCode.value = " align-item: left"
}

function alignright() {
    paddingModel.style.cssText += "text-align: right"
    padCode.value = " align-item: right"
}

function aligncenter() {
    paddingModel.style.cssText += "text-align: center"
    padCode.value = " align-item: center"
}

//Color Code

var colorModel = document.querySelector('.color-model');
var colorCode = document.querySelector('.color-code');

function red() {
    colorModel.style.backgroundColor = "red";
    colorCode.value = 'background-color: red';
}

function blue() {
    colorModel.style.backgroundColor = "blue";
    colorCode.value = 'background-color: blue';
}

function yellow() {
    colorModel.style.backgroundColor = "yellow";
    colorCode.value = 'background-color: yellow';
}

function purple() {
    colorModel.style.backgroundColor = "purple";
    colorCode.value = 'background-color: purple';
}

function aqua() {
    colorModel.style.backgroundColor = "aqua";
    colorCode.value = 'background-color: aqua';
}

function skyblue() {
    colorModel.style.backgroundColor = "skyblue";
    colorCode.value = 'background-color: skyblue';
}

function lightgreen() {
    colorModel.style.backgroundColor = "lightgreen";
    colorCode.value = 'background-color: lightgreen';
}

function oldlace() {
    colorModel.style.backgroundColor = "oldlace";
    colorCode.value = 'background-color: oldlace';
}

function aquamarine() {
    colorModel.style.backgroundColor = "aquamarine";
    colorCode.value = 'background-color: aquamarine';
}

function chocolate() {
    colorModel.style.backgroundColor = "chocolate";
    colorCode.value = 'background-color: chocolate';
}

function chartreuse() {
    colorModel.style.backgroundColor = "chartreuse";
    colorCode.value = 'background-color: chartreuse';
}

function aliceblue() {
    colorModel.style.backgroundColor = "aliceblue";
    colorCode.value = 'background-color: aliceblue';
}

function bisque() {
    colorModel.style.backgroundColor = "bisque";
    colorCode.value = 'background-color: bisque';
}

function crimson() {
    colorModel.style.backgroundColor = "crimson";
    colorCode.value = 'background-color: crimson';
}

function cyan() {
    colorModel.style.backgroundColor = "cyan";
    colorCode.value = 'background-color: cyan';
}

function blueviolet() {
    colorModel.style.backgroundColor = "blueviolet";
    colorCode.value = 'background-color: blueviolet';
}

function brown() {
    colorModel.style.backgroundColor = "brown";
    colorCode.value = 'background-color: brown';
}

function blanchedalmond() {
    colorModel.style.backgroundColor = "blanchedalmond";
    colorCode.value = 'background-color: blanchedalmond';
}

function rebeccapurple() {
    colorModel.style.backgroundColor = "rebeccapurple";
    colorCode.value = 'background-color: rebeccapurple';
}

function royalblue() {
    colorModel.style.backgroundColor = "royalblue";
    colorCode.value = 'background-color: royalblue';
}

function violet() {
    colorModel.style.backgroundColor = "violet";
    colorCode.value = 'background-color: violet';
}

function teal() {
    colorModel.style.backgroundColor = "teal";
    colorCode.value = 'background-color: teal';
}

function thistle() {
    colorModel.style.backgroundColor = "thistle";
    colorCode.value = 'background-color: thistle';
}

function turquoise() {
    colorModel.style.backgroundColor = "turquoise";
    colorCode.value = 'background-color: turquoise';
}

function olivedrab() {
    colorModel.style.backgroundColor = "olivedrab";
    colorCode.value = 'background-color: olivedrab';
}

function orange() {
    colorModel.style.backgroundColor = "orange";
    colorCode.value = 'background-color: orange';
}

function orchid() {
    colorModel.style.backgroundColor = "orchid";
    colorCode.value = 'background-color: orchid';
}

function orangered() {
    colorModel.style.backgroundColor = "orangered";
    colorCode.value = 'background-color: orangered';
}

function palegoldenrod() {
    colorModel.style.backgroundColor = "palegoldenrod";
    colorCode.value = 'background-color: palegoldenrod';
}

function palegreen() {
    colorModel.style.backgroundColor = "palegreen";
    colorCode.value = 'background-color: palegreen';
}

function paleturquoise() {
    colorModel.style.backgroundColor = "paleturquoise";
    colorCode.value = 'background-color: paleturquoise';
}

function palevioletred() {
    colorModel.style.backgroundColor = "palevioletred";
    colorCode.value = 'background-color: palevioletred';
}

function papayawhip() {
    colorModel.style.backgroundColor = "papayawhip";
    colorCode.value = 'background-color: papayawhip';
}

function peachpuff() {
    colorModel.style.backgroundColor = "peachpuff";
    colorCode.value = 'background-color: peachpuff';
}

function peru() {
    colorModel.style.backgroundColor = "peru";
    colorCode.value = 'background-color: peru';
}

function pink() {
    colorModel.style.backgroundColor = "pink";
    colorCode.value = 'background-color: pink';
}

function plum() {
    colorModel.style.backgroundColor = "plum";
    colorCode.value = 'background-color: plum';
}

function powderblue() {
    colorModel.style.backgroundColor = "powderblue";
    colorCode.value = 'background-color: powderblue';
}

