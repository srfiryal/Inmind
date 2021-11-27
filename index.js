const redirect = (page) => {
    page += '.html';

    console.log(window.location.href);
    let url = window.location.href.replace('index.html', page);

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