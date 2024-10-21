// Responsive TAB bar for navigation/header 
$(document).ready(function(){
    $(`.navigation-more`).click(function(){
        $(`.slider-bar`).toggleClass(`active`); 
        $(`.fa-bars`).toggleClass(`rotate`);
    })
});
    function toggleActiveClass() {
        if ($(window).width() <= 500) {
            $('.navigation-more').show();
        } 
        else {
            $('.navigation-more').hide();
            $('.slider-bar').removeClass('active');
            $('.fa-bars').removeClass('rotate');
        }
    }

    $(window).resize(toggleActiveClass);

    $(document).ready(function() {
        toggleActiveClass();
    });

// Project interface for project listing button function
$(document).ready(function(){
    $(`.project-buttons`).click(function(){
        $(`.project-buttons`).removeClass(`project-active`);
        $(this).addClass(`project-active`);

        $(`.container-section`).hide(); 

        if($(this).text().trim() === `Completed-Project`){
            $(`.Completed-Project`).show();
        } 
        else if($(this).text().trim() === `Backend-Project`){
            $(`.Backend-Project`).show();
        } 
        else if($(this).text().trim() === `Data-Analysis`){
            $(`.Data-Analysis`).show();
        } 
        else if($(this).text().trim() === `Incomplete-Project`){
            $(`.Incomplete-Project`).show();
        } 
        else{
            $('.container-section').show();
        }
    });
});

$(document).ready(function(){
    $('.middle-navigation').on('click', function(e) {
        e.preventDefault();

        var targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 'slow');
    });
});

$(document).ready(function(){
    $('.middle-navigation').on('click', function(e) {
        e.preventDefault();

        var targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 'slow');
    });
});

$(document).ready(function(){
    $('.contact').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(`#contact`).offset().top
        }, 'slow');
    });
});

