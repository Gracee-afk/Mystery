// Detecta se é dispositivo móvel
function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function checkOrientation() {
    const warning = document.getElementById("rotate-warning");

    if (isMobile() && window.innerHeight > window.innerWidth) {
        warning.style.display = "flex";
        document.body.style.overflow = "hidden";
    } else {
        warning.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);