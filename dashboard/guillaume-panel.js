(function() {
	'use strict';

	var popuptitre = document.getElementById("popuptitre");
	var popupcontenu = document.getElementById("popupcontenu");
	var send = document.getElementById("send");
	var show = document.getElementById("show");
	var hide = document.getElementById("hide")

	var Titre = nodecg.Replicant('Titre');
	var Contenu = nodecg.Replicant('Contenu')

	send.addEventListener('click', function(e) {
		Titre.value = popuptitre.value;
		Contenu.value = popupcontenu.value;
	}, false);

	show.addEventListener('click', function(e) {
		nodecg.sendMessage('show');
	});

	hide.addEventListener('click', function(e) {
		nodecg.sendMessage('hide');
	})

})();
