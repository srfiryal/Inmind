const redirect = (page) => {
    page += '.html';

    let currentLocation = window.location.href;
    let location = currentLocation.slice(currentLocation.lastIndexOf('/') + 1);
    let url = currentLocation.replace(location, page);

    window.location.href = url;
}

const jumpTo = (id) => {
    document.getElementsByClassName(id)[0].scrollIntoView({
        behavior: 'smooth'
    });
}

function onTapNavbar() {
    var x = document.getElementById("navbar-responsive");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}