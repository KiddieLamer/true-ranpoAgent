# SERVICE LEVEL AGREEMENT (SLA) & MAINTENANCE CONTRACT

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek / Sistem** | [Masukkan Nama Proyek Sistem / Aplikasi] |
| **Pihak Pertama (Klien)** | [Nama Perusahaan Klien / Perwakilan] |
| **Pihak Kedua (Vendor)** | [Nama Anda / Nama Perusahaan Anda] |
| **Masa Berlaku Kontrak** | [Mulai Tanggal] s/d [Akhir Tanggal] (Masa Aktif Operasional) |
| **Tingkat Prioritas** | Kritis (P1), Tinggi (P2), Medium (P3), Rendah (P4) |

---

## 1. Pendahuluan & Tujuan SLA
> 💡 **Petunjuk Pengisian:** Dokumen SLA ini disepakati di awal proyek bersama SOW, namun argo pelayanannya baru AKTIF berjalan setelah serah terima sistem selesai (pasca Go-Live). Tujuannya adalah memastikan sistem tetap beroperasi optimal dan membatasi tanggung jawab *support* gratis dari tim *developer*.

Dokumen ini mendefinisikan standar tingkat layanan (*Service Level Agreement*) serta jaminan pemeliharaan yang disediakan oleh Pihak Kedua kepada Pihak Pertama setelah sistem resmi dirilis ke *server production*.

## 2. Masa Garansi vs Masa Pemeliharaan Berbayar
> 💡 **Petunjuk Pengisian:** Batasi dengan jelas kapan masa perbaikan gratis (garansi) berakhir dan kapan argo kontrak pemeliharaan tahunan mulai dihitung.

* **Masa Garansi Bebas Biaya:** Berlaku selama **[X] Hari/Bulan** sejak penandatanganan berita acara UAT. Garansi ini hanya mencakup perbaikan kesalahan kode (*bug/error* murni) yang membuat fungsi dasar sistem tidak berjalan sesuai PRD.
* **Masa Kontrak Pemeliharaan (*Maintenance Contract*):** Dimulai segera setelah Masa Garansi berakhir, dengan biaya sebesar **[Nominal Biaya per Bulan/Tahun]** yang mencakup pemantauan stabilitas infrastruktur, pembaruan keamanan, dan bantuan teknis berkala.

## 3. Matriks Klasifikasi Masalah & Waktu Respons (SLA Matrix)
> 💡 **Petunjuk Pengisian:** Definisikan secara ketat apa yang dimaksud dengan gangguan "Kritis" agar klien tidak mengecap setiap *bug* kecil sebagai hal darurat yang menuntut perbaikan tengah malam.

Pihak Kedua berkomitmen untuk merespons dan menyelesaikan kendala berdasarkan tingkat keparahan (*severity*) berikut:

| Kode | Tingkat Dampak | Kriteria Gangguan | Waktu Respons (*Response Time*) | Waktu Penyelesaian (*Resolution Time*) |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | **Kritis (Critical)** | Seluruh sistem *down*/*crash*, halaman katalog publik ("Collection" & "Story") tidak bisa diakses sama sekali oleh pengunjung bisnis. | Maksimal [X] Jam | Maksimal [X] Jam |
| **P2** | **Tinggi (High)** | Fungsi inti CMS admin terganggu sehingga staf pemasaran tidak bisa memperbarui data/foto, namun halaman publik masih bisa diakses. | Maksimal [X] Jam | Maksimal [X] Hari Kerja |
| **P3** | **Medium (Normal)** | Kesalahan visual minor (misal: tata letak *grid* asimetris bergeser sedikit pada resolusi layar tertentu seperti monitor ultrawide) namun sistem tetap bisa digunakan. | Maksimal [X] Jam | Maksimal [X] Hari Kerja |
| **P4** | **Rendah (Low)** | Pertanyaan seputar penggunaan sistem atau permintaan perubahan kata/terminologi antarmuka di luar yang diatur dalam PRD. | Maksimal [X] Jam | Dimasukkan ke jadwal rilis berkala |

* *Waktu Respons:* Batas waktu sejak tiket laporan diterima hingga Pihak Kedua memberikan konfirmasi penanganan.
* *Waktu Penyelesaian:* Batas waktu hingga masalah berhasil diperbaiki/diberikan *workaround*.

## 4. Ruang Lingkup Pemeliharaan (Maintenance Scope)
> 💡 **Petunjuk Pengisian:** Kunci cakupan *support* agar Anda tidak dipaksa melakukan penambahan fitur baru secara cuma-cuma dengan dalih "pemeliharaan".

### 4.1 Termasuk dalam Pemeliharaan (In-Scope):
* Pemantauan rutin performa server dan kecepatan muat (*load time*) halaman utama.
* Pembaruan berkala dependensi paket perangkat lunak (*package dependencies updates* via `npm` / `brew`).
* Perbaikan celah keamanan dan kegagalan sistem operasional mendasar.
* Pengaturan ulang jika terjadi kendala pada DNS management atau sertifikat SSL *hosting*.

### 4.2 Tidak Termasuk dalam Pemeliharaan (Out-of-Scope):
* Penambahan fitur baru yang tidak terdaftar di PRD awal (contoh: pembuatan modul kasir fisik/POS).
* Pembuatan ulang aset kreatif, fotografi produk, atau penulisan ulang konten narasi.
* Perbaikan atas kesalahan yang disebabkan oleh modifikasi kode pihak ketiga di luar izin Pihak Kedua.

## 5. Batasan Ketersediaan Sistem (Uptime Target)
* Pihak Kedua menargetkan tingkat ketersediaan layanan (*uptime*) aplikasi web minimal sebesar **99.X%** setiap bulannya, di luar masa pemeliharaan terjadwal (*scheduled maintenance*).
* Pemeliharaan terjadwal yang memerlukan sistem dinonaktifkan sementara akan diinformasikan kepada Pihak Pertama minimal [X] hari sebelum eksekusi dan dilakukan di luar jam sibuk operasional.

## 6. Persetujuan & Tanda Tangan
Dengan menandatangani dokumen ini, kedua belah pihak sepakat untuk mematuhi seluruh aturan batasan kerja dan matriks penanganan masalah pasca rilis sistem ini.

**Pihak Pertama (Klien)**
* Nama: _______________________
* Jabatan: _______________________
* Tanggal & Tanda Tangan: _______________________

**Pihak Kedua (Vendor/Developer)**
* Nama: _______________________
* Jabatan: _______________________
* Tanggal & Tanda Tangan: _______________________
