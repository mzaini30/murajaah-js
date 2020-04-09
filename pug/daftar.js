$('.formBuatBaru').on('submit', x => {
	x.preventDefault()
	$.get(database, data => {
		var ambilData = new OlahJson(data)
		var usernameYangSudahAda = ambilData.query(`user?username=${$('.daftarUsername').val()}`).get()
		var adaKah = usernameYangSudahAda.length
		if (adaKah > 0){
			alert('Username sudah ada. Coba yang lain')
		} else {
			var inputData = new OlahJson(data)
			var dataBaru = inputData.query('user').post({
				"username": $('.daftarUsername').val(),
				"password": atob($('.daftarPassword').val())
			}).get()
			$.ajax({
				url: database,
				type: 'put',
				data: dataBaru,
				headers: {
					'Content-Type': 'application/json'
				},
				success: () => location.href = 'index.html'
			})
		}
	})
})