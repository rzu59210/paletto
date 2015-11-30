'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var plateau = new Engine();

PalettoTestCase.prototype.test1 = function (){
    assertTrue(plateau.initPlateau());
};

PalettoTestCase.prototype.test2 = function(){
    assertTrue(plateau.choisirBille("jaune"));
};

PalettoTestCase.prototype.test3 = function(){
   assertTrue(plateau.retirerPiece("a6") == 35);
};

PalettoTestCase.prototype.test4 = function(){
    plateau.choisirBille("noir");
    assertTrue(plateau.checkNbVoisin("a1"));
    plateau.retirerPiece("a1");
    assertTrue(plateau.checkNbVoisin("f6"));
    plateau.retirerPiece("f1");
}

PalettoTestCase.prototype.test5 = function(){
    plateau.choisirBille("bleu");
    assertTrue(plateau.checkNbVoisin("c3"));
    assertTrue(plateau.getConnected("c3"));
}