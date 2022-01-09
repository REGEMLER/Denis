//Слайдер
$(function(){
    $('.comments-container').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 600,
            settings: {
            }
          },
          {
            breakpoint: 480,
            settings: {

            }
          }
        ]
      });
});

//Плавный скрол 
$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});

//Гамбургер меню
const toggler = document.getElementById(`toggler`);
const menu = document.getElementById(`header-list`);
toggler.addEventListener(`click`, () =>{
    if( menu.style.opacity === `1` && menu.style.height === `7rem`){
        menu.style.height = `0`;
        menu.style.visibility = `hidden`;
        menu.style.opacity = `0`;

    } else{
        menu.style.height = `7rem`;
        menu.style.visibility = `visible`;
        menu.style.opacity = `1`;
    }
})
