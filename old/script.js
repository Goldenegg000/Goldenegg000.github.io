var HomeButton = document.getElementById("HomeButton");
var VideosButton = document.getElementById("VideosButton");
var SocialsButton = document.getElementById("SocialsButton");
VideosButton.addEventListener("click", () => window.location.replace("watch"));
HomeButton.addEventListener("click", () => window.location.replace("home"));
SocialsButton.addEventListener("click", () => window.location.replace("socials"));