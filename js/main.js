$(document).ready(function () {
	$("#intro").hide();
	$("#card-body-intro").hide();
	$("#intro").fadeIn(3000);
	$("#card-body-intro").fadeIn(4000);
})

$('.exp-prof').popover({
	trigger: 'focus'
})

$("#btn-contato").click(function () {
	if (window.matchMedia("(min-width:937px)").matches) {
		$("html, body").animate({
			scrollTop: $('#contato').offset().top + $('#contato').outerHeight() - ($('#contato').height() * 1.04)
		}, 1500);
	} else {
		$("html, body").animate({
			scrollTop: $('#contato').offset().top + $('#contato').outerHeight() - ($('#contato').height() * 1.07)
		}, 1500);
	}
})

$(".navbar-brand").click(function () {
	$("html, body").animate({
		scrollTop: $("#menu").offset().top - $("html, body").height()
	}, 1500);
})

$('#navbarNav').find('a').each(function () {
	var link = $(this).attr('href');

	$(this).click(function () {
		if (link == "#intro-container") {
			$("html, body").animate({
				scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.2)
			}, 1000);
		} else {
			if (link == "#experiencia") {
				$("html, body").animate({
					scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.05)
				}, 1000);
			} else {
				if (link == "#formacao") {
					$("html, body").animate({
						scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.2)
					}, 1000);
				} else {
					if (link == "#cursos") {
						$("html, body").animate({
							scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.1)
						}, 1000);
					} else {
						if (link == "#idiomas") {
							$("html, body").animate({
								scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.2)
							}, 1000);
						} else {
							if (link == "#qualificacoes") {
								$("html, body").animate({
									scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.06)
								}, 1000);
							} else {
								if (link == "#projetos") {
									$("html, body").animate({
										scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.04)
									}, 1000);
								} else {
									if (link == "#contato") {
										$("html, body").animate({
											scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.04)
										}, 1000);
									}
								}
							}
						}
					}
				}
			}
		}
	})
});

$('#navbarToggleExternalContent').find('a').each(function () {
	var link = $(this).attr('href');

	$(this).click(function () {
		$(".collapse").collapse('toggle');

		if (link == "#intro-container") {
			$("html, body").animate({
				scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.2)
			}, 1000);
		} else {
			if (link == "#experiencia") {
				$("html, body").animate({
					scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.05)
				}, 1000);
			} else {
				if (link == "#formacao") {
					$("html, body").animate({
						scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.2)
					}, 1000);
				} else {
					if (link == "#cursos") {
						$("html, body").animate({
							scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.04)
						}, 1000);
					} else {
						if (link == "#idiomas") {
							$("html, body").animate({
								scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.2)
							}, 1000);
						} else {
							if (link == "#qualificacoes") {
								$("html, body").animate({
									scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.04)
								}, 1000);
							} else {
								if (link == "#projetos") {
									$("html, body").animate({
										scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.03)
									}, 1000);
								} else {
									if (link == "#contato") {
										$("html, body").animate({
											scrollTop: $(link).offset().top + $(link).outerHeight() - ($(link).height() * 1.07)
										}, 1000);
									}
								}
							}
						}
					}
				}
			}
		}
	})
});

$(window).scroll(function () {
	var hT_idioma = $('.idioma-barra ').offset().top,
		hH_idioma = $('.idioma-barra ').outerHeight(),
		wH_idioma = $(window).height(),
		wS_idioma = $(this).scrollTop();

	if (wS_idioma > (hT_idioma + hH_idioma - wH_idioma)) {
		$('.idioma-barra .progress-bar').css('animation', 'progress 1.5s ease-in-out forwards');
		$('.idioma-barra .progress-bar .title').css('animation', 'show 0.35s forwards ease-in-out 0.5s');
	}

	var hT_skill = $('#qualificacoes h2').offset().top,
		hH_skill = $('#qualificacoes h2').outerHeight(),
		wH_skill = $(window).height(),
		wS_skill = $(this).scrollTop();

	if (wS_skill > (hT_skill + hH_skill - wH_skill)) {
		$('.skills .progress-bar').css('animation', 'progress 1.5s ease-in-out forwards');
		$('.skills .progress-bar .title').css('animation', 'show 0.35s forwards ease-in-out 0.5s');
	}
});
