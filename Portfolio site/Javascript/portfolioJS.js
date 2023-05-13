//functions to work the ABOUT ME modal box
const abmodal = document.querySelector("#ab-modal");
const openAbModal = document.querySelector('.open-ab-modal');
const closeAbModal = document.querySelector('.close-ab-modal');

openAbModal.addEventListener('click', ()=>{
    abmodal.showModal();
})
//basic closing of a modal
closeAbModal.addEventListener('click', ()=>{
    abmodal.close();
})

//functiopns to work the CONTACT ME modal box
const cmmodal = document.querySelector("#cm-modal");
const openCmModal = document.querySelector('.open-cm-modal');
const closeCmModal = document.querySelector('.close-cm-modal');

openCmModal.addEventListener('click', ()=>{
    cmmodal.showModal();
})
closeCmModal.addEventListener('click', ()=>{
    cmmodal.close();
})

//function to open and close the RESUME modal
const rmodal = document.querySelector("#r-modal");
const openRModal = document.querySelector('.open-r-modal');
const closeRModal = document.querySelector('.close-r-modal');

openRModal.addEventListener('click', ()=>{
    rmodal.showModal();
})
closeRModal.addEventListener('click', ()=>{
    rmodal.close();
})

const teamsite = document.querySelector("#team-site");
const openTModal = document.querySelector(".open-teamModal");
const closeTModal = document.querySelector(".close-teamModal");

openTModal.addEventListener('click', ()=>{
    teamsite.showModal();
})
closeTModal.addEventListener('click', ()=>{
    teamsite.close();
})
//dark and light mode functiuons
let nodark = document.getElementById("dark");
let nolight = document.getElementById("light");
function darkmode(){
    /*make background dark and text light*/
    document.getElementById("wrapper").style.backgroundColor = "#1a1a1a";
    document.getElementById("list").style.color = "white";
    document.getElementById("nav").style.color = "white"; 
    document.getElementById("nav").style.borderRight = "thick solid #FFFFFF";
    document.getElementById("nav").style.backgroundColor = "black";  
    document.getElementById("footer").style.backgroundColor = "black";
    document.getElementById("git").style.color = "white";
    document.getElementById("pen").style.color = "white";
    document.getElementById("team-code").style.color = "white";
    
    nodark.style.display = "none";
    /*display the light button*/
    nolight.style.display = "block";
}
function lightmode(){
    /*make background light and text dark*/
    document.getElementById("wrapper").style.backgroundColor = "white";
    document.getElementById("list").style.color = "black";
    document.getElementById("nav").style.color = "black"; 
    document.getElementById("nav").style.backgroundColor = "floralwhite";  
    document.getElementById("footer").style.backgroundColor = "floralwhite";  
    document.getElementById("pen").style.color = "black";
    document.getElementById("git").style.color = "black";
    document.getElementById("team-code").style.color = "black";
    nolight.style.display = "none";
    /*display the dark button*/
    nodark.style.display = "block";

}
/*iframe code. This code is for opening and close the Iframes in the window above the 
website title and below the nave bar. Iframes shoud start closed and be opened once 
the options are clicked on in the lower nav bar. only one iframe should be open at a time
and an option to close them should also be present for full functionality */
const aFrame =  document.querySelector("#abstract-frame");
const openAFrame = document.querySelector(".open-abstract");
const aCloseFrame = document.querySelector(".aframe-close");

const cFrame = document.querySelector("#color-frame");
const openCFrame = document.querySelector('.open-color');
const cCloseFrame = document.querySelector(".cframe-close");

openAFrame.addEventListener('click', ()=>{
    aFrame.style.display = "block";
})
openCFrame.addEventListener('click', ()=>{
    cFrame.style.display = "block";
});
aCloseFrame.addEventListener('click', ()=>{
    aFrame.style.display = "none";
});
cCloseFrame.addEventListener('click', ()=>{
    cFrame.style.display = "none";
})
/* expanding window that displays a carousel gallery of projects of the specified type
const html = document.getElementById("html");
function windowopen(){
    window = document.getElementById("window").style.display = "block";
}
addEventListener("click", windowopen);
*/