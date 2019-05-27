$(document).ready(function() {
	$("#intro").hide();
	$("#card-body-intro").hide();
	$("#intro").fadeIn(3000);
	$("#card-body-intro").fadeIn(4000);
})

$('.exp-prof').popover({
  trigger: 'focus'
})

$(".navbar-brand").click(function() {
	$("html, body").animate({
        scrollTop: $("#menu").offset().top - $("html, body").height()
    }, 1000);
})

$('#navbarNav').find('a').each(function() {
	var link = $(this).attr('href');
	
	$(this).click(function() {
		if (link == "#intro-container") {
			$("html, body").animate({
	          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.2)
	        }, 500);
        } else {
        	if (link == "#experiencia") {
				$("html, body").animate({
		          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.05)
		        }, 500);
			} else{
				if (link == "#formacao") {
					$("html, body").animate({
			          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.2)
			        }, 500);
			    } else{
			    	if (link == "#cursos") {
						$("html, body").animate({
				          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.1)
				        }, 500);
				    } else{
				    	if (link == "#idiomas") {
							$("html, body").animate({
					          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.3)
					        }, 500);
					    } else {
					    	if (link == "#qualificacoes") {
								$("html, body").animate({
						          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.06)
						        }, 500);
						    } else{
						    	if (link == "#projetos") {
									$("html, body").animate({
							          scrollTop: $(link).offset().top + $(link).outerHeight() -($(link).height()*1.04)
							        }, 500);
							    }
						    }
					    }
				    }
			    }
			}
        }
	})
});