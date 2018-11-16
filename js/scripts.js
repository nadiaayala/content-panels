$(function(){
    var $controllers = $('.accordion-control');
    
    $controllers.on('click', function(e){
        e.preventDefault();
        $(this).next('.accordion-content').slideToggle();
        });

    })
