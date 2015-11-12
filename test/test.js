'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var plateau = new Engine();

PalettoTestCase.prototype.test1 = function (){
    assertTrue(plateau.initPlateau());
};
/*
PalettoTestCase.prototype.test2 = function(){
    assertTrue(plateau.choisirCouleur("Jaune") == "Jaune");
}*/