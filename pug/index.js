var dataHafalan = () => {
	$.get(database, data => {
		var datanya = new OlahJson(data)
		var ambilDataHafalan = datanya.query(`murajaah?id_user=${localStorage.idUserMurajaah}`).get().reverse()
		var buatTabel = ''
		for (var x of ambilDataHafalan){
			buatTabel += `
				<tr>
					<td>${x.tanggal}</td>
					<td>${x.surat}</td>
					<td>${x.dari}</td>
					<td>${x.ke}</td>
				</tr>
			`
		}
		$('.datanya').html(buatTabel)
		$('.usernamenya').text(localStorage.username)
	})
}
dataHafalan()

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
			dataHafalan()
		} else {
			alert('Akun belum ada. Daftar dulu')
		}
	})
})

$('.logout').click(() => {
	localStorage.removeItem('idUserMurajaah')
	localStorage.removeItem('username')
	location.reload()
})

$('.tambahHafalan').click(() => $('.modalTambah').modal())