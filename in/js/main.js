(function ($) {
    $(document).ready(function () {

        /*scrollspy*/
        $("#menu").scrollspy({
            offset: -63,
            animate: true
        });
        
        $(".header__burger").on('click', function(){
            $(this).toggleClass('js-burger-active');
            $('.header__menu').toggleClass('js-menu-active')
             
         });
    
        /* sticky header */
        function stickyHeader() {
            var x = $(window).scrollTop();
            if ($(window).scrollTop() < 100) {
                $('.header').removeClass('js-sticky-header');
                $('.header__btn').removeClass('btn_top-gradient');
                $('.header__menu li').removeClass('active')
            } else {
                $('.header').addClass('js-sticky-header');
                $('.header__btn').addClass('btn_top-gradient');
            }
        }
        $(window).on('load scroll', stickyHeader);

        /* faq close/open items*/
        $('.faq-item').on('click', function () {
            $(this).toggleClass('active').children('.faq-item__text').slideToggle();
        });

        /* modals */
        $('a[data-target]').on('click',function(){
            event.preventDefault();
            var modal = $(this).attr('data-target');
            $('#'+modal).fadeIn();
            $('.overlay').fadeIn();
            $('.modal').find('.input:first').focus();
        });
        $('.close').on('click', function(){
            $(this).parent('.modal').fadeOut();
            $('.overlay').fadeOut();
        });
        $('.overlay').on('click', function(){
            $(this).fadeOut();
            $('.modal').fadeOut();
        });
        $('.modal').on('click', function(){
            event.stopPropagation();
            event.stopImmediatePropagation();
        })
        $('.input').on('focus', function(){
            $(this).removeClass('error').prev('.error__text').css('visibility','hidden');
        })
        
        /* send form */
        $('#form01').on('submit', function(){
            event.preventDefault();
            var form_data = $(this).serialize();
            var email_val = 0;
            $(this).find('.input').removeClass('error');
            
            if ($('#email').val() != '') {
                $('#email').removeClass('error').prev('.error__text').css('visibility','hidden');
                email_val = 1;
            } else {
                $('#email').addClass('error').prev('.error__text').css('visibility','visible');
                email_val = 0;
            }
            
            if(email_val == 1) {
                $.ajax({
                    type: "POST",
                    url: "forms/mail.php",
                    data: form_data,
                    success: function() {
                        $('#modal01').fadeOut();
                        $('#modal-thanks').fadeIn();
                    }
                });
            }
        });
        
        /*fades for blocks*/
        AOS.init({
            offset: 0,
            delay: 200,
            duration: 1300,
            once: true,
            disable: window.innerWidth < 960
        });
    });
})(jQuery);