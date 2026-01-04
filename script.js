const nomorWhatsApp = "6285176978877"; // Ganti dengan nomor WhatsApp kamu

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const ProdukList = document.getElementById("Produk-list");

    data.Produk.forEach(item => {
      const ProdukDiv = document.createElement("div");
      ProdukDiv.className = "Produk-item";
  
      const pesan = encodeURIComponent(
      `Assalaamu'alaikum.\n\n` +
      `Perkenalkan, nama saya .......... Saya tertarik untuk membeli Produk *${item.nama}*.\n\n` +
      `Berikut rincian pesanan saya:\n` +
      `• Jumlah: ..........\n` +
      `• Alamat lengkap: ..........\n` +
      `• Waktu yang diinginkan: ..........\n\n` +
      `Mohon konfirmasinya, terima kasih.`
      );


      ProdukDiv.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}">
        <div class="Produk-content">
          <h3>${item.nama}</h3>
          <p>${item.deskripsi}</p>
          <a class="wa-button" href="https://wa.me/${nomorWhatsApp}?text=${pesan}" target="_blank" rel="noopener noreferrer">Pesan via WhatsApp</a>
          <a class="Shopee-button" href="${item.linkshopee}" target="_blank" rel="noopener noreferrer" class="Shopee-button">Pesan Via Shopee</a>
        </div>
      `;

      ProdukList.appendChild(ProdukDiv);
    });
  })
  .catch(error => console.error("Gagal memuat data:", error));