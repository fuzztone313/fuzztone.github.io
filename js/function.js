$(function(){
    navigation();
    mobile();
    swiper();
    tabs();    
});

function navigation() {

    $('.mobile-nav').on('click', function(){
        $('nav ul').toggleClass('showing');    
    });
    
}

function mobile() {
    
      $('.mobile-nav').click(function() {
          $(this).toggleClass('visible');
       });
}

function swiper() {


var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        //paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        loop: true
    });

}

function tabs (){

var slice = [].slice;
var tabs = document.querySelector('.tabs');
var tabItems = slice.call(tabs.querySelectorAll('.tabs-nav-item'));
var tabContents = slice.call(tabs.querySelectorAll('.tabs-content-item'));
var currentIndex = 0;

function onClick(e){
    e.preventDefault();
    var tab = this;
    var index = tabItems.indexOf(this);
    if(index !== currentIndex){
        tabItems[currentIndex].classList.remove('active-tab-nav-item');
        tabContents[currentIndex].classList.remove('active-tab-content-item');
        tab.classList.add('active-tab-nav-item');
        tabContents[index].classList.add('active-tab-content-item');
        currentIndex = index;
    }
}

tabItems.forEach(function(item){
    item.addEventListener('click', onClick, false);
});
}

$('.subcribe').fixTo('.main-post', {top: 0});


