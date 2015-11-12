'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var plateau = new Engine();

PalettoTestCase.prototype.test1 = function (){
    assertTrue(plateau.initPlateau());
};

PalettoTestCase.prototype.test2 = function(){
    assertTrue(plateau.choisirBille("jaune"));
}

PalettoTestCase.prototype.test3 = function(){
   assertTrue(plateau.retirerPiece("a6") == 35);
}