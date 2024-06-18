var $p= jQuery.noConflict();
    $p(function() {
		$p("#Photo").carouFredSel({
			items 		: 3,
			direction	: "right",
			auto : {
				items: 1,
				fx: "scroll",
				easing		: "linear",
				duration	: 5000,
				pauseDuration: 10,
				pauseOnHover: "immediate"
			}
		});
		$p("#Photo a").prettyPhoto({
			theme: "light_rounded",
			changepicturecallback: function() {
				$p("#Photo").trigger("pause");
			},
			callback: function() {
				$p("#Photo").trigger("play");
			}
		});

		$p("#imagenes a").prettyPhoto({
			theme: "light_rounded",
			image_markup: '<img id="fullResImage" src="{path}" /><a href="{path}" target="_new"><div class="download-btn">Descargar imagen</div></a>',
			changepicturecallback: function() {
				jQuery(".pp_content").css("height", $p(".pp_content").height() + jQuery(".download-btn").outerHeight() + 10);
				$p("#imagenes").trigger("pause");
			},
			callback: function() {
				$p("#imagenes").trigger("play");
			}
		});
	});