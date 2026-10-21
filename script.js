 // BACKGROUND MUSIC BUTTON
const music = document.getElementById("backgroundMusic");
const button = document.getElementById("musicButton");

// PLAY OR PAUSE THE BACKGROUND MUSIC
button.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        button.textContent = "♫";
    } else {
        music.pause();
        button.textContent = "♪";
    }
});

// BACK TO TOP BUTTON
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}