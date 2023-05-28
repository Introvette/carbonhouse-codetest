
// social feed carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// dropdown menu

class DropDown {
  constructor() {
    this.isMenuOpen = false;
    this.dropdownToggle = document.querySelector('.dropdown-toggle');
    this.dropdownMenu = document.querySelector('.dropdown-menu');

    this.dropdownToggle.addEventListener('click', this.toggleMenu.bind(this));
    document.addEventListener('click', this.closeMenu.bind(this));
  }

  toggleMenu(event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
    this.dropdownToggle.classList.toggle('active');
    this.dropdownMenu.style.display = this.isMenuOpen ? 'block' : 'none';
  }

  closeMenu(event) {
    if (!event.target.closest('.nav-header')) {
      this.isMenuOpen = false;
      this.dropdownToggle.classList.remove('active');
      this.dropdownMenu.style.display = 'none';
    }
  }
}

new DropDown();
