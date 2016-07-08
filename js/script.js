// JavaScript Document
//$(document).ready(function(){
 
//    activeItem = $("#accordion li:first");
//    $(activeItem).addClass('active');
// 
//    $("#accordion li").hover(function(){
//        $(activeItem).animate({width: "50px"}, {duration:300, queue:false});
//        //tenia 450 de ancho
//		$(this).animate({width: "544px"}, {duration:300, queue:false});
//        activeItem = this;
//    });
// 
//});

//$(function(){
//    $('#Slaider1 div:gt(0)').hide();
//    setInterval(function(){
//      $('#Slaider1 div:first-child').fadeOut(0)
//         .next('div').fadeIn(500)
//         .end().appendTo('#Slaider1');}, 4000);      
//         
//    $('#Slaider2 div:gt(0)').hide();
//    setInterval(function(){
//      $('#Slaider2 div:first-child').fadeOut(0)
//         .next('div').fadeIn(500)
//         .end().appendTo('#Slaider2');}, 4000);         
//});


function cambiarOP1() {
  document.getElementById('opcion1').src = "img/btn/boton_contacto2.fw.png";
 }
  function volverOP1() {
  document.getElementById('opcion1').src = "img/btn/boton_contacto1.fw.png";
 } 

function cambiarOP2() {
  document.getElementById('opcion2').src = "img/btn/boton_terraza2.fw.png";
 }
  function volverOP2() {
  document.getElementById('opcion2').src = "img/btn/boton_terraza1.fw.png";
 } 
 
 function cambiarOP3() {
  document.getElementById('opcion3').src = "img/btn/boton_cocina2.fw.png";
 }
  function volverOP3() {
  document.getElementById('opcion3').src = "img/btn/boton_cocina1.fw.png";
 } 
 
 function cambiarOP4() {
  document.getElementById('opcion4').src = "img/btn/boton_comedor2.fw.png";
 }
  function volverOP4() {
  document.getElementById('opcion4').src = "img/btn/boton_comedor1.fw.png";
 } 
 
 function cambiarOP5() {
  document.getElementById('opcion5').src = "img/btn/boton_dormitorio2.fw.png";
 }
  function volverOP5() {
  document.getElementById('opcion5').src = "img/btn/boton_dormitorio1.fw.png";
 } 
 
 function cambiarOP6() {
  document.getElementById('opcion6').src = "img/btn/boton_artesanos2.fw.png";
 }
  function volverOP6() {
  document.getElementById('opcion6').src = "img/btn/boton_artesanos1.fw.png";
 } 

 function cambiarOP7() {
  document.getElementById('opcion7').src = "img/btn/boton_sala2.fw.png";
 }
  function volverOP7() {
  document.getElementById('opcion7').src = "img/btn/boton_sala1.fw.png";
 } 

// function mensaje1(){
//         $( "#dialog1" ).dialog({position: { my: "center", at: "center" ,of:"CentroTabla"}});     
// }
 
//  function mensaje2(){
//      $( "#dialog2" ).dialog({position: { my: "center", at: "center" ,of:"CentroTabla"}});
// }


function MostrarDiv(NombreDiv){
    document.getElementById('divIndice').style.display='none';
    document.getElementById('divContacto').style.display='none';
    document.getElementById('divTerraza').style.display='none';
    document.getElementById('divCocina').style.display='none';
    document.getElementById('divComedor').style.display='none';
    document.getElementById('divDormitorio').style.display='none';
    document.getElementById('divArtesanos').style.display='none';
    document.getElementById('Divsala').style.display='none';
    document.getElementById(NombreDiv).style.display='block';
    
}
