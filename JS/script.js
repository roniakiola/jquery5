//Vertical page scroll
/*$(document).ready(function(){

    $('a').on('click', function(event){

        if(this.hash !== ''){

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});*/

//Horizontal page scroll
$(document).ready(function(){

//Show and hide Navigation bar on mouseenter/leave
    $('nav')
        .mouseenter(function(){
            $(this).animate({opacity: 1});
        })
        .mouseleave(function(){
            $(this).animate({opacity: 0});
        })

    $('a').on('click', function(event){

        if(this.hash !== ''){

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollLeft: $(hash).offset().left
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});