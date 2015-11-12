'use strict';

var Engine = function () {

// private attributes and methods
    var plateau;
    var choisirCouleur;
    var couleur = ['noir','vert','blanc','bleu','rouge','blanc'];
    var nbBille;
// public methods
    this.initPlateau = function(){
        console.log("Initialisation du plateau...");
        plateau = new Array(6);
        for(var a=0; a<6;a++){
            plateau[a] = new Array(6);
           // plateau[a] = couleur[a];
            for(var b=0;b<6;b++){
                plateau[a][b] = couleur[a];
            }
        }
        console.log(plateau);
        return true;
    }

    this.choisirCouleur = function(uneCouleur){
        couleur = uneCouleur;
        console.log("La couleur choisis :"+choisirCouleur);
        return uneCouleur;
    }

    this.retirerBille = function(position){
        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;
    }
    this.vueTableau = function(){
        console.log(plateau);
    }
};
