var database = atob('aHR0cHM6Ly9qc29uYmxvYi5jb20vYXBpL2U2YjMxYzdmLTc5ZTktMTFlYS05NGVmLTViMzQzZDVhNWJiZQ==')

$('.navbar-brand').click(() => {
	$('html, body').animate({
		scrollTop: 0
	}, 800)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker-v2.js', {
        scope: '.' // <--- THIS BIT IS REQUIRED
    }).then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}