function startScroll(){
const nav = document.querySelector('nav');
  if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
    nav.removeAttribute('data-aos');
    nav.removeAttribute('data-aos-duration');
    nav.className = "scrolled";
  }
  else{
    nav.className = "";
  }
}

const page = document.querySelector('body');
const nav = document.querySelector('nav');


page.onscroll = function(){startScroll()};
