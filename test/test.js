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
    assertTrue(plateau.retirerPiece("a6"));
    assertTrue(plateau.getBille() == 35);
};

PalettoTestCase.prototype.test4 = function(){
    plateau.choisirBille("noir");
    assertTrue(plateau.checkNbVoisin("a1"));
    plateau.retirerPiece("a1");
    assertTrue(plateau.checkNbVoisin("f6"));
    plateau.retirerPiece("f1");
}

PalettoTestCase.prototype.test5 = function(){
    assertTrue(plateau.checkNbVoisin("a1"));
    assertTrue(plateau.getConnected("a1"));
}

PalettoTestCase.prototype.test6 = function(){
    assertTrue(plateau.initPlateau());

    assertTrue(plateau.choisirBille("noir"));
    assertTrue(plateau.retirerPiece("a1"));
    assertTrue(plateau.retirerPiece("f6"));

    assertTrue(plateau.choisirBille("vert"));
    assertTrue(plateau.retirerPiece("b1"));
    assertTrue(plateau.retirerPiece("e6"));
    assertTrue(plateau.retirerPiece("f5"));

    assertTrue(plateau.choisirBille("jaune"));
    assertTrue(plateau.retirerPiece("a2"));
    assertTrue(plateau.retirerPiece("a6"));


    assertTrue(plateau.choisirBille("bleu"));
    assertTrue(plateau.retirerPiece("a3"));



    assertTrue(plateau.choisirBille("blanc"));
    assertTrue(plateau.retirerPiece("a5"));
    assertTrue(plateau.retirerPiece("f4"));
    assertTrue(plateau.retirerPiece("f1"));
    assertTrue(plateau.retirerPiece("c1"));

    assertTrue(plateau.choisirBille("rouge"));
    assertTrue(plateau.retirerPiece("e1"));
    assertTrue(plateau.retirerPiece("f3"));
    assertTrue(plateau.retirerPiece("d6"));
    assertTrue(plateau.retirerPiece("a4"));

    assertTrue(plateau.choisirBille("bleu"));
    assertTrue(plateau.retirerPiece("d1"));
    assertTrue(plateau.retirerPiece("f2"));
    assertTrue(plateau.retirerPiece("b6"));


    assertTrue(plateau.choisirBille("jaune"));
    assertTrue(plateau.retirerPiece("b3"));
    assertTrue(plateau.retirerPiece("e2"));
    assertTrue(plateau.retirerPiece("e5"));



    assertTrue(plateau.choisirBille("noir"));
    assertTrue(plateau.retirerPiece("b4"));
    assertTrue(plateau.retirerPiece("c6"));
    assertTrue(plateau.retirerPiece("d5"));
    assertTrue(plateau.retirerPiece("e3"));

}
