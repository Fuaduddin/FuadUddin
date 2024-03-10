const filtertab=document.querySelectorAll(".filterbuttonactive");
const fitertabtext=document.querySelectorAll(".filtertext");
let Experience = setInterval(EXPupdated,100);
let Clientprojects = setInterval(Clineupdated,100);
let personalprojects = setInterval(Personalupdated,100);
let Experienceid=0;
let ClientProjectsid=0;
let PresonalProjectsid=0
function EXPupdated() {
    let Experiencetext=document.getElementById("progress-value-Experience");
    Experiencetext.innerText = ++Experienceid+ `+`;
    if (Experienceid === 3) {
        clearInterval(Experience);
    }
}
function Clineupdated() {
    let ClientProjectstext=document.getElementById("progress-value-ClientProjects");
    ClientProjectstext.innerText = ++ClientProjectsid + `+`;
    if (ClientProjectsid === 10) {
        clearInterval(Clientprojects);
    }
}
function Personalupdated() {
    let PresonalProjectstext=document.getElementById("progress-value-PersonalProjects");
    PresonalProjectstext.innerText = ++PresonalProjectsid+ `+`;
    if (PresonalProjectsid === 20) {
        clearInterval(personalprojects);
    }
}

filtertab[0].classList.add('activebutton');
filtertab.forEach(tab=>{
    tab.addEventListener('click',()=>{
        let activebutton=document.querySelector('.activebutton');
        activebutton.classList.remove('activebutton');
        tab.classList.add('activebutton');
    });
});