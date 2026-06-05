// Simple welcome message

document.querySelector(".learn-btn").addEventListener("click", () => {
    alert("Welcome to student portfolio, we will be showcasing our skills and projects here. Feel free to explore and learn more about us");
});

// Dark Mode

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️ Light Mode";
    }else{
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});


// Live Clock

function updateClock(){
    const now = new Date();

    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
        `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);
updateClock();


