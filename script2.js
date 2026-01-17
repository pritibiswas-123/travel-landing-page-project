
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll =() => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

const themeBtn = document.getElementById('theme-toggle');


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeBtn.classList.remove('fa-moon');
  themeBtn.classList.add('fa-sun');
}


themeBtn.onclick = () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeBtn.classList.remove('fa-moon');
    themeBtn.classList.add('fa-sun');
  } else {
    localStorage.setItem('theme', 'light');
    themeBtn.classList.remove('fa-sun');
    themeBtn.classList.add('fa-moon');
  }
};


videoBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  loop:true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    640: {
      slidesPerView: 1,
    },
    768: {
       slidesPerView: 2,
    },
    1024: {
      slidesPerView :3,
    },
  },
});               



var swiper = new Swiper(".brand-slider", {
  spaceBetween:20,
  loop:true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    450: {
      slidesPerView: 2,
    },
    768: {
       slidesPerView: 3,
    },
    991: {
      slidesPerView :4,
    },
    1200: {
      slidesPerView :5,
    },
  },
});   


document.getElementById("year").textContent = new Date().getFullYear();