$(function(){
  //On stocke la largeur et la hauteur de la fenêtre dans des variables.
var widthWindow = $(window).width();
var heightWindow = $(window).height();
  //On stocke la largeur et la hauteur du carré dans des variables.
var widthSquare = $('#square').width();
var heightSquare = $('#square').height();
  //Je met un évênement keydown sur mon input.
  //e = event
  //Mettre 'html' et retirer l'input pour pouvoir le faire sans l'input.
$('#text').keydown(function(e){
  //On stocke la valeur de offset(point en haut à gauche du carré) à gauche et en haut.
  var squarePositionLeft = $('#square').offset().left;
  var squarePositionTop = $('#square').offset().top;

  switch (e.which){
    //keycode.info pour trouver le numéro d'une touche.
      case 37: // fleche gauche
      squarePositionLeft -= 10;
      break;
      case 38: // fleche haut
      squarePositionTop -= 10;
      break;
      case 39: // fleche droite
      squarePositionLeft += 10;
      break;
      case 40: // fleche bas
      squarePositionTop += 10;
      break;
    }
    //Si la position du carré est inférieure à 0 sur la gauche (arrive au bout).
    if(squarePositionLeft < 0){
    //Alors la position du carré = la largeur de la fenêtre (pour que le carré arrive à l'opposé de la fenêtre) - la largeur du carré (sinon que le point en haut à gauche du carré est pris en compte).
      squarePositionLeft = widthWindow - widthSquare;
    //Si la position du carré est inférieure à 0 sur le haut (arrive au bout).
    }else if(squarePositionTop < 0){
    //Alors la position du carré = la hauteur de la fenêtre (pour que le carré arrive à l'opposé de la fenêtre) - la hauteur du carré (sinon que le point en haut à gauche du carré est pris en compte).
      squarePositionTop = heightWindow - heightSquare;
    //Si la position du carré en hauteur + hauteur du carré est inférieur à la hauteur de la fenêtre
    }else if((squarePositionTop + heightSquare) > heightWindow){
    //Alors la position est égale à 0.
      squarePositionTop = 0
    }else if((squarePositionLeft + widthSquare) > widthWindow) {
      squarePositionLeft = 0
    }
    //Pour faire bouger le carré.
    $('#square').offset({top : squarePositionTop, left : squarePositionLeft});


 });

});
