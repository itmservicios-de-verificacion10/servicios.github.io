//ARRG Google Analytics
/*var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-29386129-2']);
/* las variables custom van antes del _trackPageview
_gaq.push(['_setCustomVar',1,CNormasParte[2],CNormasParte[0].split("=")[1]]);*
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();*/
  
var $DT= jQuery.noConflict();

$DT.urlParam = function(name){
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (!results)
		{
			return '';
		}
			return results[1] || '';
    }

/*//example params with spaces
http://www.jquery4u.com?city=Gold Coast
console.log($.urlParam('city'));  
//output: Gold%20Coast

console.log(decodeURIComponent($.urlParam('city')));  
//output: Gold Coast*/



$DT(document).ready(function(){
	
	 oTable = $DT('#dataTable').dataTable({
		"bJQueryUI": true,
		"sPaginationType": "full_numbers", //full_numbers,two_button
		/*"oSearch":{"sSearch": $DT.urlParam('nomfiltro')}, ARRG se cancelo el optener variables de URL por tener variables de sesion*/
		"oSearch":{"sSearch": $DT("#nomfiltro").val()},
		"bInfo": true,
		"iDisplayLength": 10,
		"aLengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "TODOS"]],
		"oLanguage": {"sUrl":"/plugins/system/imtcustom/js/es-ES_DataTables.txt"},
		//"aoColumnDefs":[{"bSearchable":false, "bVisible":false, "aTargets":[0]}] ARRG para desaparecer una columna
		"bScrollCollapse": true,
		"sScrollY": "500px"
		//"bStateSave": true, ARRG probar si funciona con la variable de busqueda dinamica
	});
	
	
	$DT('#checkTodos').click(function () {
		$DT('input', oTable.fnGetNodes()).attr('checked',true);
	});
	
	$DT('#uncheckTodos').click(function () {
		$DT('input', oTable.fnGetNodes()).attr('checked',false);
	});


});