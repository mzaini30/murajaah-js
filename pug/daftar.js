$('.formBuatBaru').on('submit', x => {
	x.preventDefault()
	$('.loading').removeClass('sembunyi')
	$.get(database, data => {
		$('.loading').addClass('sembunyi')
		var ambilData = new OlahJson(data)
		var usernameYangSudahAda = ambilData.query(`user?username=${$('.daftarUsername').val()}`).get()
		var adaKah = usernameYangSudahAda.length
		if (adaKah > 0){
			alert('Username sudah ada. Coba yang lain')
		} else {
			var inputData = new OlahJson(data)
			var dataBaru = inputData.query('user').post({
				"username": $('.daftarUsername').val(),
				"password": btoa($('.daftarPassword').val())
			}).get()
			$('.loading').removeClass('sembunyi')
			$.ajax({
				url: database,
				type: 'put',
				data: JSON.stringify(dataBaru),
				headers: {
					'Content-Type': 'application/json'
				},
				success: () => {
					$('.loading').addClass('sembunyi')
					location.href = 'index.html'
				}
			})
		}
	})
})