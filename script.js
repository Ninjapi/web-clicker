var clicks = 0;

function refreshcounter() {
    document.getElementById("counter").innerHTML = clicks;
}

function clicked() {
    clicks++;
    refreshcounter();
}

clickbutton.addEventListener("click", clicked);
refreshcounter();