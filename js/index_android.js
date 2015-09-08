/*
EPS - APP BSC
Autor: Estefania Pulgar Sampedro
Agencia: Keyframe
*/

var direccion = 'https://www.barcelonasc.com.ec/apps/bsc_news/';
var ringtoneSound = 'https://www.barcelonasc.com.ec/descargas/ringtones/';
var rutaimagen = 'https://www.barcelonasc.com.ec/';
var seleccionPlantilla;
var sonidos = ["amarillo_es_mi_color", "barcelona_soy_yo", "dale_dale_barcelona", "himno_de_barcelona", "sangre_de_campeon", "un_solo_idolo"];
var nsonido = ["Amarillo es mi color", "Barcelona soy yo",  "Dale Dale Barcelona", "Himno de barcelona", "Sangre de Campeon", "Un Solo Idolo"];
var ringtone = 3;
var audio;
var h1var=0;
var h2=0;
var arrayEquipos = new Array();
var arrayPuntajesPJ = new Array();
var arrayPuntajesGD = new Array();
var arrayPuntajesPTS = new Array();
/*/**/
var mesNoticia;


/////////////////////////////////////////////////////////////
//CARGO DE BASE
/////////////////////////////////////////////////////////////
partidoActual = 8;

/////////////////////////////////////////////////////////
$( document ).ready(function() {


  var tamanPantallaHeight = $(window).height()+100;
  porcentaje = (tamanPantallaHeight * 66) /100;
  $('#video').css('width',$(window).width()+100);
  $('#video').css('height',tamanPantallaHeight-100);
  $('.ui-content').css('height',tamanPantallaHeight-100);

  $('#maximun').css('height',tamanPantallaHeight-100);
  $('#maximun').css('height',tamanPantallaHeight-100);
  $('#mypanel .ui-panel-inner').css('height', tamanPantallaHeight);
  $('#mypanel ul').css('height', tamanPantallaHeight-200);

  //video inicial
  var pic_num = 1;
  var pic_total = 602;
  var intervalo = 0;

  function load_img(){
    if(pic_num < pic_total){
      pic_num++;
      $('#video').attr('src', "frame/barcelona_"+pad(pic_num, 5)+".jpg");
    }
    if(pic_num >= pic_total){
      pic_num = 0;
    }
  } /*load_img*/

  var value = localStorage.getItem('token');
  if(value){
    clearInterval(intervalo);
    getVideos();
    $.mobile.changePage( "#principal", {
      transition: "fade"
    });  

  }else{

    intervalo = setInterval(load_img, 30);

  }
      getNoticias();
      cargoUnidadEquipo();
      cargoCampeonato();
      $( "#tabs" ).tabs();
      $( "#tabs2" ).tabs();
      getPartidoProximo(partidoActual);
      getAlineacion();
      getSuplentes();
      getTwitter();
      

      $('#tabs2').click(function(e) {
        e.preventDefault();
        $('.slider-for').css('visibility', 'hidden');
        $('.slider-nav').css('visibility', 'hidden');
        setTimeout(function(){
          $('.slider-for').css('visibility', 'visible');
          $('.slider-nav').css('visibility', 'visible');
         
          $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            autoplay: true,
            centerMode: true,
            focusOnSelect: true
          });
         },2000);
      });



    //ANIMACIONES
    
    $('.cancha-vs').css('visibility', 'hidden');
    $('.slider-for').css('visibility', 'hidden');
    $('.slider-nav').css('visibility', 'hidden');
 

    //SONIDOS
      $( ".play_button" ).click(function() {
          $('.play_button').hide();
          $('.pause_button').show();
          audio = new Audio(ringtoneSound+sonidos[ringtone]+'.mp3');
          $('.titulo_Audio span').html(nsonido[ringtone]);
          audio.play();
          audio.onended = function(){
            $('.play_button').show();
            $('.pause_button').hide();
          }
      });

      $('#regreso').click(function() {
        audio.pause();
        audio.currentTime = 0;
        $('.play_button').show();
        $('.pause_button').hide();
      });

      $( ".pause_button" ).click(function() {
        audio.pause();
        audio.currentTime = 0;
        $('.play_button').show();
        $('.pause_button').hide();
      });

      $( ".avanzo_button" ).click(function() {
        if(ringtone == 5){
          ringtone==5;
          console.log(ringtone);
          reproduzcoAudio();
        }else{
          ringtone++;
          console.log(ringtone);
          reproduzcoAudio();
        }
      });

      $( ".retrocedo_button" ).click(function() {
        if(ringtone == 0){
          ringtone==0;
          console.log(ringtone);
         reproduzcoAudio();
        }else{
          ringtone--;
          console.log(ringtone);
          reproduzcoAudio();
        }
      });
      
      //escondo objetos
      $('.pause_button').hide();



});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function descargo(argument){
  var imagePath = argument;
  var imageTitle = "bsc news"; 
  var folderName = "PluginImages"; 
  var success = function() { alert("Wallpaper Instalado con Éxito"); };   
  var error = function(message) { alert("Oopsie! " + message); }; 

  wallpaper.setImage(imagePath, imageTitle, folderName, success, error);

  wallpaper.saveImage(imagePath, imageTitle, folderName, success, error); 
}

function ring(argument, nameRing)
{/*
  alert(argument);
alert(nameRing);
var fileTransfer = new FileTransfer();
fileTransfer.download(
    argument,
    "file://Download/"+nameRing,
    function(entry) {
        alert("Sound downloaded!");
    },
    function(error) {
        alert("download error source " + error.source);
        alert("download error target " + error.target);
        alert("upload error code" + error.code);
    });*/
}   

function reproduzcoAudio(){
  $('.play_button').hide();
  $('.pause_button').show();
  audio.pause();
  audio.currentTime = 0;
  audio = new Audio(ringtoneSound + sonidos[ringtone]+'.mp3');
  audio.play();
  $('.titulo_Audio span').html(nsonido[ringtone]);
  audio.onended = function(){
    $('.play_button').show();
    $('.pause_button').hide();
  }
}

function reproducir(argument){
  $('.play_button').hide();
    $('.pause_button').show();
    audio = new Audio(ringtoneSound + sonidos[argument]+'.mp3');
    $('.titulo_Audio span').html(nsonido[argument]);
    audio.play();
    audio.onended = function(){
      $('.play_button').show();
      $('.pause_button').hide();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getNoticias() { 
  var n=0;  
    $.ajax({
      url: direccion+'actions/getInfo.php',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            codigo = value.id;
            //titular = value.titulo; 
            contenido = value.contenido; 
            anio = value.year;
            mes =value.month;
            dia = value.day;
            num_news = value.num_news;
            categoria = value.category;
            picture_quantity = value.picture_quantity;
            
            var titular = value.titulo;
            titular = titular.substring(0, 40);

            var extracto = value.contenido;
            extracto = extracto.substring(0, 80);
            $('.noticias').append('<li class="col-sm-12 col-xs-12 col-md-12"> <div class="row"> <a href="#noticia?noticia='+codigo+'" onclick="getNoticiaPublicada('+codigo+')" data-transition="slide"> <div class="col-sm-6 col-xs-6 col-md-6"> <div class="mini col-md-12 col-sm-12 col-xs-12 text-left">'+dia+'-'+mes+'-'+anio+' </div> <div class="col-sm-10 col-xs-10 col-md-10"> <div class="titulo_noticia">'+titular+' </div></div> </div> <div class="col-sm-6 col-xs-6 col-md-6"> <div class="pictureImage" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div> </div> </a> </div> </li>');
            n++;
            if( (n == '4') || (n == '18') ){
               $('.noticias').append("<li class='publicidad_noticia col-sm-12 col-xs-12 col-md-12'><div class='ads-noticias2' onclick='googlePlay()'></div></li>");
              //$('.noticias').append('<div class="noticia col-sm-12 col-xs-12 col-md-12" onclick="getNoticiaPublicada('+codigo+')"><a href="#noticia?noticia='+codigo+'" data-transition="slide"><div class="imagen-noticias col-sm-12 col-xs-12 col-md-12" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="texto-noticias col-sm-12 col-xs-12 col-md-12"><div class="mini col-xs-4 col-md-4 col-sm-4">'+categoria+'</div><div class="mini col-xs-8 col-md-8 col-sm-8">MARTES, 10 DE JUNIO DE 2015</div><div class="col-xs-12 col-md-12 col-sm-12">'+titular+'</div></div></a></div>');
            }else{
              if(n == '10'){
                $('.noticias').append('<li class="publicidad_noticia col-sm-12 col-xs-12 col-md-12"><a href="#"><div class="ads-noticias1"></div></a></li>');
              }
            }
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}
function googlePlay(){
  window.open("https://play.google.com/store/apps/details?id=air.com.barcelonasc.bscfan", '_system');
}
function getNoticiaPublicada(argument) {  
    var datos ={
    'noti': argument
    }
    $.ajax({
      url: direccion+'actions/getNoticia.php',
      type: "GET",
      cache: true,
      dataType: "json",
      data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            codigo = value.id;
            titular = value.titulo; 
            contenido = value.contenido; 
            anio = value.year;
            mes =value.month;
            dia = value.day;
            categoria = value.category;
            num_news = value.num_news;
            picture_quantity = value.picture_quantity;
            $('.noticiaPublicada').html('<div class="row"> <div class="noticia col-md-12 col-sm-12 col-xs-12"> <img src="'+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg" /> <div class="fecha col-md-12 col-sm-12 col-xs-12 text-left"> <span>'+dia+'-'+mes+'-'+anio+' | '+ categoria +'</span> </div> <div class="titulo_de_noticia col-md-12 col-sm-12 col-xs-12"> <h2>'+titular+'</h2> </div> </div> <div class="info_de_noticia col-md-12 col-sm-12 col-xs-12"> <p>'+ contenido +'</p> </div> </div>');
            //$('.noticiaPublicada').html('<div class="noticia"><div class="imgNoticia" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="titulo_de_noticia"><h2>'+titular+'</h2></div><hr/><div class="info_de_noticia">'+ contenido +'</div></div>');
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}
function getAlineacion() {  
    $.ajax({
      url: direccion+'actions/getAlineacion.php',
      type: "GET",
      cache: true,
      dataType: "json",
      //data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            number = value.number;
            name = value.name;
            position = value.position;
            
            //agrego 1
              if(position == '1'){
                  $('#position1').append('<div class="col-md-12 col-xs-12 col-sm-12 text-center"><div>'+number+'</div><p>'+name+'</p></div>');
              }
            //agrego 2
              if(position == '2'){
                  $('#position2').append('<div class="col-md-3 col-xs-3 col-sm-3 text-center"><div>'+number+'</div><p>'+name+'</p></div>');
              }
            //agrego 3
              if(position == '3'){
                  $('#position3').append('<div class="col-md-3 col-xs-3 col-sm-3 text-center"><div>'+number+'</div><p>'+name+'</p></div>');
              }
            //agrego 4
              if(position == '4'){
                  $('#position4').append('<div class="col-md-6 col-xs-6 col-sm-6 text-center"><div>'+number+'</div><p>'+name+'</p></div>');
              }
            
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function getSuplentes() {  
    $.ajax({
      url: direccion+'actions/getSuplentes.php',
      type: "GET",
      cache: true,
      dataType: "json",
      //data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            number = value.number;
            name = value.name;
            $('.suplentes').append('<div class="col-md-6 col-xs-6 col-sm-6">'+name +'( '+ number+' ) </div> ');
            
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function getTwitter(){
  $.ajax({
      url: direccion+'actions/apiTwitter.php',
      type: "GET",
      cache: true,
      dataType: "json",
      //data: datos,
      success: function(response){ 
      console.log(response); 
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            imagen = value.imagen;
            url = value.url;
            texto = value.texto;
            $('.minutoTwitter').append('<div class="row"><div class="col-md-2 col-xs-2 col-sm-2"><a href="https://twitter.com/'+url+'"><img src="'+imagen+'" /></a></div><div class="col-md-10 col-xs-10 col-sm-10"><h4><a href="https://twitter.com/'+url+'">'+url+'</a></h4><p>'+texto+'</p></div></div>');
            
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    }); 
}

function getVideos() { 
    $.ajax({
      url: direccion+'actions/getVideos.php',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            link = value.link;
            console.log(link);
            $('.sliderVideo').append('<div><iframe id="bsc'+key+'" width="100%" height="150" src="https://www.youtube.com/embed/'+link+'?rel=0&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>');
          });
        }
      },
      complete: function(){
        $('.sliderVideo').slick({
          autoplay: true,
          dots: true,
          arrows: false,
          speed: 400
        });
         $('.sliderVideo').on({
            beforeChange: function (event, slick, current_slide_index, next_slide_index) {
              $('div.slick-active iframe')[0].src = $('div.slick-active iframe')[0].src;                
            }
          })
      },
      error : function(error){     
        //alert(error);
      }
    });     
}

function guardoDatos(){
  nombre = $('#name').val();
  apellido = $('#lastname').val();
  pais = $('#country').val();
  ciudad = $('#city').val();
  telefono = $('#phone').val();
  email = $('#email').val();

  var datos ={
      'nombre': nombre,
      'apellido': apellido,
      'pais': pais,
      'ciudad': ciudad,
      'telefono': telefono,
      'email': email
    }
    $.ajax({
      url: direccion+'actions/guardoRegistro.php',
      type: "POST",
      cache: true,
      dataType: "json",
      data: datos,
      success: function(response){  
        //alert(response); 
        var obj = telefono;
        localStorage.setItem('token', obj);
        
        $.mobile.changePage("#principal");

        getVideos();
      },
      error : function(error){     
          //alert(error);
      }

    });  
}

function cargoUnidadEquipo(){
    $.ajax({
      url: direccion+'actions/getPlantilla.php',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        console.log(response);
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            name = value.name;
            lastname = value.lastname;
            number = value.number;
            picture = value.picture;
            charge = value.charge;
            type = value.type;
            state = value.state;
            $('#cargo-unidad-equipo').append('<li class="jugador"> <div class="numberJugador col-md-5 col-xs-5 col-sm-5 text-right"> <span>'+number+'</span> </div> <div class="datos_delJugador col-md-7 col-xs-7 col-sm-7 text-left"> <strong>'+name+'</strong> <p>'+lastname+'</p> <span><strong>'+charge+'</strong> /</span> </div> <div class="imagenMenor col-md-12 col-xs-12 col-sm-12"></div> </li>');
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });
}

function cargoCampeonato(){

  $('.posicionesEtapa1').empty();
  $('.tabla_posicionesEtapa2 tbody').empty();
    $.ajax({
      url: direccion+'actions/getEstadisticas.php',
      type: "GET",
      cache: true,
      dataType: "json",
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 

            equipo = value.equipo;
            pj = value.pj;
            pg = value.pg;
            pe = value.pe;
            pp = value.pp;
            gf = value.gf;
            gc = value.gc;
            gd = value.gd;
            pts = value.pts;
            fase = value.fase;
            
            if(fase == 'Serie A Fase 1'){

              arrayEquipos.push(equipo);
              arrayPuntajesPJ.push(pj);
              arrayPuntajesGD.push(gd);
              arrayPuntajesPTS.push(pts);
              $('.posicionesEtapa1').append('<li class="col-md-3 col-xs-3 col-sm-3 text-right"> <img src="'+rutaimagen+'/img/widget/'+equipo.toLowerCase()+'.png" /></li><li class="col-md-2 col-xs-2 col-sm-2 text-left">  '+equipo+'</li> <li class="col-md-2 col-xs-2 col-sm-2 text-center"> '+pj+'</li> <li class="col-md-2 col-xs-2 col-sm-2 text-center"> '+gd+'</li> <li class="col-md-3 col-xs-3 col-sm-3 text-center"> '+pts+'</li><li class="rayaSepara col-md-12 col-xs-12 col-sm-12"></li>');
              console.log(arrayPuntajesPJ);

            }
            if(fase == 'Serie A Fase 2'){
                var h1var = arrayEquipos.indexOf(equipo);
                $('.posicionesEtapa2').append('<li class="col-md-3 col-xs-3 col-sm-3 text-right"> <img src="'+rutaimagen+'/img/widget/'+equipo.toLowerCase()+'.png" /></li><li class="col-md-2 col-xs-2 col-sm-2 text-left">  '+equipo+'</li> <li class="col-md-2 col-xs-2 col-sm-2 text-center"> '+pj+'</li> <li class="col-md-2 col-xs-2 col-sm-2 text-center"> '+gd+'</li> <li class="col-md-3 col-xs-3 col-sm-3 text-center"> '+pts+'</li><li class="rayaSepara col-md-12 col-xs-12 col-sm-12"></li>');
                arrayPuntajesPJ[h1var] = parseInt(arrayPuntajesPJ[h1var]) + parseInt(pj);
                arrayPuntajesGD[h1var] = parseInt(arrayPuntajesGD[h1var]) + parseInt(gd);
                arrayPuntajesPTS[h1var] = parseInt(arrayPuntajesPTS[h1var]) + parseInt(pts);
                
                $('.posicionesAcumulada').append('<li class="col-md-3 col-xs-3 col-sm-3 text-right"> <img src="'+rutaimagen+'/img/widget/'+equipo.toLowerCase()+'.png" /></li> <li class="col-md-2 col-xs-2 col-sm-2 text-left"> '+equipo+'</li> <li class="col-md-2 col-xs-2 col-sm-2 text-center"> '+arrayPuntajesPJ[h1var]+'</li> <li class="col-md-2 col-xs-2 col-sm-2 text-center"> '+arrayPuntajesGD[h1var]+'</li> <li class="col-md-3 col-xs-3 col-sm-3 text-center"> '+arrayPuntajesPTS[h1var]+'</li><li class="rayaSepara col-md-12 col-xs-12 col-sm-12"></li>');
                //h1var++;
            }

             
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });    
}

function getPartidoProximo(argument){   
  partidoActual = argument;
    var datos ={
    'fecha': partidoActual
    }
    $.ajax({
      url: direccion+'actions/getPartidoFecha.php',
      type: "GET",
      cache: true,
      dataType: "json",
      data: datos,
      success: function(response){
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            fecha = value.fecha;
            hora = value.hora;
            equipo1 = value.equipo1;
            campeonato = value.campeonato;
            equipo2 = value.equipo2;
            estadio = value.estadio;
            
            $('.cancha-vs').append('<div> <div class="col-sm-12 col-xs-12 col-md-12 text-center"> <h4>Campeonato Ecuatoriano de Fútbol</h4> <p>Fecha: '+ fecha +' |  Hora: '+ hora +'</p> </div> <div class="name_Equipo1 aumento-left name_Equipo col-sm-5 col-xs-5 col-md-5 text-center">'+equipo1+'</div> <div class="col-sm-2 col-xs-2 col-md-2"></div> <div class="name_Equipo2 aumento-right name_Equipo col-sm-5 col-xs-5 col-md-5 text-center">'+equipo2+'</div> <div class="equipo1 col-xs-4 col-md-4 col-sm-4 text-center"> <img src="'+rutaimagen+'/img/widget/'+equipo1+'.png" /> </div> <div class="col-xs-3 col-md-3 col-sm-3 text-center centroV"> <span>VS.</span> </div> <div class="equipo2 col-xs-5 col-md-5 col-sm-5 text-center"> <img src="'+rutaimagen+'/img/widget/'+equipo2+'.png" /> </div> <div class="espacio col-md-12 col-xs-12 text-center"> <h5>Estadio <strong> '+estadio+'</strong></h5> </div> </div>');
          });
        }              
      },
      complete :function(response){
        //alert(1);
        $('.cancha-vs').slick({
          infinite: true,
          autoplay:true,
          dots:false,
          arrows:false
        });
      },
      error : function(error){     
          //alert(error);
      }

    }).done(function(){
      //alert(2);
      
    }).then(function(){
      //alert(3);
      
    });
}

    
/*********************************************************************/
/* FUNCIONES */
/*********************************************************************/

$(document).on('pagebeforeshow', '#proximopartido', function(){  
    //$('.sliderVideo').empty();
    $('.cancha-vs').css('visibility', 'hidden');
    setTimeout(function(){
    //  alert('9999999999999999999999');
      $('.cancha-vs').css('visibility', 'visible');
      $('.cancha-vs').slick({
        infinite: true,
        autoplay: true
      });
     },2000);
 });
$(document).on("pagebeforechange", function() { 
  $('iframe').src = $('iframe').src;
});
$(document).on('pagebeforeshow', '#descargas', function(){  
    $('.slider-for').css('visibility', 'hidden');
    $('.slider-nav').css('visibility', 'hidden');
    setTimeout(function(){
      $('.slider-for').css('visibility', 'visible');
      $('.slider-nav').css('visibility', 'visible');
     // alert('9999999999999999999999');
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        autoplay: true,
        centerMode: true,
        focusOnSelect: true
      });
     },2000);
 });
 


