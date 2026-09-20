let nomor = 1;

const dataAwal = [
    {
        nama: "Aulia",
        kelas: "X RPL 1",
        jurusan: "RPL"
    },
    {
        nama: "Siti",
        kelas: "X RPL 1",
        jurusan: "RPL"
    },
    {
        nama: "Rina",
        kelas: "X RPL 1",
        jurusan: "RPL"
    }
];

function tampilkanData(nama, kelas, jurusan) {
    const tabel = document.getElementById("tabelSiswa");

    const baris = document.createElement("tr");

    baris.innerHTML = `
        <td>${nomor}</td>
        <td>${nama}</td>
        <td>${kelas}</td>
        <td>${jurusan}</td>
        <td>
            <button onclick="hapusData(this)">Hapus</button>
        </td>
    `;

    tabel.appendChild(baris);
    nomor++;
}

dataAwal.forEach(function(siswa) {
    tampilkanData(siswa.nama, siswa.kelas, siswa.jurusan);
});

document.getElementById("formSiswa").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value.trim();
    const jurusan = document.getElementById("jurusan").value.trim();

    if (nama === "" || kelas === "" || jurusan === "") {
        alert("Data belum lengkap!");
        return;
    }

    tampilkanData(nama, kelas, jurusan);

    document.getElementById("formSiswa").reset();
});

function hapusData(button) {
    button.parentElement.parentElement.remove();
}