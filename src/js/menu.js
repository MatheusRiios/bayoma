let btnMenu = document.querySelector('.navbar-toggler');      
    btnMenu.addEventListener('click', function(){
    $('.ui.modal').modal('show');
})  

$(document).scroll(function() {        
    if ($(this).scrollTop() > 150) {
        $('.top-logo-menu').addClass('active');
        $('.top-logo-menu .img-logo img').addClass('active')
    } else{
        $('.top-logo-menu').removeClass('active');
        $('.top-logo-menu .img-logo img').removeClass('active')
    }
});