const slide = document.querySelector('#hero');

let imagens = [
    '../images/banner.jpg',
    '../images/img1.jpg',
    '../images/login.jpeg'
];
const time = 1300;
let count = 0;

function moverSlide () {
  slide.style.backgroundImage = `url(${imagens[count]})`
  if(count < imagens.length - 1){
    count++
  }
  else {
    count = 0
  }
  setTimeout(moverSlide,time);
}
window.onload = moverSlide;


document.addEventListener('DOMContentLoaded',() => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menuList');
  const menuClose =document.getElementById('menu-close')
  const menuItems = document.querySelectorAll('a')

  menuToggle.addEventListener('click', function (){
    menuList.classList.toggle('active');
  });
    menuClose.addEventListener('click', function (){
      menuList.classList.remove('active');

});
  menuItems.forEach(item =>{
    item.addEventListener('click',() =>{
      menuList.classList.remove('active')
    })
  })
});


