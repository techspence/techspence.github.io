window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    console.log(document.getElementById("help-links-container").style.display);
    document.getElementById("help-links-container").style.display = "block";
    console.log(document.getElementById("help-links-container").style.display);
});
