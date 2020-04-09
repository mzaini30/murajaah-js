if(!localStorage.idUserMurajaah){
	$('.modalLoginDulu').modal()	
}

$('.formLogin').on('submit', x => {
	x.preventDefault()
	$.get(database, data => {
		var dataOlah = new OlahJson(data)
		var cariUsername = dataOlah.query(`user?username=${$('.usernameLogin').val()}&password=${btoa($('.passwordLogin').val())}`).get()
		var adaKah = cariUsername.length
		if (adaKah > 0){
			localStorage.setItem('idUserMurajaah', cariUsername[0].id)
			localStorage.setItem('username', cariUsername[0].username)
			$('.modalLoginDulu').modal('hide')
		} else {
			alert('Akun belum ada. Daftar dulu')
		}
	})
})