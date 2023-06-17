function kirimData() {
    var name = document.getElementById("nama").value
    var ID = document.getElementById("ID").value
    var JenisTiket = document.querySelector("input[name=JenisTiket]:checked").value
    var Alamat = document.getElementById("alamat").value
    var BanyakTiket = document.getElementById("BanyakTiket").value
    var TanggalLahir = document.getElementById("TanggalLahir").value

    alert(
    "Nama : " + name +
    "\nID : " + ID +
    "\nJenisTiket : " + JenisTiket +
    "\nAlamat : " + Alamat +
    "\nBanyakTiket : " + BanyakTiket +
    "\nTanggalLahir : " + TanggalLahir 
    )
}