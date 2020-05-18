/*$('.nav-list a').on('click', function(e){
$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
e.preventDefault();
});*/

$('.nav__link a').on('click', function(e){
$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
e.preventDefault();
});

