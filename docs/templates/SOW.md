# STATEMENT OF WORK (SOW)

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | |
| **Kode Dokumen** | SOW-[PROJECT]-[VERSI] |
| **Versi** | 1.0 |
| **Tanggal Efektif** | |
| **Pihak Pertama (Klien)** | |
| **Pihak Kedua (Vendor)** | |
| **Nilai Proyek** | |
| **BRD Reference** | BRD-[PROJECT]-[VERSI] |

---

## Revision History

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|-----------|
| 0.1 | | | Draft awal |
| 1.0 | | | Approved |

---

## Daftar Isi

- [1. Pendahuluan](#1-pendahuluan)
- [2. Ruang Lingkup Pekerjaan](#2-ruang-lingkup-pekerjaan)
- [3. Deliverables](#3-deliverables)
- [4. Jadwal & Milestone](#4-jadwal--milestone)
- [5. Biaya & Termin Pembayaran](#5-biaya--termin-pembayaran)
- [6. Change Management](#6-change-management)
- [7. Hak Kekayaan Intelektual](#7-hak-kekayaan-intelektual)
- [8. Kerahasiaan (NDA)](#8-kerahasiaan-nda)
- [9. SLA & Garansi](#9-sla--garansi)
- [10. Penghentian Kontrak](#10-penghentian-kontrak)
- [11. Penyelesaian Sengketa](#11-penyelesaian-sengketa)
- [12. Force Majeure](#12-force-majeure)
- [13. Ketentuan Lain](#13-ketentuan-lain)
- [14. Persetujuan](#14-persetujuan)

---

## 1. Pendahuluan

### 1.1 Latar Belakang
Dokumen SOW ini merujuk pada BRD yang telah disepakati sebelumnya (BRD-[PROJECT]-[VERSI]) dan mengikat secara hukum kedua belah pihak.

### 1.2 Tujuan
Mendefinisikan secara formal ruang lingkup pekerjaan, jadwal, biaya, serta syarat dan ketentuan untuk proyek [Nama Proyek].

### 1.3 Dokumen Terkait
| Dokumen | Kode | Status |
|---------|------|--------|
| BRD | BRD-[PROJECT]-[VERSI] | Approved |
| (Dokumen lain) | | |

---

## 2. Ruang Lingkup Pekerjaan

### 2.1 In-Scope
Pekerjaan yang termasuk dalam proyek ini (berdasarkan BRD section [X]):

| # | Area | Deskripsi | BRD Ref |
|---|------|-----------|---------|
| 1 | [Misal: Pengembangan Backend] | | §X |
| 2 | [Misal: Frontend] | | §X |
| 3 | [Misal: Integrasi] | | §X |

### 2.2 Out-of-Scope
Pekerjaan yang TIDAK termasuk dan memerlukan SOW tambahan:

| # | Item | Alasan |
|---|------|--------|
| 1 | | |
| 2 | | |

### 2.3 Asumsi Scope
| # | Asumsi | Konsekuensi Jika Salah |
|---|--------|------------------------|
| 1 | Pihak Pertama menyediakan API dokumentasi pihak ketiga maksimal [X] hari setelah kickoff | Jadwal mundur proporsional |
| 2 | | |

---

## 3. Deliverables

| # | Deliverable | Format | Acceptance Criteria | Review Period |
|---|-------------|--------|-------------------|---------------|
| 1 | Source code aplikasi | Git repository | Semua fitur in-scope berfungsi sesuai BRD | 5 hari kerja |
| 2 | Dokumentasi teknis | Markdown / PDF | Mencakup arsitektur, setup, deployment | 3 hari kerja |
| 3 | User manual | PDF / HTML | Mencakup seluruh fitur untuk end user | 3 hari kerja |
| 4 | [dst] | | | |

**Catatan:** Jika Pihak Pertama tidak memberikan feedback dalam periode review, deliverable dianggap **accepted**.

---

## 4. Jadwal & Milestone

### 4.1 Timeline
Proyek ini diestimasi selesai dalam **[X] minggu** sejak kickoff.

### 4.2 Milestone

| # | Milestone | Deliverable | Estimasi | Tanggal Target |
|---|-----------|-------------|----------|----------------|
| M1 | Kickoff & Setup | Environment siap, akses diberikan | 1 minggu | |
| M2 | [Fase 1] | [Deliverable M2] | [X] minggu | |
| M3 | [Fase 2] | [Deliverable M3] | [X] minggu | |
| M4 | UAT Selesai | UAT signed-off oleh klien | [X] minggu | |
| M5 | Go Live | Sistem live di production | [X] minggu | |

### 4.3 Dependencies

| Dependency | Owner | Deadline | Risiko Jika Terlambat |
|------------|-------|----------|----------------------|
| API dokumentasi dari pihak ketiga | Pihak Pertama | [Tanggal] | Milestone M2 mundur |
| Aset desain (logo, gambar) | Pihak Pertama | [Tanggal] | Milestone M1 mundur |

---

## 5. Biaya & Termin Pembayaran

### 5.1 Total Biaya
**Rp [Total] ([Terbilang] Rupiah)**

### 5.2 Termin Pembayaran

| # | Termin | Persentase | Nominal | Trigger Pembayaran |
|---|--------|------------|---------|-------------------|
| 1 | Uang Muka (DP) | [XX]% | Rp | Setelah SOW ditandatangani |
| 2 | Milestone 1 | [XX]% | Rp | Setelah M1 accepted |
| 3 | Milestone 2 | [XX]% | Rp | Setelah M2 accepted |
| 4 | Pelunasan | [XX]% | Rp | Setelah M5 (Go Live) |

### 5.3 Keterlambatan Pembayaran
Pembayaran yang melebihi [X] hari dari trigger akan dikenakan denda [X]% per bulan keterlambatan.

---

## 6. Change Management

### 6.1 Change Request Process
1. Pihak Pertama mengajukan Change Request (CR) tertulis
2. Pihak Kedua memberikan estimasi biaya & timeline tambahan
3. Kedua pihak menyetujui CR
4. CR dilampirkan sebagai addendum SOW

### 6.2 Biaya Tambahan
Perubahan scope di luar SOW akan ditagihkan dengan rate **Rp [Rate]/jam** atau **fixed price** sesuai kesepakatan.

### 6.3 Batas Revisi
| Tahap | Revisi Termasuk | Biaya Tambahan |
|-------|-----------------|----------------|
| Desain | [X] kali revisi mayor | Rp [Rate]/revisi setelahnya |
| UAT | [X] kali revisi minor | Rp [Rate]/revisi setelahnya |

---

## 7. Hak Kekayaan Intelektual

### 7.1 Kepemilikan
Setelah pembayaran lunas, seluruh hak milik source code dan aset digital yang dibuat secara khusus untuk proyek ini beralih ke Pihak Pertama.

### 7.2 Lisensi Pihak Kedua
Pihak Kedua berhak menggunakan elemen kode yang bersifat umum (library, boilerplate, framework) untuk proyek lain, selama tidak mengandung data/rahasia Pihak Pertama.

---

## 8. Kerahasiaan (NDA)

### 8.1 Informasi Terlindungi
Semua informasi yang diakses Pihak Kedua selama proyek (data klien, arsitektur internal, rahasia dagang) bersifat rahasia dan tidak boleh diungkapkan ke pihak ketiga.

### 8.2 Periode Kerahasiaan
Kewajiban kerahasiaan berlaku selama [X] tahun setelah SOW ini ditandatangani.

---

## 9. SLA & Garansi

### 9.1 Masa Garansi
Pihak Kedua memberikan garansi perbaikan bug (tidak termasuk fitur baru) selama **[X] bulan** setelah Go Live.

### 9.2 Severity Levels

| Level | Definisi | Response Time | Resolution Time |
|-------|----------|--------------|-----------------|
| **Critical** | Sistem down, tidak bisa digunakan | ≤ 4 jam | ≤ 24 jam |
| **High** | Fitur utama terganggu | ≤ 8 jam | ≤ 48 jam |
| **Medium** | Fitur non-kritis terganggu | ≤ 24 jam | ≤ 5 hari |
| **Low** | Bug kosmetik / minor | ≤ 48 jam | ≤ 10 hari |

### 9.3 Layanan Pasca Garansi
Setelah masa garansi berakhir, Pihak Pertama dapat memilih:
- **Maintenance contract** — biaya bulanan/tahunan
- **Time & material** — Rp [Rate]/jam
- **Per-event** — perbaikan per insiden

---

## 10. Penghentian Kontrak

### 10.1 Penghentian oleh Pihak Pertama
Pihak Pertama dapat menghentikan kontrak dengan pemberitahuan tertulis [X] hari sebelumnya. Pembayaran dilakukan proporsional terhadap pekerjaan yang sudah selesai.

### 10.2 Penghentian oleh Pihak Kedua
Pihak Kedua dapat menghentikan kontrak jika Pihak Pertama tidak melakukan pembayaran selama [X] hari setelah jatuh tempo.

### 10.3 Penghentian karena Pelanggaran
Salah satu pihak dapat menghentikan kontrak jika pihak lain melanggar ketentuan material dan tidak memperbaiki dalam [X] hari setelah pemberitahuan.

---

## 11. Penyelesaian Sengketa

### 11.1 Musyawarah
Setiap sengketa akan diselesaikan secara musyawarah terlebih dahulu.

### 11.2 Mediasi
Jika musyawarah tidak mencapai kesepakatan dalam [X] hari, para pihak akan menempuh mediasi.

### 11.3 Hukum yang Berlaku
SOW ini tunduk pada hukum dan peraturan perundang-undangan Negara Kesatuan Republik Indonesia.

### 11.4 Domisili
Para pihak sepakat memilih domisili hukum di [Kota, Pengadilan Negeri].

---

## 12. Force Majeure

### 12.1 Definisi
Force majeure meliputi: bencana alam, perang, kerusuhan, pandemi, pemogokan umum, kebakaran, banjir, dan kejadian di luar kendali para pihak.

### 12.2 Dampak
Jika force majeure terjadi, kewajiban para pihak ditangguhkan selama [X] hari. Jika melebihi [X] hari, kontrak dapat dihentikan tanpa penalti.

---

## 13. Ketentuan Lain

- **Pajak:** Seluruh biaya sudah termasuk/tidak termasuk PPN sesuai ketentuan perpajakan yang berlaku.
- **Komunikasi:** Semua komunikasi formal dilakukan melalui email tercatat ke [email].
- **Laporan Berkala:** Pihak Kedua akan memberikan laporan progres setiap [minggu] via [channel].

---

## 14. Persetujuan

Dokumen ini mengikat secara sah setelah ditandatangani oleh kedua belah pihak.

**Pihak Pertama (Klien)**
- Nama: _______________________
- Jabatan: _______________________
- Tanggal: _______________________
- Tanda Tangan: _______________________

**Pihak Kedua (Vendor)**
- Nama: _______________________
- Jabatan: _______________________
- Tanggal: _______________________
- Tanda Tangan: _______________________

**Saksi-Saksi**
- Nama: _______________________
- Jabatan: _______________________
- Tanda Tangan: _______________________
