window.addEventListener('DOMContentLoaded', () => {
    //hamburger onclick: icon turns to X, display dropdown w/ Home and Content
    const menu = document.getElementById("menu-bars");
    const dropdown = document.getElementById("dropdown");
    dropdown.style.visibility = "hidden";
    dropdown.style.height = "0";

    let screenWidth = screen.width;
    window.addEventListener('resize', async () => {
        if (window.innerWidth !== screenWidth) screenWidth = window.innerWidth;
    })

    let clickCount = 0;
    menu.addEventListener('click', async () => {
        if (screenWidth <= 550) {
            clickCount++;
            if (clickCount % 2 === 0) {
                menu.className = "fas fa-bars";
                dropdown.style.visibility = "hidden";
                dropdown.style.height = "0";
            } else {
                menu.className = "fas fa-times";
                dropdown.style.visibility = "visible";
                dropdown.style.height = "56px";
            };
        } else {
            dropdown.style.visibility = "hidden";
            dropdown.style.height = "0";
        };
    });
});