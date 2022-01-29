const header = document.querySelector('.navbar');

// returns the number of pixels that the document is scrolled vertically and its value is assigned to a variable named top.
//If the value of top is greater than or equal to 100, it adds a class of navbarDark to the header.
window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}