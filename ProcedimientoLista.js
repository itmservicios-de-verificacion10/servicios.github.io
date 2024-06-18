//ARRG Procedimiento para pasar variables de una lista a otra
var $lst= jQuery.noConflict();

$lst().ready(function() {
		$lst('.pasarAutor').click(function() { return !$lst('#lstAutorDisponibles option:selected').remove().appendTo('#lstAutorAsignados'); });  
		$lst('.quitarAutor').click(function() { return !$lst('#lstAutorAsignados option:selected').remove().appendTo('#lstAutorDisponibles'); });
		$lst('.pasartodosAutor').click(function() { $lst('#lstAutorDisponibles option').each(function() { $lst(this).remove().appendTo('#lstAutorAsignados'); }); });
		$lst('.quitartodosAutor').click(function() { $lst('#lstAutorAsignados option').each(function() { $lst(this).remove().appendTo('#lstAutorDisponibles'); }); });
		$lst('.pasarCatego').click(function() { return !$lst('#lstCategoriaDisponibles option:selected').remove().appendTo('#lstCategoriaAsignados'); });  
		$lst('.quitarCatego').click(function() { return !$lst('#lstCategoriaAsignados option:selected').remove().appendTo('#lstCategoriaDisponibles'); });
		$lst('.pasartodosCatego').click(function() { $lst('#lstCategoriaDisponibles option').each(function() { $lst(this).remove().appendTo('#lstCategoriaAsignados'); }); });
		$lst('.quitartodosCatego').click(function() { $lst('#lstCategoriaAsignados option').each(function() { $lst(this).remove().appendTo('#lstCategoriaDisponibles'); }); });
	}); 