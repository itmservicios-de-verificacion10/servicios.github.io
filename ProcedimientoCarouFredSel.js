var $c= jQuery.noConflict();
			
	$c(function() {
		$c('#carrusel_micrositio').find(".imagen_carrusel_folletos").hover(
			function() { $c(this).find(".B1").animate({marginTop: "-195px"}); },
			function() { $c(this).find(".B1").animate({marginTop: "-70px"}); 
		});
		
		$c('#carrusel_a').find(".imagen_carrusel_a").hover(
			function() { $c(this).find(".B1").animate({marginTop: "-195px"}); },
			function() { $c(this).find(".B1").animate({marginTop: "-70px"}); 
		});
		
		$c('#carrusel_b').find(".imagen_carrusel_b").hover(
			function() { $c(this).find(".B1").animate({marginTop: "-195px"}); },
			function() { $c(this).find(".B1").animate({marginTop: "-70px"}); 
		});
		
		$c('#carrusel_c').find(".imagen_carrusel_c").hover(
			function() { $c(this).find(".B1").animate({marginTop: "-175px"}); },
			function() { $c(this).find(".B1").animate({marginTop: "-50px"}); 
		});
		
		$c('#carrusel_2').carouFredSel({
		   direction	: "right",
		   pagination: "#pager_carrusel",
		   auto: {
		   	items: 1,
			pauseOnHover: "immediate"
		   },
		   scroll: 500,
		   prev : {
		    button: '#carrusel_2_prev',
		    items: 1
		   },
		   next : {
		    button: '#carrusel_2_next',
		    items: 1
		   }
		}).find(".elemento_carrusel_2").hover(
			function() { $c(this).find(".B1").animate({marginTop: "-208px"}); },
			function() { $c(this).find(".B1").animate({marginTop: "-80px"}); 
		});
		
		$c('#carrusel_folletos').carouFredSel({
		   direction	: "right",
		   pagination: "#pager_carrusel_folletos",
		   auto: {
		   	items: 1,
			pauseOnHover: "immediate"
		   },
		   scroll: 500,
		   prev : {
		    button: '#carrusel_folletos_prev',
		    items: 1
		   },
		   next : {
		    button: '#carrusel_folletos_next',
		    items: 1
		   }
		}).find(".elemento_carrusel_folletos").hover(
			function() { $c(this).find(".B1").animate({marginTop: "-208px"}); },
			function() { $c(this).find(".B1").animate({marginTop: "-80px"}); 
		});
		
		var dur = 1000;
		var pDur = 3000;
		$c('#imagenes div a').append('<img runat="server" src="http://www.imt.mx/Images/GRAL/carousel_glare.png" class="glare" />');
		$c('#imagenmini a').append('<img runat="server" src="http://www.imt.mx/Images/GRAL/carousel_glare_small.png" class="glare" />');

		$c('#imagenes').carouFredSel({
			synchronise: ['#imagenmini', false, true],
			items: {
				visible: 1,
				width: 480,
				height: 300
			},
			scroll: {
				fx: 'fade',
				easing: 'linear',
				duration: dur,
				pauseDuration: pDur,
				/*onBefore: function( oldI, newI ) {
					animate( newI, pDur + ( dur * 3 ) );
				},*/
				onAfter: function( oldI, newI ) {
					oldI.find( 'img' ).css({
						width: 480,
						height: 300,
						marginTop: 0,
						marginLeft: 0
					});
				}
			}/*,
			onCreate: function( items ) {
				animate( items, pDur + ( dur *2 ) );
			}*/
		});
			
		function animate( item, dur ) {
			var obj = {
				width: 900,
				height: 540
			};
			switch( Math.ceil( Math.random() * 2 ) ) {
				case 1:
					obj.marginTop = 0;
					break;
				case 2:
					obj.marginTop = -120
					break;
			}
			switch( Math.ceil( Math.random() * 2 ) ) {
				case 1:
					obj.marginLeft = 0;
					break;
				case 2:
					obj.marginLeft = -200
					break;
			}
			item.find( 'img' ).animate(obj, dur, 'linear' );
		}

		$c('#imagenmini').carouFredSel({
			synchronise: ['#imagenes', false, true],
			responsive: true,
			auto: false,
			prev : {
				button: '#galeria_prev',
				items: 1
			},
			next : {
				button: '#galeria_next',
				items: 1
			},
			items: {
				visible: 5,
				width: 150,
				height: '66%'
			},
			scroll: {
				onBefore: function(oldItems, newItems) {
					oldItems.eq(0).removeClass('selected');
					newItems.eq(0).addClass('selected');
				}
			}
		});

		$c('#imagenmini a').click(function() {
			$c('#imagenes').trigger('slideTo', '#'+this.href.split('#').pop());
			$c('#imagenmini a').removeClass('selected');
			$c(this).addClass('selected');
			return false;
		});
		
		$c(function() {
			$c('#carousel_inicio').carouFredSel({
				items: 1,
				auto: false,
				scroll: {
					fx: 'none'
				},
				pagination: {
					container: '#pager_inicio',
					event: 'mouseenter',
					anchorBuilder: function(nr) {
						var src = $c(this).attr('src').replace('/.jpg/', '/t.jpg/');
						return '<img src="'+ src +'" border="0" />';
					}
				}
			});
		});
	});