var waktu = new Date()
var tanggal = waktu.getDate()
var bulan = waktu.getMonth() + 1
var tahun = waktu.getFullYear()
var sekarang = `${tanggal}/${bulan}/${tahun}`

var dataHafalan = () => {
	$('.form-control').val('')
	$('.modal').modal('hide')
	$.get(database, data => {
		var datanya = new OlahJson(data)
		var ambilDataHafalan = datanya.query(`murajaah?user_id=${localStorage.idUserMurajaah}`).get().reverse()
		var buatTabel = ''
		for (var x of ambilDataHafalan){
			buatTabel += `
				<tr class='tampilData' data-id='${x.id}'>
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

$('.tambahHafalan').click(() => {
	$('.tambahTanggal').val(sekarang)
	$('.modalTambah').modal()
})
$('.formTambah').on('submit', x => {
	x.preventDefault()
	$.get(database, data => {
		var dataOlah = new OlahJson(data)
		var ambilTable = dataOlah.query('murajaah').post({
			"tanggal": sekarang,
		    "surat": $('.tambahSurat').val(),
		    "dari": $('.tambahDari').val(),
		    "ke": $('.tambahKe').val(),
		    "user_id": Number(localStorage.idUserMurajaah)
		}).get()
		$('.loading').removeClass('sembunyi')
		$.ajax({
			url: database,
			type: 'put',
			data: JSON.stringify(ambilTable),
			headers: {
				'Content-Type': 'application/json'
			},
			success: () => {
				$('.loading').addClass('sembunyi')
				dataHafalan()
			}
		})
	})
})

$(document).on('click', '.tampilData', function(){
	localStorage.setItem('idMurajaah', $(this).data('id'))
	$.get(database, data => {
		var datanya = new OlahJson(data)
		var ambil = datanya.query(`murajaah/${localStorage.idMurajaah}`).get()
		$('.tampilTanggal').val(ambil[0].tanggal)
		$('.tampilSurat').val(ambil[0].surat)
		$('.tampilDari').val(ambil[0].dari)
		$('.tampilKe').val(ambil[0].ke)
		$('.modalTampil').modal()
	})
})

$('.formTampil').on('submit', x => {
	x.preventDefault()
	$.get(database, data => {
		var datanya = new OlahJson(data)
		var ambil = datanya.query(`murajaah/${localStorage.idMurajaah}`).put({
			"tanggal": $('.tampilTanggal').val(),
		    "surat": $('.tampilSurat').val(),
		    "dari": $('.tampilDari').val(),
		    "ke": $('.tampilKe').val(),
		    "user_id": Number(localStorage.idUserMurajaah)
		}).get()
		$('.loading').removeClass('sembunyi')
		$.ajax({
			url: database,
			type: 'put',
			data: JSON.stringify(ambil),
			headers: {
				'Content-Type': 'application/json'
			},
			success: () => {
				$('.loading').addClass('sembunyi')
				dataHafalan()
			}
		})
	})
})

$('.hapusTampil').click(() => {
	var tanyaDulu = confirm('Hapus kah?')
	if (tanyaDulu){
		$.get(database, data => {
			var datanya = new OlahJson(data)
			var ambil = datanya.query(`murajaah/${localStorage.idMurajaah}`).delete().get()
			$('.loading').removeClass('sembunyi')
			$.ajax({
				url: database,
				type: 'put',
				data: JSON.stringify(ambil),
				headers: {
					'Content-Type': 'application/json'
				},
				success: () => {
					$('.loading').addClass('sembunyi')
					dataHafalan()
				}
			})
		})
	}
})