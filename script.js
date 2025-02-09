// Fungsi untuk menampilkan konten berdasarkan menu yang diklik
function showContent(type) {
    let contentDiv = document.getElementById("content");

    let contentData = {
        sekilas: `<h2>Kelurahan Battang</h2>
                  <p>Kelurahan Battang terletak di Kecamatan Wara Barat Kota Palopo dengan batas wilayah sebagai berikut:</p>
                  <ul>
                      <li><strong>Utara:</strong> Kecamatan X</li>
                      <li><strong>Selatan:</strong> Kecamatan Y</li>
                      <li><strong>Timur:</strong> Kecamatan Z</li>
                      <li><strong>Barat:</strong> Kecamatan A</li>
                  </ul>`,
        visiMisi: `<h2>Visi & Misi</h2><p>Visi: Menjadi kelurahan terbaik dalam pelayanan masyarakat.</p>`,
        profilLurah: `<h2>Profil Lurah</h2><p>Data tentang Lurah.</p>`,
        profilPejabat: `<h2>Profil Pejabat</h2><p>Data tentang Pejabat.</p>`,
        struktur: `<h2>Struktur Organisasi</h2><p>Bagan struktur pemerintahan kelurahan.</p>`
    };

    contentDiv.innerHTML = contentData[type] || "<h2>Data Tidak Ditemukan</h2>";
    contentDiv.style.display = "block";
    document.getElementById("webgis").style.display = 'none';
}

// Menampilkan iframe WebGIS ketika menu "Maps" diklik
document.getElementById('showMap').addEventListener('click', function(event) {
    event.preventDefault();
    var iframe = document.getElementById("webgis");
    iframe.style.display = (iframe.style.display === 'none' || iframe.style.display === '') ? 'block' : 'none';
    document.getElementById("content").style.display = 'none'; // Menyembunyikan konten lain
});
