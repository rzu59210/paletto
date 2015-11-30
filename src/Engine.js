'use strict';

var Engine = function () {

// private attributes and methods
    var plateau;
    var j1,j2,j3,j4,j5,j6;
    var couleurPiece;
    var nbBille = 36;
    var joueurActif = 1;
// public methods
    this.initPlateau = function(){
        var validePlateau = false;
        console.log("Initialisation du plateau...");
        plateau = new Array(6);
        for(var a=0; a<6;a++){
            plateau[a] = new Array(6);
        }
        plateau[0][0] = "noir";
        plateau[0][1] = "vert";
        plateau[0][2] = "blanc";
        plateau[0][3] = "bleu";
        plateau[0][4] = "rouge";
        plateau[0][5] = "blanc";

        plateau[1][0] = "jaune";
        plateau[1][1] = "blanc";
        plateau[1][2] = "vert";
        plateau[1][3] = "rouge";
        plateau[1][4] = "jaune";
        plateau[1][5] = "bleu";

        plateau[2][0] = "bleu";
        plateau[2][1] = "jaune";
        plateau[2][2] = "bleu";
        plateau[2][3] = "blanc";
        plateau[2][4] = "noir";
        plateau[2][5] = "rouge";

        plateau[3][0] = "rouge";
        plateau[3][1] = "noir";
        plateau[3][2] = "rouge";
        plateau[3][3] = "vert";
        plateau[3][4] = "bleu"
        plateau[3][5] = "blanc";


        plateau[4][0] = "blanc";
        plateau[4][1] = "vert";
        plateau[4][2] = "jaune";
        plateau[4][3] = "noir";
        plateau[4][4] = "jaune";
        plateau[4][5] = "vert";

        plateau[5][0] = "jaune";
        plateau[5][1] = "bleu";
        plateau[5][2] = "noire";
        plateau[5][3] = "rouge";
        plateau[5][4] = "vert";
        plateau[5][5] = "noir";
        console.log(plateau);
        for(var i=0;i<plateau.length;i++){
            for(var y=0; y<plateau.length;y++){
                if(plateau[i][y] != null)
                    validePlateau = true;

            }
        }
        validePlateau = this.justaPosition(plateau);
        return validePlateau;
    }


    this.justaPosition = function(plateau){
        for(var lgn = 0; lgn < plateau.length; lgn++){
            for(var col =0;col < plateau.length; col++){
                if(lgn != 0 && plateau[lgn][col] == plateau[lgn-1][col]){
                    return false;
                }
                if(lgn != plateau.length - 1 && plateau[lgn][col] == plateau[lgn+1][col]){
                    return false;
                }
                if(col != 0 && plateau[lgn][col] == plateau[lgn][col-1]){
                    return false;
                }
                if(col != plateau.length-1 && plateau[lgn][col] == plateau[lgn][col+1]){
                    return false;
                }

            }
        }
        return true;
    }

    this.choisirBille = function(couleur){
        couleurPiece = couleur;
        var checkCoin = this.checkCoin(couleur);
        return checkCoin;
    }

    this.checkCoin = function(couleur){
        if(!plateau[0][0] == couleur)
            return false;
        if(!plateau[0][5] == couleur)
            return false;
        if(!plateau[5][0] == couleur)
            return false;
        if(!plateau[5][5] == couleur)
            return false;
        return true;
    }

    this.retirerPiece = function(position){
        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;
        plateau[x][y] = "";
        j1 = "1PJ";
        console.log("x : "+x + "y : " + y);
        nbBille--;
        joueurActif++;
        console.log(nbBille);
        return nbBille;
    }

    this.checkNbVoisin = function(position){
        var nbVoisin = 0;
        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;
        if(x != 0 && plateau[x-1][y] != ""){
            nbVoisin++
        }
        if(x != plateau.length-1 && plateau[x+1][y] != ""){
            nbVoisin++;
        }
        if(y != 0 && plateau[x][y-1] != ""){
            nbVoisin++;
        }
        if(y != plateau.length-1 && plateau[x][y+1] != ""){
            nbVoisin++;
        }
        console.log("Nb voisin : "+nbVoisin);
        return nbVoisin<=2;
    }


    this.getConnected = function(position){
        var nbVoisin = 0;
        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;
        if(x != 0 && plateau[x-1][y] != ""){
            nbVoisin++
        }
        if(x != plateau.length-1 && plateau[x+1][y] != ""){
            nbVoisin++;
        }
        if(y != 0 && plateau[x][y-1] != ""){
            nbVoisin++;
        }
        if(y != plateau.length-1 && plateau[x][y+1] != ""){
            nbVoisin++;
        }
        if(nbVoisin == 2){
            if(x!= 0 && x != plateau.length-1 && plateau[x-1][y] != "" && plateau[x+1][y] != "")
                 return false;
            if(y!= 0 && y != plateau.length-1 && plateau[x][y-1] != "" && plateau[x][y+1] != "")
                return false;
            if(x!= 0 && x != plateau.length-1 && y!= 0 && y != plateau.length-1 && plateau[x+1][y] != "" && plateau[x][y-1] != ""  && y != plateau.length-1 && plateau[x+1][y-1] != "" )
                return false;
            if(x!= 0 && x != plateau.length-1 && y!= 0 && y != plateau.length-1 && plateau[x+1][y] != "" && plateau[x][y+1] != "" && plateau[x+1][y+1] != "" )
                return false;
            if(x!= 0 && x != plateau.length-1 && y!= 0 && y != plateau.length-1 && plateau[x-1][y] != "" && plateau[x][y-1] != "" && plateau[x-1][y-1] != "" )
                return false;
            if(x!= 0 && x != plateau.length-1 && y!= 0 && y != plateau.length-1 && plateau[x-1][y] != "" && plateau[x][y+1] != "" && plateau[x+1][y +1] != "" )
                return false;
        }
         return true;
    }

};
