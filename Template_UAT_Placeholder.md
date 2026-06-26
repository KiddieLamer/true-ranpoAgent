# USER ACCEPTANCE TEST (UAT) PLAN & SIGN-OFF

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | [Masukkan Nama Proyek Sistem / Aplikasi] |
| **Versi Dokumen** | [Contoh: 1.0 Final] |
| **Tanggal Pengujian** | [Tanggal Pelaksanaan UAT] |
| **Fasilitator (Developer)** | [Nama Lengkap Anda] |
| **Penguji (Klien)** | [Nama Perwakilan Klien] |

---

## 1. Pendahuluan
> 💡 **Petunjuk Pengisian:** Jelaskan tujuan dari pengujian ini. UAT adalah tahap pengujian akhir yang dilakukan langsung oleh klien untuk memastikan sistem sudah dibangun sesuai dengan spesifikasi PRD dan SOW.

Dokumen ini berisi skenario pengujian untuk memvalidasi fungsionalitas dan antarmuka **[Nama Proyek]**. Pengujian dilakukan di lingkungan *staging* sebelum sistem dipindahkan ke *server production*. Kesuksesan seluruh skenario di bawah ini akan menjadi dasar serah terima proyek (Sign-Off).

## 2. Prasyarat Pengujian (Prerequisites)
> 💡 **Petunjuk Pengisian:** Syarat apa saja yang harus terpenuhi sebelum klien mulai melakukan klik dan tes.

* Sistem telah di-deploy ke lingkungan *staging* yang dapat diakses oleh klien.
* Data *dummy* atau data migrasi historis awal telah dimasukkan ke dalam *database*.
* Klien menggunakan perangkat dengan resolusi layar yang representatif (termasuk pengujian pada monitor eksternal resolusi tinggi / *ultrawide*).

## 3. Skenario Pengujian (Test Cases)
> 💡 **Petunjuk Pengisian:** Skenario langkah demi langkah yang harus dicoba klien, lengkap dengan kolom status (Pass/Fail) dan catatan.

### 3.1 Skenario 1: Verifikasi Navigasi dan Terminologi Web
**Tujuan:** Memastikan struktur menu profesional dan tidak menggunakan terminologi *template* generik.

| Langkah Pengujian | Ekspektasi Hasil (Expected Result) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Buka halaman utama (*Homepage*). | Halaman dimuat dengan sempurna. | [   ] | |
| 2. Periksa menu navigasi utama di bagian *header*. | Terdapat menu **"Collection"** dan **"Story"**. | [   ] | |
| 3. Pengecekan visual keseluruhan teks. | Tidak ada penggunaan istilah generik/elitis bawaan AI seperti "Artisanal", "Bespoke", dsb. | [   ] | |
| 4. Klik menu "Collection". | Halaman beralih ke grid katalog produk. | [   ] | |

### 3.2 Skenario 2: Validasi UI/UX & Responsivitas Layout
**Tujuan:** Memastikan desain *clean*, tipografi sesuai, dan proporsi *whitespace* tidak terdistorsi di layar lebar.

| Langkah Pengujian | Ekspektasi Hasil (Expected Result) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Akses halaman "Story". | Tata letak menggunakan *grid* asimetris bergaya artikel majalah editorial. | [   ] | |
| 2. Periksa jenis huruf teks narasi. | Menggunakan tipografi *serif* yang elegan dan mudah dibaca. | [   ] | |
| 3. Uji pada perangkat *Mobile*. | Komponen menyesuaikan (*responsive*) tanpa *layout* terpotong. | [   ] | |
| 4. Uji pada Monitor Ultrawide (cth: Lenovo L29w-30). | Proporsi *whitespace* tetap rapi dan tidak merusak hierarki visual di layar lebar. | [   ] | |

### 3.3 Skenario 3: Manajemen Konten (CMS)
**Tujuan:** Memastikan Admin dapat mengelola informasi secara mandiri.

| Langkah Pengujian | Ekspektasi Hasil (Expected Result) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Login ke *Dashboard* CMS. | Masuk ke panel dengan akses yang valid. | [   ] | |
| 2. Tambah produk baru beserta foto resolusi tinggi. | Data tersimpan di *database* dan sukses diunggah. | [   ] | |
| 3. Cek kembali halaman "Collection" publik. | Produk baru langsung muncul di bagian paling atas grid. | [   ] | |

### 3.4 Skenario 4: Verifikasi Batasan Sistem (Out-of-Scope Checks)
**Tujuan:** Memastikan tidak ada sisa modul atau tombol fungsionalitas yang berada di luar cakupan proyek (seperti transaksi fisik).

| Langkah Pengujian | Ekspektasi Hasil (Expected Result) | Status (Pass/Fail) | Catatan |
| :--- | :--- | :--- | :--- |
| 1. Simulasikan klik pada produk katalog. | Menampilkan detail produk tanpa mengarah ke fitur keranjang belanja internal / kasir. | [   ] | |
| 2. Periksa ketiadaan modul *Point of Sale* (POS). | Sistem murni berfungsi sebagai katalog presentasi dan profil web profesional, tidak ada integrasi transaksi *real-time* POS di panel Admin. | [   ] | |

## 4. Kriteria Kelulusan & Catatan Perbaikan
> 💡 **Petunjuk Pengisian:** Ruang untuk mencatat *bug* atau temuan revisi minor dari skenario yang berstatus "Fail".

Sistem dinyatakan siap rilis (*Go-Live*) apabila **100% dari skenario pengujian di atas berstatus "Pass"**. 
Jika terdapat skenario yang berstatus "Fail", perbaikan akan dicatat di bawah ini untuk diselesaikan dalam batas waktu revisi UAT:
1. [Catatan Temuan 1...]
2. [Catatan Temuan 2...]

## 5. Lembar Persetujuan (Sign-Off)
> 💡 **Petunjuk Pengisian:** Tanda tangan di sini berarti proyek (fase *development*) secara resmi dinyatakan SELESAI.

Dengan menandatangani dokumen ini, Pihak Klien menyatakan bahwa telah melakukan pengujian fungsionalitas dan antarmuka sistem. Sistem telah berjalan sesuai dengan ekspektasi dan kesepakatan dalam *Statement of Work* (SOW). 

Pihak Klien menyetujui bahwa sistem ini siap untuk dipindahkan ke lingkungan operasional (*Production*) dan serah terima proyek dianggap sah.

**Diuji & Disetujui Oleh (Klien):**
* Nama: _______________________
* Jabatan: _______________________
* Tanggal: _______________________
* Tanda Tangan: _______________________

**Diserahkan Oleh (Fasilitator/Developer):**
* Nama: _______________________
* Jabatan: _______________________
* Tanggal: _______________________
* Tanda Tangan: _______________________
