window.addEvent('domready', function(){

	$$('#presentacion .B1_presentacion').each(function(el) { 
	
		var fx = new Fx.Tween(el,{ 
			duration: 640,
			link: 'cancel',
			transition: Fx.Transitions.Quint.easeOut
		}); 
		
		el.addEvents({ 
			'mouseenter': function(e) { 
			e.stop(); 
			fx.start("margin-top", "-218px");
			//	alert('entra');
			},
			'mouseleave': function(e) { 
				e.stop(); 
				fx.start("margin-top", "-30px");
			//alert('sale');
			} 
		}); 

	});	
	
});