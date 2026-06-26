# BUSINESS SCENARIO TEST (BST) PLAN

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | [Masukkan Nama Proyek Sistem / Aplikasi] |
| **Versi Dokumen** | [Contoh: 1.0 Draft] |
| **Tanggal Pengujian** | [Tanggal Pelaksanaan BST] |
| **Business Analyst / Tester** | [Nama Lengkap Anda] |
| **Fokus Pengujian** | Alur Bisnis Operasional & Kesesuaian *Brand* |

---

## 1. Pendahuluan
> 💡 **Petunjuk Pengisian:** Berbeda dengan UAT yang fokus pada fungsionalitas tombol/fitur akhir bagi klien, BST (*Business Scenario Test*) bertujuan untuk memastikan bahwa sistem baru benar-benar mendukung **proses bisnis** sehari-hari dan selaras dengan tujuan strategis perusahaan.

Pengujian ini dilakukan untuk memvalidasi bahwa sistem *website* dan CMS mampu mengakomodasi alur kerja operasional tim internal (seperti tim pemasaran atau *content creator*) serta merepresentasikan identitas merek perusahaan secara tepat kepada publik.

## 2. Prasyarat Operasional Bisnis
> 💡 **Petunjuk Pengisian:** Hal-hal apa yang harus disiapkan oleh tim bisnis sebelum memulai pengujian ini.

* Tim pemasaran telah menyiapkan materi riil (foto produk katalog resolusi tinggi dan naskah profil perusahaan).
* Lingkungan pengujian (*staging*) telah dikonfigurasi menyerupai lingkungan *production*.

## 3. Skenario Pengujian Bisnis
> 💡 **Petunjuk Pengisian:** Skenario ini berbasis pada tugas (*task*) atau proses bisnis, bukan sekadar klik menu. Formatnya menggunakan studi kasus operasional.

### 3.1 Skenario Bisnis 1: Peluncuran Katalog Musim Baru
**Konteks Bisnis:** Tim Pemasaran perlu memperbarui seluruh tampilan produk untuk peluncuran koleksi terbaru tanpa bantuan tim IT/Developer.

| Langkah Proses Bisnis | Ekspektasi Bisnis (Business Expectation) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Staf pemasaran *login* ke CMS dan membuat entri produk baru untuk kampanye musim ini. | Proses *input* mudah dipahami oleh staf non-teknis, form *upload* berjalan cepat. | [   ] | |
| 2. Staf mengecek *preview* di halaman publik **"Collection"**. | Produk baru langsung tampil. Tata letak *grid* asimetris tetap seimbang dan rapi meskipun ukuran gambar yang diunggah bervariasi. | [   ] | |
| 3. Verifikasi ketiadaan fitur harga dinamis/keranjang belanja. | Sesuai kesepakatan prinsip *website* profesional umum, halaman murni berfungsi sebagai etalase tanpa *flow* kasir (POS) yang membingungkan pengunjung. | [   ] | |

### 3.2 Skenario Bisnis 2: Pembaruan Narasi & *Brand Storytelling*
**Konteks Bisnis:** Perusahaan mengubah sedikit filosofi mereknya dan ingin memastikan narasinya sampai ke pelanggan dengan estetika yang tepat.

| Langkah Proses Bisnis | Ekspektasi Bisnis (Business Expectation) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Staf pemasaran memperbarui teks sejarah perusahaan melalui CMS. | CMS memiliki editor teks (*Rich Text Editor*) yang berfungsi baik. | [   ] | |
| 2. Pengecekan halaman publik **"Story"** oleh *Brand Manager*. | Teks tampil dengan tipografi *serif* elegan yang telah ditetapkan. Ruang putih (*whitespace*) di sekitar teks memberikan kesan premium layaknya artikel majalah. | [   ] | |
| 3. *Review* diksi dan struktur menu oleh *Brand Manager*. | Sistem navigasi konsisten menampilkan istilah "Collection" dan "Story", serta **bersih dari** istilah *template* AI yang generik seperti "Artisanal" atau "Bespoke". | [   ] | |

### 3.3 Skenario Bisnis 3: Penelusuran Pelanggan (Customer Journey)
**Konteks Bisnis:** Calon pembeli mengunjungi situs web untuk mencari informasi sebelum datang ke butik/toko luring.

| Langkah Proses Bisnis | Ekspektasi Bisnis (Business Expectation) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Pelanggan membuka *homepage* dari perangkat *mobile*. | *Loading* cepat, *brand image* langsung terlihat, pengunjung tidak *bounce* karena kebingungan. | [   ] | |
| 2. Pelanggan ingin melihat rincian suatu barang dan mencari cara menghubungi staf toko. | Navigasi intuitif (maksimal 2 klik menuju kontak/WhatsApp dari halaman katalog produk). | [   ] | |

## 4. Evaluasi Dampak Bisnis
> 💡 **Petunjuk Pengisian:** Kesimpulan dari *Business Analyst* mengenai apakah sistem ini sudah layak dipakai untuk operasional sehari-hari.

**Rekomendasi / Temuan:**
* [Apakah ada proses internal yang justru menjadi lebih lambat?]
* [Apakah ada alur yang kurang sesuai dengan SOP perusahaan klien?]
* [Catatan tindak lanjut untuk tim pengembang]

## 5. Lembar Validasi (Business Sign-Off)
Dengan menandatangani dokumen ini, perwakilan dari pihak bisnis/operasional menyatakan bahwa sistem telah dievaluasi berdasarkan skenario kerja nyata dan dinilai **siap/belum siap** untuk diimplementasikan dalam operasional sehari-hari.

**Business Owner / Perwakilan Klien:**
* Nama: _______________________
* Jabatan: _______________________
* Tanggal: _______________________
* Tanda Tangan: _______________________

**Business Analyst / Pembuat Dokumen:**
* Nama: _______________________
* Tanggal: _______________________
* Tanda Tangan: _______________________
