$(document).ready(function() {
$("#browser").text(navigator.userAgent); // c'est navigator.userAgent et non pas window.navigator
$(window).on('resize', 'load', function(event) // il faut séparer 'resize' et 'load' par une virgule
{ 
  $(".width").text(window.innerWidth); // width est une class dans le html, il faut donc mettre le point
  $(".height").text(window.innerHeight); // idem
}); // erreur oublie d'accolade et parenthèse
});
