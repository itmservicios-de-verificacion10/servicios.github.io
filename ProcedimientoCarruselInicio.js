var $ci= jQuery.noConflict();

$ci(document).ready(function(){ // Script del Slider
    $ci("div.slide2, div.slide3, div.slide4, div.slide5").hide();
    $ci('div#slideshow-1').addClass('aqui');
 
    $ci("div#slideshow-1").hover(function(e){
        $ci('#slideshow div').removeClass('aqui');
        $ci(this).addClass('aqui');
        $ci('div.slide1').show('slow');
        $ci('div.slide2, div.slide3, div.slide4, div.slide5').hide('slow');
	$ci("#textmens").hide("slow");
		$ci("#FuncionarioSCT").hide();
		$ci("#FuncionarioEstatal").hide();
        return false;
        e.preventDefault();
    });
    
    $ci("div.slide6").hover(
    	function() { 
    		$ci(this).find(".mensajep2").animate({height: "375px"}); 
	},
	function() { 
		$ci(this).find(".mensajep2").animate({height: "40px"}); 
    	}
    );
    
    $ci("#texlink").click(function() { 
    	$ci("#textmens").toggle();
    });
	
	$ci("#SCT").click(function() { 
    	$ci("#FuncionarioSCT").toggle();
    });
	
	$ci("#Estatal").click(function() { 
    	$ci("#FuncionarioEstatal").toggle();
    });
	
	$ci("#cerrarEstatal").click(function() { 
    	$ci("#FuncionarioEstatal").toggle();
    });
	$ci("#cerrarSCT").click(function() { 
    	$ci("#FuncionarioSCT").toggle();
    });
 
    $ci("div#slideshow-2").hover(function(e){
        $ci('#slideshow div').removeClass('aqui');
        $ci(this).addClass('aqui');
        $ci('div.slide2').show('slow');
        $ci('div.slide1, div.slide3, div.slide4, div.slide5').hide('slow');
	$ci("#textmens").hide();
				$ci("#FuncionarioSCT").hide();
		$ci("#FuncionarioEstatal").hide();
        return false;
        e.preventDefault();
    });
 
    $ci("div#slideshow-3").hover(function(e){
        $ci('#slideshow div').removeClass('aqui');
        $ci(this).addClass('aqui');
        $ci('div.slide3').show('slow');
        $ci('div.slide1, div.slide2, div.slide4, div.slide5').hide('slow');
	$ci("#textmens").hide();
				$ci("#FuncionarioSCT").hide();
		$ci("#FuncionarioEstatal").hide();
        return false;
        e.preventDefault();
    });
	
    $ci("div#slideshow-4").hover(function(e){
        $ci('#slideshow div').removeClass('aqui');
        $ci(this).addClass('aqui');
        $ci('div.slide4').show('slow');
        $ci('div.slide1, div.slide2, div.slide3, div.slide5').hide('slow');
	$ci("#textmens").hide();
			$ci("#FuncionarioSCT").hide();
		$ci("#FuncionarioEstatal").hide();
        return false;
        e.preventDefault();
    });
    
    $ci("div#slideshow-5").hover(function(e){
        $ci('#slideshow div').removeClass('aqui');
        $ci(this).addClass('aqui');
        $ci('div.slide5').show('slow');
        $ci('div.slide1, div.slide2, div.slide3, div.slide4').hide('slow');
	$ci("#textmens").hide();
			$ci("#FuncionarioSCT").hide();
		$ci("#FuncionarioEstatal").hide();
        return false;
        e.preventDefault();
    });
});