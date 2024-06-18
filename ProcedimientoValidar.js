//ARRG Procedimiento para validar campos
var $val= jQuery.noConflict();

/*$val.validator.setDefaults({
	submitHandler: function() {
		alert("submitted!");
	}
});*/

$val().ready(function() {
	// validate signup form on keyup and submit
	$val("#tblpublicacion").validate({
		rules: {
			ddlTipo: "required",
			txtNoPublicacion: {
				required: true,
				digits: true
			},
			txaTitulo: "required",
			txaResumen: "required",
			//txtPDF: "required",
			//txtAnexo: "required",
			//txaAreaInteres: "required",
			ddlAnio: "required",
			ddlMes: "required",
			ddlCoordinacion: "required",
			ddlEstatus: "required",
			txtPagPortada: {
				required: true,
				number: true,
				min: 0
			},
			txtPagColor: {
				required: true,
				number: true,
				min: 0
			},
			txtPagBN: {
				required: true,
				number: true,
				min: 0
			},
			//chkEmpastado: "required",
			//chkTerminado: "required",
			//chkDifusion: "required",
			//estatus: "required",
			lstAutorAsignados: "required"
			//lstCategoriaAsignados: "required"
		},
		/*messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email: "Please enter a valid email address",
			agree: "Please accept our policy",
			topic: "Please select at least 2 topics"
		}*/
	});
});