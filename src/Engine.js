'use strict';

var Engine = function () {

// private attributes and methods
    var plateau;
    var couleur;
// public methods
    this.initPlateau = function(){
        plateau = new Array(6);
        for(var a=0; a<6;a++)
            plateau[a] = new Array(6);
    }

    this.choisirCouleur = function(uneCouleur){
        couleur = uneCouleur;
        console.log("La couleur choisis :"+couleur);
    }

};
