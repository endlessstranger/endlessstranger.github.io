(function ($) {
	$(document).ready(function () {
		
		/*header*/
		
		function lpHeader() {
            if ($(window).scrollTop() == 0){
                $('header').removeClass('top');               
            } else {
                $('header').addClass('top');    
            }               
        }
        lpHeader();
        $(window).on('scroll', lpHeader);
		
		/*slider*/
		$('.carousel').carousel();
		
		/*scrollspy*/
		$('.menu a, .footer__nav a').on('click', function(e){
			var hash = this.hash
			  $('html,body').stop().animate({ scrollTop: $(hash).offset().top }, 1000);
			  e.preventDefault();
		});
		
		/*form*/

		$('#form-01').on('submit',	function()  {
			event.preventDefault();
			var hiddenblock = $(this).parents('.hidparent').find('.hidd'); 
			var name1val = 0;
			var mail1val = 0;   

			/* name */   
			$('#name').removeClass('error');  
			$('#email').removeClass('error');    
			
			if($('#name').val() != ''){     
				$('#name').removeClass('error');    
				name1val = 1;
			} else {  
				$('#name').addClass('error');  
				name1val = 0;
			}

			/* mail */
			if($('#email').val() != ''){     
				$('#email').removeClass('error'); 
				mail1val = 1;   
			} else {  
				$('#email').addClass('error');  
				mail1val = 0;
			}

			if((mail1val == 1)&&(name1val == 1)){ 

					var name = $('#name').val(); 
					var mail = $('#email').val(); 
					var mess = $('#message').val();

					$.ajax({
						type: "POST",
						url: "mail.php",
						data: "name="+name+"&mail="+mail+"&mess="+mess,

						success: function(html) {
							$('#modal-thanks').modal('show');
							$('#form-01')[0].reset();
						}
					});  
			} 

		});			
		
		$('.close').on('click', function(){
			$('#modal-thanks').modal('hide');
		});
		
	});
})(jQuery);