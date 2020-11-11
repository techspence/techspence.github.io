document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM is fully loaded');
    console.log(document.getElementById("help-links-container").style.display);
    document.getElementById("help-links-container").style.display = "block";
    console.log(document.getElementById("help-links-container").style.display);
});
