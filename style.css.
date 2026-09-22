// ======================================
// DATA ORDER
// ======================================

let pesanan = [];


// ======================================
// TAMBAH ORDER
// ======================================

function tambahOrder(nama, harga) {

  const produkAda = pesanan.find(
    item => item.nama === nama
  );

  if (produkAda) {

    produkAda.jumlah += 1;

  } else {

    pesanan.push({
      nama: nama,
      harga: harga,
      jumlah: 1
    });

  }

  tampilkanOrder();

  alert(
    "🍉 " + nama +
    " berhasil ditambahkan!"
  );
}


// ======================================
// TAMPILKAN ORDER
// ======================================

function tampilkanOrder() {

  const orderList =
    document.getElementById("orderList");

  const totalHarga =
    document.getElementById("totalHarga");

  if (!orderList || !totalHarga) {
    return;
  }

  orderList.innerHTML = "";

  let total = 0;


  if (pesanan.length === 0) {

    orderList.innerHTML = `
      <p class="empty">
        Belum ada pesanan 🍉
      </p>
    `;

    totalHarga.innerText = "Rp0";

    return;
  }


  pesanan.forEach((item, index) => {

    const subtotal =
      item.harga * item.jumlah;

    total += subtotal;


    const div =
      document.createElement("div");

    div.className = "order-item";


    div.innerHTML = `

      <div>

        <strong>
          ${item.nama}
        </strong>

        <br>

        <small>
          Rp${item.harga.toLocaleString("id-ID")}
        </small>

      </div>


      <div>

        <button
          onclick="kurangiOrder(${index})">
          −
        </button>

        <strong style="margin: 0 10px;">
          ${item.jumlah}
        </strong>

        <button
          onclick="tambahJumlah(${index})">
          +
        </button>

      </div>

    `;


    orderList.appendChild(div);

  });


  totalHarga.innerText =
    "Rp" +
    total.toLocaleString("id-ID");
}


// ======================================
// TAMBAH JUMLAH
// ======================================

function tambahJumlah(index) {

  pesanan[index].jumlah++;

  tampilkanOrder();
}


// ======================================
// KURANGI JUMLAH
// ======================================

function kurangiOrder(index) {

  pesanan[index].jumlah--;


  if (pesanan[index].jumlah <= 0) {

    pesanan.splice(index, 1);

  }


  tampilkanOrder();
}


// ======================================
// KIRIM PESANAN KE WHATSAPP
// ======================================

function kirimPesanan() {

  if (pesanan.length === 0) {

    alert(
      "🛒 Pilih menu terlebih dahulu ya!"
    );

    return;
  }


  let pesan =
    "Halo Kedai Semangka Fresh! 🍉%0A%0A";

  let total = 0;


  pesanan.forEach(item => {

    const subtotal =
      item.harga * item.jumlah;

    total += subtotal;


    pesan +=
      "🍉 " +
      item.nama +
      " x" +
      item.jumlah +
      " = Rp" +
      subtotal.toLocaleString("id-ID") +
      "%0A";

  });


  pesan +=
    "%0A💰 Total Pesanan: Rp" +
    total.toLocaleString("id-ID");


  // GANTI NOMOR INI DENGAN NOMOR KEDAI
  const nomor =
    "6281234567890";


  const whatsapp =
    "https://wa.me/" +
    nomor +
    "?text=" +
    pesan;


  window.open(
    whatsapp,
    "_blank"
  );

}


// ======================================
// SAAT WEBSITE DIBUKA
// ======================================

window.addEventListener(
  "load",
  function () {

    tampilkanOrder();

    console.log(
      "🍉 Kedai Semangka Fresh siap!"
    );

  }
);