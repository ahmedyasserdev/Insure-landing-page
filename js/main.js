const toggler =  document.querySelector(".toggler")
const ul = document.querySelector(".list")

toggler.addEventListener("click" , () => {
    const currentSrc = toggler.getAttribute('src');
    const hamburgerIcon = 'images/icon-hamburger.svg';
    const closeIcon = 'images/icon-close.svg';

    if (currentSrc === closeIcon) {
        toggler.setAttribute('src', hamburgerIcon);
    } else {
        toggler.setAttribute('src', closeIcon);
    }
    ul.classList.toggle("show")
} )