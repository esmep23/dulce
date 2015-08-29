<!DOCTYPE html>
<html>
<head>
	<title>App Barcelona</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	
	<link rel="stylesheet" href="css/jquery.mobile.min.css">
	<link rel="stylesheet" type="text/css" href="css/slick.css"/>
	<link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<!--<link rel="stylesheet" href="https://www.barcelonasc.com.ec/apps/bsc_news/css/swiper.css">-->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/fuente.css">
	
	

	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slick.min.js"></script>

	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body> 

<!--
  |================================================================================|
  | PRINCIPAL															 
  |================================================================================|
	-->
<div data-role="page" id="principal">

		
	<div data-role="panel" id="mypanel">
			<div id="reglaSlogan" class="text-center"><a href="#" data-transition="sdivde"><img class="bscLogo" src="https://www.barcelonasc.com.ec/apps/bsc_news/img/un_solo_idolo.png"></a></div>
	    	<!--MENU-->
			<ul class="row">	    		
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#principal" data-transition="slide"><i class="fa fa-list fa-2x"></i><span>Noticias</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#proximopartido" data-transition="slide"><i class="fa fa-calendar-o fa-2x"></i><span>Calendario</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#plantillas" data-transition="slide"><i class="fa fa-user fa-2x"></i><span>Plantilla</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#estadisticas" data-transition="slide"><i class="fa fa-bar-chart fa-2x"></i><span>Posiciones</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#descargas" data-transition="slide"><i class="fa fa-download fa-2x"></i><span id="mR" >Descargas</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#" data-transition="slide"><i class="fa fa-facebook-official fa-2x"></i><span>Facebook</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#" data-transition="slide"><i class="fa fa-twitter-square fa-2x"></i><span>Twitter</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#" data-transition="slide"><i class="fa fa-instagram fa-2x"></i><span>Instagram</span></a></li>
			</ul>
	    	<!--<a href="#my-header" data-rel="close">Close panel</a>-->
			<div id="reglaSlogan2" class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#"><img class="bscLogo" src="https://www.barcelonasc.com.ec/apps/bsc_news/img/appOficial.png" /></a></div>	    
	</div><!-- /panel -->

	<div data-role="header" data-tap-toggle="false" data-position="fixed" class="header-bsc">
		<a href="#mypanel" data-transition="slide" data-direction="reverse" data-rel="abrir" ><i class="fa fa-bars fa-2x"></i></a>
		<h1 class="extraLargo">ULTIMAS <strong>NOTICIAS</strong></h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infVideos"><span>ÚLTIMOS <strong>VIDEOS</strong></span></div>
		<div class="sliderVideo">
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
		</div>
		
		<div class="infNoticias" style="margin-top: 50px;"><span>ÚLTIMAS <strong>NOTICIAS</strong></span></div>
		

		<div class="noti">


			<div class="noticias row"></div>
		</div>
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->




<!--
  |================================================================================|
  | PROXIMO PARTIDO
  |================================================================================|
	-->
<div data-role="page" id="proximopartido">

	<div data-role="header" data-position="fixed" data-tap-toggle="false" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>PRÓXIMO <strong>PARTIDO</strong></h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="ads-proximo1"></div>
		<div class="cancha-vs">
			
		</div>
		<div class="col-md-6 col-xs-6 text-center">
			<a href="#distribucion" data-transition="slide" data-rel="abrir">
				<div class="distribucionCancha"></div>
			</a>
		</div>
		<div class="col-md-6 col-xs-6 text-center">
			<a href="#minuto" data-transition="slide" data-rel="abrir">
				<div class="minutoAMinuto"></div>
			</a> 
		</div>
		
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<div class="ads-proximo2"></div>
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->

<!--
  |================================================================================|
  | DISTRIBUCION
  |================================================================================|
	-->
<div data-role="page" id="distribucion">

	<div data-role="header" data-position="fixed" data-tap-toggle="false" class="header-bsc">
		<a href="#proximopartido" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>ALINEACION</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infVideos"><span>CAMPEONATO ECUATORIANO DE FÚTBOL</span></div>
		<div class="canchaCampeonato">
			<div id="position1" class="row"></div>
			<div id="position2" class="row"></div>
			<div id="position3" class="row"></div>
			<div id="position4" class="row"></div>
		
		<div class="suplentes"><strong> SUPLENTES </strong><MARQUEE> </MARQUEE></div>
		</div>
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<div class="ads-distribucion1"></div>
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->

<!--
  |================================================================================|
  | MINUTO A MINUTO
  |================================================================================|
	-->
<div data-role="page" id="minuto">

	<div data-role="header" data-position="fixed" data-tap-toggle="false" class="header-bsc">
		<a href="#proximopartido" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>MINUTO A MINUTO</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infVideos"><span>CAMPEONATO ECUATORIANO DE FÚTBOL</span></div>
		<div class="minutoTwitter"></div>

	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<div class="ads-minuto1"></div>
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->


<!--
  |================================================================================|
  | CARGO NOTICIA
  |================================================================================|
	-->
<div data-role="page" id="noticia">

	<div data-role="header" data-position="fixed" class="header-bsc" data-tap-toggle="false">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-back="true"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1><strong>NOTICIAS</strong></h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infNoticias2"><span>ÚLTIMAS <strong>NOTICIAS</strong></span></div>
		<div class="noticiaPublicada"></div>
		
		
	</div><!-- /content -->
	
	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<div class="ads-noticia1"></div>
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->


<!--
  |================================================================================|
  | PLANTILLAS
  |================================================================================|
	-->
<div data-role="page" id="plantillas">

	<div data-role="header" data-position="fixed" data-tap-toggle="false" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-back="true"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>PLANTILLA</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infVideos"><span>PRIMER <strong>EQUIPO</strong></span></div>
		<div class="infNoticias"><span>NÚMERO  |<strong>JUGADOR</strong></span></div>
		
	    <div id="cargo-unidad-equipo"></div>
		
	</div><!-- /content -->
	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<div class="ads_plantilla1"></div>
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->



<!--
  |================================================================================|
  | ESTADISTICAS
  |================================================================================|
	-->
<div data-role="page" id="estadisticas">

	<div data-role="header" data-position="fixed" data-tap-toggle="false" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>ESTADÍSTICAS</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		
		<!--<div class=" estadistica col-md-12 col-xs-12 col-sm-12 text-center"><h4>TABLA DE POSICIONES <span>2015</span></h4></div>
		</div>-->
			<div class="infVideos"><span><strong>TABLA DE POSICIONES</strong> 2015 </span></div>
		
		<div id="tabs" >
			  <ul class="row">
			    <li class="col-md-4 col-xs-4 col-sm-4 text-center"><a href="#tabs-1">ETAPA 1</a></li>
			    <li class="col-md-4 col-xs-4 col-sm-4 text-center ui-tabs-active"><a href="#tabs-2">ETAPA 2</a></li>
			    <li class="col-md-4 col-xs-4 col-sm-4 text-center"><a href="#acumulada">ACUMULADA</a></li>
			  </ul>
			  <div id="tabs-1">
			  		<ul class="tabla_posicionesEtapa1">
			  			<li class="col-md-5 col-xs-5 col-sm-5 text-center"><span>EQUIPO</span></li>
			  			<li class="col-md-2 col-xs-2 col-sm-2 text-center"><span>PJ</span></li>
			  			<li class="col-md-2 col-xs-2 col-sm-2 text-center"><span>GD</span></li>
			  			<li class="col-md-3 col-xs-3 col-sm-3 text-center"><span>PTS</span></li>
			  		</ul>
			  		<ul class="posicionesEtapa1"></ul>
			  </div>
			  <div id="tabs-2">
			  	
			    <ul class="tabla_posicionesEtapa2">
			  			<li class="col-md-5 col-xs-5 col-sm-5 text-center"><span>EQUIPO</span></li>
			  			<li class="col-md-2 col-xs-2 col-sm-2 text-center"><span>PJ</span></li>
			  			<li class="col-md-2 col-xs-2 col-sm-2 text-center"><span>GD</span></li>
			  			<li class="col-md-3 col-xs-3 col-sm-3 text-center"><span>PTS</span></li>
			  		</ul>
			  		<ul class="posicionesEtapa2"></ul>
			  </div>
			  <div id="acumulada">
			    <ul class="tabla_posicionesAcumulada">
			  			<li class="col-md-5 col-xs-5 col-sm-5 text-center"><span>EQUIPO</span></li>
			  			<li class="col-md-2 col-xs-2 col-sm-2 text-center"><span>PJ</span></li>
			  			<li class="col-md-2 col-xs-2 col-sm-2 text-center"><span>GD</span></li>
			  			<li class="col-md-3 col-xs-3 col-sm-3 text-center"><span>PTS</span></li>
			  		</ul>
			  		<ul class="posicionesAcumulada"></ul>
			  </div>
			  
		</div>

	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<div class="jugador_del_partido"></div>
		<div class="ads_estadisticas1"></div>
		<!--<div class="logoMini"></div>-->
	</div><!-- /footer -->
</div><!-- /page -->



<!--
  |================================================================================|
  | DESCARGA DESCARGAS
  |================================================================================|
	-->
<div data-role="page" id="descargas">

	<div data-role="header" data-position="fixed" data-tap-toggle="false" class="header-bsc">
		<a href="#principal" id="regreso" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>DESCARGAS</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div id="tabs2">
			<ul class="row">
				<li class="col-md-6 col-xs-6 col-sm-6 text-center ui-tabs-active"><a href="#tabs-1A"><i class="fa fa-chevron-circle-left fa-lg"></i>  WALLPAPERS</a></li>
			    <li class="col-md-6 col-xs-6 col-sm-6 text-center"><a href="#tabs-2A">RINGTONES  <i class="fa fa-chevron-circle-right fa-lg"></i></a></li>
			</ul>
			<div id="tabs-1A">
				<!--<div class="ads-wallpapers1"></div>-->
				<div class="slider-for">
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen1.png&size=400x330" width="100%" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen2.png&size=400x330" width="100%" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen3.png&size=400x330" width="100%" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen4.png&size=400x330" width="100%" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen5.png&size=400x330" width="100%" /></div>
				</div>
				<div class="slider-nav">
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen1.png&size=100x100" alt="" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen2.png&size=100x100" alt="" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen3.png&size=100x100" alt="" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen4.png&size=100x100" alt="" /></div>
					<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumb3.php?src=./wallpapers/screen5.png&size=100x100" alt="" /></div>
				</div>
			</div>
			<div id="tabs-2A">
				<!--<div class="ads-wallpapers1"></div>-->
				<div class="play_sounds row">
			    	<div class="boton col-md-4 col-sm-4 col-xs-4 text-right">
			    		<div class="retrocedo_button"><i class="fa fa-backward fa-2x"></i></div>
			    	</div>
			    	<div class="boton2 col-md-4 col-sm-4 col-xs-4 text-center">
			    		<div class="play_button"><i class="fa fa-play fa-3x"></i></div>
			    		<div class="pause_button"><i class="fa fa-pause fa-3x"></i></div>
			    	</div>
			    	<div class="boton col-md-4 col-sm-4 col-xs-4 text-left">
			    		<div class="avanzo_button"><i class="fa fa-forward fa-2x"></i></div>
			    	</div>
				</div>

			    <div class="titulo_Audio col-md-12 col-xs-12 col-sm-12 text-center"><span>Himno de barcelona</span></div>
				<div class="mas_audios col-md-12 col-xs-12 col-sm-12">
					<ul>
						<li class="col-md-4 col-xs-6 col-sm-6 col-md-offset-2"><i class="fa fa-play" onclick="reproducir(0)"></i><span>Amarillo es mi color</span></li>
						<li class="col-md-8 col-xs-6 col-sm-6"><i class="fa fa-play" onclick="reproducir(1)"></i><span>Barcelona soy yo</span></li>
						<li class="col-md-4 col-xs-6 col-sm-6 col-md-offset-2"><i class="fa fa-play" onclick="reproducir(2)"></i><span>Dale Dale Barcelona</span></li>
						<li class="col-md-8 col-xs-6 col-sm-6"><i class="fa fa-play" onclick="reproducir(3)"></i><span>Himno de barcelona</span></li>
						<li class="col-md-4 col-xs-6 col-sm-6 col-md-offset-2"><i class="fa fa-play" onclick="reproducir(4)"></i><span>Sangre de Campeon</span></li>
						<li class="col-md-8 col-xs-6 col-sm-6"><i class="fa fa-play" onclick="reproducir(5)"></i><span>Un Solo Idolo</span></li>
					</ul>
				</div>
			</div>
		</div> 
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" data-tap-toggle="false" class="footer-bsc">
		<!--<div class="logoMini"></div>-->
		<div class="ads-wallpapers2"></div>
	</div><!-- /footer -->
</div><!-- /page -->





</body>
</html>
	<script src="js/index.js"></script>