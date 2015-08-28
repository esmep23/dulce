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
	<link rel="stylesheet" type="text/css" href="css/style.css">
	

	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.mobile.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slick.min.js"></script>
	
	<script src="js/plugins/Wallpaper.js"></script>
</head>
<body> 

<!--
  |================================================================================|
  | PRINCIPAL															 
  |================================================================================|
	-->
<div data-role="page" id="principal">

		
	<div data-role="panel" id="mypanel">
	    	<!--MENU-->
	    	<ul class="row">
	    		<li id="reglaSlogan" class="text-center"><a href="#" data-transition="slide"><img class="bscLogo" src="https://www.barcelonasc.com.ec/apps/bsc_news/img/un_solo_idolo.png"></a></li>
				<!--<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#" data-transition="slide"><i class="fa fa-newspaper-o fa-2x"></i><span>Noticias</span></a></li>-->
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#proximopartido" data-transition="slide"><i class="fa fa-calendar fa-2x"></i><span>Calendario</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#plantillas" data-transition="slide"><i class="fa fa-futbol"></i><span>Plantilla</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#estadisticas" data-transition="slide"><i class="fa fa-posicion"></i><span>Posiciones</span></a></li>
				<li class="col-md-12 col-sm-12 col-xs-12 text-center"><a href="#" data-transition="slide"><i class="fa fa-descargas"></i><span>Descargas</span></a></li>
			</ul>
	    <!--<a href="#my-header" data-rel="close">Close panel</a>-->
	</div><!-- /panel -->

	<div data-role="header" data-position="fixed" class="header-bsc">
		<a href="#mypanel" data-transition="slide" data-direction="reverse" data-rel="abrir" ><i class="fa fa-bars fa-2x"></i></a>
		<h1>ULTIMAS <strong>NOTICIAS</strong></h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infVideos"><span>ÚLTIMOS <strong>VIDEOS</strong></span></div>
		<div class="sliderVideo" style="height:200px">
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
			<div><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/fotovideo_1.png" /></div>
		</div>
		
		<div class="infNoticias"><span>ÚLTIMAS <strong>NOTICIAS</strong></span></div>
		

		<div class="noti">


			<div class="noticias row"></div>
		</div>
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" class="footer-bsc">
		<div class="logoMini"></div>
	</div><!-- /footer -->
</div><!-- /page -->




<!--
  |================================================================================|
  | PROXIMO PARTIDO
  |================================================================================|
	-->
<div data-role="page" id="proximopartido">

	<div data-role="header" data-position="fixed" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>PRÓXIMO <strong>PARTIDO</strong></h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="ads-proximo1"></div>
		<div class="cancha-vs">
			<div>
				<div class="row">
					<div id="inPart" class="col-xs-12 col-md-12 text-center"><h4>Campeonato Ecuatoriano de Fútbol</h4><p>Domingo, 20 de abril 2015  |  Hora 16h45</p></div>

					<div class="name_Equipo1 aumento-left name_Equipo col-xs-6 col-md-6 text-center">BARCELONA S.C</div>
					<div class="name_Equipo2 aumento-right name_Equipo col-xs-6 col-md-6 text-center">C.S. EMELEC</div>
					<div class="col-xs-5 col-md-5 col-sm-5 text-right" >
						<div class="equipo1"><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/barcelona_logo.png"/></div>
					</div>
					<div class="col-xs-2 col-md-2 col-sm-2 text-center centroV">
						<span>VS.</span>
					</div>
					<div class="col-xs-5 col-md-5 col-sm-5 text-left" >
						<div class="equipo2"><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/emelec_logo.png"/></div>
					</div>
					
				</div>
				<div class="cancha"></div>
				<div class="row">
					<div class="espacio col-md-12 col-xs-12 text-center"><h5><strong>Estadio</strong> Monumental Banco Pichincha</h5></div>
				</div>
				<div class="row espacioextraBotones">
					<div class="col-md-6 col-xs-6 text-center distribucionCancha"></div>
					<div class="col-md-6 col-xs-6 text-center minutoAMinuto"></div>
				</div>
				<div class="ico-right"><i class="fa fa-chevron-circle-right fa-3x"></i></div>
				<div class="ico-left"><i class="fa fa-chevron-circle-left fa-3x"></i> </div>
			</div>
		</div>
		
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" class="footer-bsc">
		<div class="ads-proximo2"></div>
		<div class="logoMini"></div>
	</div><!-- /footer -->
</div><!-- /page -->


<!--
  |================================================================================|
  | CARGO NOTICIA
  |================================================================================|
	-->
<div data-role="page" id="noticia">

	<div data-role="header" data-position="fixed" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-back="true"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>NOTICIAS<strong>VIDEOS</strong></h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infNoticias2"><span>ÚLTIMAS <strong>NOTICIAS</strong></span></div>
		<div class="noticiaPublicada"></div>
		
		
	</div><!-- /content -->
	
	<div data-role="footer" data-position="fixed" class="footer-bsc">
		<div class="ads-noticia1"></div>
		<div class="logoMini"></div>
	</div><!-- /footer -->
</div><!-- /page -->


<!--
  |================================================================================|
  | PLANTILLAS
  |================================================================================|
	-->
<div data-role="page" id="plantillas">

	<div data-role="header" data-position="fixed" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-back="true"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>PLANTILLA</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="infVideos"><span>PRIMER <strong>EQUIPO</strong></span></div>
		<div class="infNoticias"><span>NÚMERO  |<strong>JUGADOR</strong></span></div>
		
	    <div id="cargo-unidad-equipo"></div>
		
	</div><!-- /content -->
	<div data-role="footer" data-position="fixed" class="footer-bsc">
		<div class="ads_plantilla1"></div>
		<div class="logoMini"></div>
	</div><!-- /footer -->
</div><!-- /page -->



<!--
  |================================================================================|
  | ESTADISTICAS
  |================================================================================|
	-->
<div data-role="page" id="estadisticas">

	<div data-role="header" data-position="fixed" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>ESTADÍSTICAS</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		<div class="row">
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

	<div data-role="footer" data-position="fixed" class="footer-bsc">
		<div class="jugador_del_partido"></div>
		<div class="ads_estadisticas1"></div>
		<div class="logoMini"></div>
	</div><!-- /footer -->
</div><!-- /page -->



<!--
  |================================================================================|
  | DESCARGA CONTENIDO
  |================================================================================|
	-->
<div data-role="page" id="descargas">

	<div data-role="header" data-position="fixed" class="header-bsc">
		<a href="#principal" data-transition="slide" data-direction="reverse" data-rel="abrir"> <i class="fa fa-chevron-left fa-2x"></i> </a>
		<h1>DESCARGAS</h1>
		<div class="icoBSC_black"></div>
	</div><!-- /header -->

	<div data-role="content">
		

	    	<div id="tabs2">
			  <ul class="row">
			    <li class="col-md-6 col-xs-6 col-sm-6 text-center"><a href="#tabs-1">Wallpapers</a></li>
			    <li class="col-md-6 col-xs-6 col-sm-6 text-center"><a href="#tabs-2">Ringtones</a></li>
			  </ul>
			  <div id="tabs-1">
			    <div class="ads-wallpapers1"></div>

			    	<div class="wallpaper_para_descargar"><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumbImage1.jpg"></div>

			    	<!--swiper wallpaper-->
					 <div class="swiper-container swiper3">
				        <div class="swiper-wrapper">
				        	<div class="swiper-slide"><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumbImage1.jpg" /></div>
				        	<div class="swiper-slide"><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumbImage2.jpg" /></div>
				        	<div class="swiper-slide"><img src="https://www.barcelonasc.com.ec/apps/bsc_news/img/thumbImage3.jpg" /></div>
						</div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination swiper-pagination3"></div>
				        <!-- Add Arrows -->
				        <div class="swiper-button-next"></div>
				        <div class="swiper-button-prev"></div>	
				    </div>
			    	<!--swiper wallpaper-->
			    
			    <div class="ads-wallpapers2"></div>

			  </div>
			  <div id="tabs-2">
			    
			    <div class="ads-wallpapers1"></div>

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
						<li class="col-md-6 col-xs-6 col-sm-6"><i class="fa fa-play" onclick="reproducir(1)"></i><span>Barcelona soy yo</span></li>
						<li class="col-md-4 col-xs-6 col-sm-6 col-md-offset-2"><i class="fa fa-play" onclick="reproducir(2)"></i><span>Dale Dale Barcelona</span></li>
						<li class="col-md-6 col-xs-6 col-sm-6"><i class="fa fa-play" onclick="reproducir(3)"></i><span>Himno de barcelona</span></li>
						<li class="col-md-4 col-xs-6 col-sm-6 col-md-offset-2"><i class="fa fa-play" onclick="reproducir(4)"></i><span>Sangre de Campeon</span></li>
						<li class="col-md-6 col-xs-6 col-sm-6"><i class="fa fa-play" onclick="reproducir(5)"></i><span>Un Solo Idolo</span></li>
					</ul>
				</div>
				<div class="ads-wallpapers2"></div>
			  
			  </div>
			  
			</div>
			
	    
	</div><!-- /content -->

	<div data-role="footer" data-position="fixed" class="footer-bsc">
		<div class="logoMini"></div>
	</div><!-- /footer -->
</div><!-- /page -->
	

	<!---<script src="https://www.barcelonasc.com.ec/apps/bsc_news/js/swiper.js"></script>-->
	<script src="js/index.js"></script>

	</body>
</html>