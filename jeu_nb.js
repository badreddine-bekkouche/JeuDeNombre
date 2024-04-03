document.getElementById("titre").innerHTML="Trouve un nombre !";
document.getElementById("explications").innerHTML="Le principe du jeu est de deviner un nombre proposé par l'ordinateur<br/>Le nombre est compris entre 0 et 10";
const bouton = document.querySelector("button");
bouton.addEventListener("click", function() {
	var essaie=0;
	nb_a_trouver = Math.floor(Math.random() * 10);
	console.log(nb_a_trouver);
	joueur = prompt("Entrer votre nom");
	while (essaie < 3 ) {
	reponse = prompt("Entrez la réponse :");
	
		if (nb_a_trouver < reponse ) {
		alert("Trop grand !");
		essaie = essaie+1;
			} else if (nb_a_trouver > reponse) {
			alert("Trop petit !");
			essaie += 1 ;
				} else {
				essaie = essaie+1;
				
				}}
					if (essaie ==3){
					alert("Perdu");
}
		var essaie1=0;
		joueur1 = prompt("Entrer votre nom");
		while (essaie1 < 3 ) {
		reponse1 = prompt("Entrez la réponse :");
	
		if (nb_a_trouver < reponse1 ) {
		alert("Trop grand !");
		essaie1 = essaie1+1;
			} else if (nb_a_trouver > reponse1) {
			alert("Trop petit !");
			essaie1 += 1 ;
				} else {
				essaie1 = essaie1+1;
				
				
				}}
					if (essaie1 ==3){
					alert("Perdu");
}

	     if ( essaie > essaie1){
	     alert(" Joueur ",+joueur1+ " Gagner , votre nombre d'essaie est de ", +essaie1+ "Joueur 2",+joueur+" Perdu , votre nombre d'essaies est de ",+essaie);
	     } else if (essaie < essaie1){
	     alert(" Joueur ",+joueur+ " Gagner , votre nombre d'essaie est de ", +essaie+ "Joueur 2",+joueur1+" Perdu , votre nombre d'essaies est de ",+essaie1);
	     } 
	     
	     
	      	
})

	
