/*
EPS - APP BSC
Autor: Estefania Pulgar Sampedro
Agencia: Keyframe
*/

var direccion = 'https://www.barcelonasc.com.ec/apps/bsc_news/';
var rutaimagen = 'https://www.barcelonasc.com.ec/';
var seleccionPlantilla;
var sonidos = ["adams_family", "ba_ba_banana", "games_of_thrones", "jurassic_park", "minion_ring_ring", "tokyo_drift"];
var nsonido = ["Amarillo es mi color", "Barcelona soy yo",  "Dale Dale Barcelona", "Himno de barcelona", "Sangre de Campeon", "Un Solo Idolo"];
var ringtone = 3;
var audio;

$( document ).ready(function() {
      //getVideos();
      getNoticias();
      getEquipoIndice();
      cargoUnidadEquipo('ARQUERO');
      cargoCampeonato();
      getPartidoProximo('5');

      $( "#tabs" ).tabs();
      $( "#tabs2" ).tabs();

      //array sounds
      $( ".play_button" ).click(function() {
          $('.play_button').hide();
          $('.pause_button').show();
          audio = new Audio(direccion+'sound/'+sonidos[ringtone]+'.mp3');
          $('.titulo_Audio span').html(nsonido[ringtone]);
          audio.play();
          audio.onended = function(){
            $('.play_button').show();
            $('.pause_button').hide();
          }
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

$(document).on('pagebeforeshow', '#plantillas', function(){     
         // alert('My name is ' + firstname + ' ' + lastname);
         var swiper;
        setTimeout(function(){
          console.log('cargo');
          var swiper1 = new Swiper('.swiper1', { 
          //pagination: '.swiper-pagination1',
          slidesPerView: 3,
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          onSlideChangeEnd : function(swiperHere) {
            seleccionPlantilla = $('.swiper1 .swiper-slide-active').html();
                console.log( seleccionPlantilla );
                cargoUnidadEquipo(seleccionPlantilla);

                setTimeout(function(){
                //  alert(1);
                swiper2 = new Swiper('.swiper2', { 
                  //pagination: '.swiper-pagination2',
                  paginationClickable: true,
                  initialSlide: 0,
                  observer: true,
                  preloadImages: true,
                  centeredSlides: true,
                  nextButton: '.swiper-button-next',
                  prevButton: '.swiper-button-prev'
                 })
                }, 1000);

            }
         })
      
      swiper2 = new Swiper('.swiper2', { 
               // pagination: '.swiper-pagination2',
                  paginationClickable: true,
                  centeredSlides: true,
                  observer: true,
                  preloadImages: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
               })
        
    }, 500);
 });

$(document).on('pagebeforeshow', '#descargas', function(){ 
  setTimeout(function(){
    console.log('cargo');
    var swiper3 = new Swiper('.swiper3', { 
          pagination: '.swiper-pagination3',
            paginationClickable: true,
            slidesPerView: '3',
            centeredSlides:true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 30,
          onSlideChangeEnd : function(swiperHere) {
            seleccionoWallpaper = $('.swiper3 .swiper-slide-active').html();
                console.log( seleccionoWallpaper );
                $('.wallpaper_para_descargar').html(seleccionoWallpaper);
          }
         })
  }, 500);

});

function reproduzcoAudio(){
  $('.play_button').hide();
  $('.pause_button').show();
  audio.pause();
  audio.currentTime = 0;
  audio = new Audio(direccion+'sound/'+sonidos[ringtone]+'.mp3');
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
    audio = new Audio(direccion+'sound/'+sonidos[argument]+'.mp3');
    $('.titulo_Audio span').html(nsonido[argument]);
    audio.play();
    audio.onended = function(){
      $('.play_button').show();
      $('.pause_button').hide();
    }
}
function getNoticias() { 
  var n=0;  
    $.ajax({
      url: direccion+'actions/getInfo.php',
      type: "POST",
      cache: false,
      dataType: "json",
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            codigo = value.id;
            titular = value.titulo; 
            contenido = value.contenido; 
            anio = value.year;
            mes =value.month;
            dia = value.day;
            num_news = value.num_news;
            categoria = value.category;
            picture_quantity = value.picture_quantity;
            var extracto = value.contenido;
            $('.noticias').append('<li class="col-sm-12 col-xs-12 col-md-12"><a href="#noticia?noticia='+codigo+'" onclick="getNoticiaPublicada('+codigo+')" data-transition="slide"> <div class="imagen-noticias col-sm-12 col-xs-12 col-md-12" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div> <div class="packN col-sm-12 col-xs-12 col-md-12"> <div class="col-sm-12 col-xs-12 col-md-12"> <div class="mini col-xs-2 col-md-2 col-sm-2 bordeLeft"><strong>'+categoria+'</strong></div> <div class="mini col-xs-9 col-md-9 col-sm-9">MARTES, 10 DE JUNIO DE 2015</div> <div class="col-xs-12 col-md-12 col-sm-12"><strong>'+titular+'</strong></div></div></div></a></li>');
            n++;
            if( (n == '4') || (n == '10') || (n == '18') ){
              $('.noticias').append('<li class="col-sm-12 col-xs-12 col-md-12"><a href="#"><div class="ads-noticias1"></div></a></li>');
              //$('.noticias').append('<div class="noticia col-sm-12 col-xs-12 col-md-12" onclick="getNoticiaPublicada('+codigo+')"><a href="#noticia?noticia='+codigo+'" data-transition="slide"><div class="imagen-noticias col-sm-12 col-xs-12 col-md-12" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="texto-noticias col-sm-12 col-xs-12 col-md-12"><div class="mini col-xs-4 col-md-4 col-sm-4">'+categoria+'</div><div class="mini col-xs-8 col-md-8 col-sm-8">MARTES, 10 DE JUNIO DE 2015</div><div class="col-xs-12 col-md-12 col-sm-12">'+titular+'</div></div></a></div>');
            }
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
      type: "POST",
      cache: false,
      dataType: "json",
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            link = value.link;
            $('.sliderVideo swiper-wrapper').append('<div class="col-sm-12 col-xs-12 col-md-12"><iframe width="420" height="315" src="https://www.youtube.com/embed/'+link+'" frameborder="0" allowfullscreen></iframe></div>');
             verVideos = $('.sliderVideo .swiper-slide-active').html();
                console.log( verVideos );
                cargoUnidadEquipo(verVideos);

                setTimeout(function(){
                //  alert(1);
                swiper2 = new Swiper('.swiper2', { 
                  //pagination: '.swiper-pagination2',
                  paginationClickable: true,
                  initialSlide: 0,
                  observer: true,
                  preloadImages: true,
                  centeredSlides: true,
                  nextButton: '.swiper-button-next',
                  prevButton: '.swiper-button-prev'
                 })
                }, 1000);
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function getPartidoProximo(argument) {   
    $('.equipo1').empty();
    $('.equipo2').empty();
    $('.name_Equipo1').empty();
    $('.name_Equipo2').empty();
    var datos ={
    'fecha': argument
    }
    $.ajax({
      url: direccion+'actions/getPartidoFecha.php',
      type: "POST",
      cache: false,
      dataType: "json",
      data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            fecha = value.fecha;
            equipo1 = value.equipo1;
            campeonato = value.campeonato;
            equipo2 = value.equipo2;
            estadio = value.estadio;
            $('.name_Equipo1').html(equipo1);
            $('.name_Equipo2').html(equipo2);
            $('.equipo1').html('<img src="'+rutaimagen+'/img/widget/'+equipo1+'.png" />');
            $('.equipo2').html('<img src="'+rutaimagen+'/img/widget/'+equipo2+'.png" />');
            $('.espacio').html('<h5><strong>Estadio </strong>'+estadio+'</h5>');
            //$('.noticiaPublicada').html('<div class="noticia"><div class="imgNoticia" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="titulo_de_noticia"><h2>'+titular+'</h2></div><hr/><div class="info_de_noticia">'+ contenido +'</div></div>');
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function getNoticiaPublicada(argument) {   
    var datos ={
    'noti': argument
    }
    $.ajax({
      url: direccion+'actions/getNoticia.php',
      type: "POST",
      cache: false,
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
            $('.noticiaPublicada').html('<div class="noticia row"><div class="col-md-12 col-sm-12 col-xs-12"><div class="imgNoticia" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="titulo_de_noticia col-md-12 col-sm-12 col-xs-12"><h2>'+titular+'</h2></div><div class="col-md-6 col-sm-6 col-xs-6 text-left mini bordeBottom">'+categoria+'</div><div class="col-md-6 col-sm-6 col-xs-6 text-right mini bordeBottom">Martes, 10 de JUNIO del 2015</div><div class="info_de_noticia col-md-12 col-sm-12 col-xs-12">'+ contenido +'</div></div></div>');
            //$('.noticiaPublicada').html('<div class="noticia"><div class="imgNoticia" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="titulo_de_noticia"><h2>'+titular+'</h2></div><hr/><div class="info_de_noticia">'+ contenido +'</div></div>');
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function getEquipoIndice(){
  $.ajax({
      url: direccion+'actions/getEquipo.php',
      type: "POST",
      cache: false,
      dataType: "json",
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            cargo = value.cargo;
           
            $('#list-equipo .swiper-wrapper').append('<div class="swiper-slide">'+cargo+'</div>');
            //$('#list-equipo').append('<li class="noticia" onclick="getNoticiaPublicada('+codigo+')"><a href="#noticia?noticia='+codigo+'" data-transition="flow"><div class="imagen-noticias" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="texto-noticias">'+titular+' '+ extracto.substring(0, 100) +'...'+'</div></a></li>');
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}

function cargoUnidadEquipo(argument){
    $('#cargo-unidad-equipo .swiper-wrapper').empty();
    //$('.equipo-'+argument+' ul').empty();

    //$('.cargo-unidad-equipo').append('<li class="equipo-'+argument+'"><ul></ul></li>');
    var datos ={
    'indice_de_plantilla': argument
    }
    $.ajax({
      url: direccion+'actions/getPlantilla.php',
      type: "POST",
      cache: false,
      dataType: "json",
      data: datos,
      success: function(response){  
        if(response!=null && response!='' && response!='[]'){ 
          $.each(response,function(key,value){ 
            name = value.name;
            lastname = value.lastname;
            number = value.number;
            picture = value.picture;
            type = value.type;
            state = value.state;
            
            $('#cargo-unidad-equipo .swiper-wrapper').append('<div class="swiper-slide jugador"><div class="identificacion_jugador">'+name+' '+lastname+'<span>'+number+'</span></div><img src="http://www.barcelonasc.com.ec/img/equipo/'+type+'/'+picture+'.jpg'+'" /></div>');
          


          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });
}

function cargoCampeonato(){
  var h1=0;
  var h2=0;
  $('.tabla_posicionesEtapa1 tbody').empty();
  $('.tabla_posicionesEtapa2 tbody').empty();
    $.ajax({
      url: direccion+'actions/getEstadisticas.php',
      type: "POST",
      cache: false,
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
               h1++;
              if(equipo == 'BSC'){
                $('.tabla_posicionesEtapa1 tbody').append('<tr class="resaltador"><td>'+h1+'</td><td>'+equipo+'</td><td>'+pj+'</td><td>'+pg+'</td><td>'+pe+'</td><td>'+pp+'</td><td>'+gd+'</td><td>'+pts+'</td></tr>');
              }else{
                $('.tabla_posicionesEtapa1 tbody').append('<tr><td>'+h1+'</td><td>'+equipo+'</td><td>'+pj+'</td><td>'+pg+'</td><td>'+pe+'</td><td>'+pp+'</td><td>'+gd+'</td><td>'+pts+'</td></tr>');
              }
            }

            if(fase == 'Serie A Fase 2'){
               h2++;
              if(equipo == 'BSC'){
                $('.tabla_posicionesEtapa2 tbody').append('<tr class="resaltador"><td>'+h2+'</td><td>'+equipo+'</td><td>'+pj+'</td><td>'+pg+'</td><td>'+pe+'</td><td>'+pp+'</td><td>'+gd+'</td><td>'+pts+'</td></tr>');
              }else{
                $('.tabla_posicionesEtapa2 tbody').append('<tr><td>'+h2+'</td><td>'+equipo+'</td><td>'+pj+'</td><td>'+pg+'</td><td>'+pe+'</td><td>'+pp+'</td><td>'+gd+'</td><td>'+pts+'</td></tr>');
              }
            }
            //$('#list-equipo').append('<li class="noticia" onclick="getNoticiaPublicada('+codigo+')"><a href="#noticia?noticia='+codigo+'" data-transition="flow"><div class="imagen-noticias" style="background-image:url('+rutaimagen+'img/noticias/'+anio+'/'+mes+'/'+anio+'_'+mes+'_'+dia+'_'+num_news+'_'+picture_quantity+'.jpg)"></div><div class="texto-noticias">'+titular+' '+ extracto.substring(0, 100) +'...'+'</div></a></li>');
          });
        }              
      },
      error : function(error){     
          //alert(error);
      }
    });     
}