var database = atob('aHR0cHM6Ly9qc29uYmxvYi5jb20vYXBpL2U2YjMxYzdmLTc5ZTktMTFlYS05NGVmLTViMzQzZDVhNWJiZQ==')

$('.navbar-brand').click(() => {
	$('html, body').animate({
		scrollTop: 0
	}, 800)
})

if ('serviceWorker' in navigator) {
	console.log("Will the service worker register?");
	navigator.serviceWorker.register('service-worker.js', {
        scope: '.' // <--- THIS BIT IS REQUIRED
    }).then(function(reg){
		console.log("Yes, it did.");
	}).catch(function(err) {
		console.log("No it didn't. This happened: ", err)
	});
}