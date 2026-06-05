// Clock
function updateClock(){
    let now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();

// Dark Mode
document.getElementById("darkModeBtn")
.addEventListener("click",function(){
    document.body.classList.toggle("dark");
});

// Back To Top
function topFunction(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

// Variables
let totalStudents = 8;
let university = "UDSM";

console.log(totalStudents);
console.log(university);