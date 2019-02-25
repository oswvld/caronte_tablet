var pnt_sublime_perfezione
var pnt_eterno_riscatto
var pnt_equilibrio_celeste

var current_view
var array_views = [
	'start',
	'domanda-1',
	'domanda-2',
	'domanda-3',
	'domanda-4',
	'domanda-5',
	'domanda-6',
	'domanda-7',
	'final'
];

		// parameters MQTT
		var host = 'm24.cloudmqtt.com';
		var user = 'txyosdvw';
		var psw = 'fM6R-UZSkeN3';
		var port = 38333;
		var canale = 'caronte_tablet';
		var clientId = 'tablet';

		// costanti
		var client = null;

		// testi
		const MESSAGGIO_CONNESSIONE_AVVENUTA = 'Connessione avvenuta con successo';
		const MESSAGGIO_CONNESSIONE_FALLITA = 'Connessione fallita';


		function start(){

			client = new Paho.Client(host, port, "/ws", clientId);
    		client.onConnectionLost = onConnectionLost;
    		client.onMessageArrived = arrivoMessaggio;
    		var options = {
    			userName: user,
    			password: psw,
    			onSuccess: onConnect,
    			onFailure: doFail,
    			useSSL: true,
    			reconnect: true
    		}
    		client.connect(options);
    	}

    	function onConnectionLost(responseObject) {
    		console.log(responseObject)
    		if (responseObject.errorCode !== 0) {
    			console.log("onConnectionLost:"+responseObject.errorMessage);
    		}
    	}

    	function onConnect() {
    		client.subscribe(canale);
    		console.log(MESSAGGIO_CONNESSIONE_AVVENUTA);
    		sendMessage( clientId, 'tablet-test' )
    	}

    	function doFail( error ) {
    		console.log(MESSAGGIO_CONNESSIONE_FALLITA);
    		console.log(error);
    	}

    	function sendMessage( clientId, message ) {

    		console.log(message)

    		if( !client.isConnected() )
				return;

			var messaggio = new Paho.Message(message);
			messaggio.destinationName = canale;
			client.send(messaggio);
		}

		function arrivoMessaggio( receivedMessage ) {

			switch( receivedMessage.payloadString ){
				case 'fine-video':
				fineVideo()
				break;

				default:
					console.log(receivedMessage.payloadString)
				break;
			}
		}




		function fineVideo(){
			window.location.href = './fine_video.html';
		}

	function showCurrentView(){

		for( var i = 0; i < array_views.length; i++ ){
			if( array_views[i] == array_views[current_view] ){
				$('.'+array_views[i]).removeClass('hidden-view')
				console.log(array_views[i])
			}
			else{
				$('.'+array_views[i]).addClass('hidden-view')
			}

		}

	}

	function reset(){
		$('.container-risultato').removeClass('ending-shown')

		current_view = 0
		pnt_sublime_perfezione = 0
		pnt_eterno_riscatto = 0
		pnt_equilibrio_celeste = 0
		showCurrentView()
	}

$(document).ready(function(){

	start()

	pnt_sublime_perfezione = 0
	pnt_eterno_riscatto = 0
	pnt_equilibrio_celeste = 0

	console.log(sessionStorage.getItem("current_view"))

	switch( sessionStorage.getItem("current_view") ){
		case 'sublime-perfezione':
			current_view = 8
			pnt_sublime_perfezione = 9
		break;

		case 'eterno-riscatto':
			current_view = 8
			pnt_eterno_riscatto = 9
		break;

		case 'equilibrio-celeste':
			current_view = 8
			pnt_equilibrio_celeste = 9
		break;

		default:
			current_view = 0
		break;
	}

	showCurrentView()


	$('.ui-btn').on('click', function(){

		current_view++
		showCurrentView()

		if( $(this).parent('.view').hasClass('start') ){

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-1') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-2') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-3') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_sublime_perfezione++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-4') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-5') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-6') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
				pnt_sublime_perfezione++
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_eterno_riscatto++
			}

			if( $(this).hasClass('btn-3') ){
				console.log('btn 3')
				pnt_equilibrio_celeste++
			}

		}

		if( $(this).parent().parent('.container-domanda').hasClass('domanda-7') ){

			if( $(this).hasClass('btn-1') ){
				console.log('btn 1')
			}

			if( $(this).hasClass('btn-2') ){
				console.log('btn 2')
				pnt_equilibrio_celeste++
			}

			console.log('pnt_sublime_perfezione: '+pnt_sublime_perfezione)
			console.log('pnt_eterno_riscatto: '+pnt_eterno_riscatto)
			console.log('pnt_equilibrio_celeste: '+pnt_equilibrio_celeste)

			if( ( pnt_sublime_perfezione > pnt_eterno_riscatto ) && ( pnt_sublime_perfezione > pnt_equilibrio_celeste ) ){
				console.log('SUBLIME PERFEZIONE')
				$('#ending-1').addClass('ending-shown')
				setTimeout(function(){
					sendMessage( clientId, 'video-sublime' )
				}, 1000)
			}

			if( ( pnt_eterno_riscatto > pnt_sublime_perfezione ) && ( pnt_eterno_riscatto > pnt_equilibrio_celeste ) ){
				console.log('ETERNO RISCATTO')
				$('#ending-2').addClass('ending-shown')
				setTimeout(function(){
					sendMessage( clientId, 'video-eterno' )
				}, 1000)
			}

			if( ( pnt_equilibrio_celeste > pnt_sublime_perfezione ) && ( pnt_equilibrio_celeste > pnt_eterno_riscatto ) ){
				console.log('EQUILIBRIO CELESTE')
				$('#ending-3').addClass('ending-shown')
				setTimeout(function(){
					sendMessage( clientId, 'video-equilibrio' )
				}, 1000)
			}

		}

	})

	$('#btn-final').on('click', function(){

		reset()

	})

});