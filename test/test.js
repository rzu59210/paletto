'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var plateau = new Engine();

PalettoTestCase.prototype.test1 = function (){
    assertTrue(plateau.initPlateau());
};

PalettoTestCase.property.test2 = function(){

}