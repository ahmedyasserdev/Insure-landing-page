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

// Get the icons element
const icons = document.querySelectorAll('.icons img');
const footer = document.querySelector('.footer');
const footerOffset = footer.offsetTop - 200 ;
console.log(footerOffset)

icons.forEach((icon) => {
    icon.style.transition = 'transform 2.5s ease';
});

function handleScroll() {
    const scrollPosition = window.scrollY;

  // Calculate the rotation angle based on the scroll position
  const rotationAngle = scrollPosition === footerOffset ? 0 : -360;

  // Apply the rotation to the icons
  icons.forEach((icon) => {
    icon.style.transform = `rotate(${rotationAngle}deg)`;
  });

  // Reset the rotation when scroll position is at the top
  if (scrollPosition >= footerOffset || scrollPosition === footerOffset  ) {
    icons.forEach((icon) => {
      icon.style.transform = 'rotate(0deg)';
    });
  }
}


// Add scroll event listener
window.addEventListener('scroll', handleScroll);
