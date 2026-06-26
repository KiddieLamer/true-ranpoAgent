# SERVICE LEVEL AGREEMENT (SLA) & MAINTENANCE

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek / Sistem** | |
| **Kode Dokumen** | SLA-[PROJECT]-[VERSI] |
| **Versi** | 1.0 |
| **Tanggal Efektif** | |
| **Pihak Pertama (Klien)** | |
| **Pihak Kedua (Vendor)** | |
| **Masa Berlaku** | s/d |
| **SOW Reference** | SOW-[PROJECT]-[VERSI] |

---

## Revision History

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|-----------|
| 0.1 | | | Draft awal |
| 1.0 | | | Approved |

---

## Daftar Isi

- [1. Pendahuluan](#1-pendahuluan)
- [2. Masa Layanan](#2-masa-layanan)
- [3. Severity Matrix](#3-severity-matrix)
- [4. Scope Pekerjaan](#4-scope-pekerjaan)
- [5. Uptime Target](#5-uptime-target)
- [6. Biaya & Termin](#6-biaya--termin)
- [7. Pelaporan & Review](#7-pelaporan--review)
- [8. Escalation Matrix](#8-escalation-matrix)
- [9. Pengecualian](#9-pengecualian)
- [10. Sign-Off](#10-sign-off)

---

## 1. Pendahuluan

### 1.1 Tujuan
Dokumen SLA ini mendefinisikan standar tingkat layanan, waktu respons, dan cakupan pemeliharaan untuk sistem [Nama Proyek] setelah Go Live.

### 1.2 Masa Aktif
SLA ini mulai berlaku **setelah sistem resmi Go Live** dan UAT/BST telah ditandatangani.

### 1.3 Hubungan dengan SOW
SLA mengacu pada SOW yang telah ditandatangani. Garansi pasca rilis adalah [X] bulan sejak Go Live (lihat SOW section 9).

---

## 2. Masa Layanan

### 2.1 Garansi (Post-Launch Warranty)
- **Durasi:** [X] bulan sejak Go Live
- **Cakupan:** Perbaikan bug/error murni (bukan fitur baru)
- **Biaya:** Termasuk dalam biaya proyek (SOW)

### 2.2 Maintenance Contract (Post-Garansi)
- **Durasi:** Per tahun, bisa diperpanjang
- **Cakupan:** Full SLA + maintenance
- **Biaya:** Rp [Nominal]/tahun atau Rp [Nominal]/bulan

### 2.3 Time & Material
- **Rate:** Rp [Rate]/jam
- **Minimum:** [X] jam
- **Cakupan:** Pekerjaan di luar scope maintenance contract

---

## 3. Severity Matrix

| Level | Label | Definisi | Response Time | Resolution Time | Reporting |
|-------|-------|----------|--------------|-----------------|-----------|
| **P1** | Critical | Sistem down total, tidak bisa diakses oleh user | ≤ [X] jam | ≤ [X] jam | Telepon + Email |
| **P2** | High | Fitur utama terganggu, ada workaround parsial | ≤ [X] jam | ≤ [X] hari | Email + Chat |
| **P3** | Medium | Bug non-kritis, gangguan minor | ≤ [X] jam | ≤ [X] hari | Email |
| **P4** | Low | Pertanyaan, permintaan dokumentasi, perubahan minor | ≤ [X] jam | Next release | Email |

### 3.1 Response Time Definition
Waktu antara laporan diterima (ticket/email/telepon) hingga Pihak Kedua mengkonfirmasi penanganan.

### 3.2 Resolution Time Definition
Waktu hingga masalah diperbaiki atau workaround diberikan.

### 3.3 Business Hours
- **Jam kerja:** [Hari] [Jam] - [Jam] WIB
- **P1:** 24/7 (termasuk hari libur)
- **P2-P4:** Jam kerja

---

## 4. Scope Pekerjaan

### 4.1 In-Scope (Termasuk)

| # | Layanan | Detail |
|---|---------|--------|
| 1 | Incident Response | Penanganan bug/error sesuai severity matrix |
| 2 | Security Patches | Update keamanan dependencies & library |
| 3 | Backup Management | Verifikasi backup, restore test |
| 4 | Monitoring | Pantau uptime, performa, error rate |
| 5 | Database Maintenance | Optimasi query, vacuum, indexing |
| 6 | SSL & Domain | Renewal SSL, DNS management |

### 4.2 Out-of-Scope (Tidak Termasuk)

| # | Layanan | Alternatif |
|---|---------|------------|
| 1 | Penambahan fitur baru | Time & material / project terpisah |
| 2 | Pembuatan konten / copywriting | Tim kreatif klien |
| 3 | Hosting & infrastruktur | Ditagihkan separately / handling klien |
| 4 | Perbaikan akibat pihak ketiga | Ditagihkan ke pihak ketiga terkait |
| 5 | Training / onboarding ulang | Time & material |

---

## 5. Uptime Target

| Metrik | Target | Periode |
|--------|--------|---------|
| Uptime aplikasi | ≥ [99.X]% | Bulanan |
| API availability | ≥ [99.X]% | Bulanan |
| Database availability | ≥ [99.X]% | Bulanan |

### 5.1 Exclusions
Uptime target tidak berlaku untuk:
- Maintenance terjadwal (notifikasi [X] hari sebelumnya)
- Force majeure
- Downtime akibat pihak ketiga (hosting, CDN, ISP)

### 5.2 Maintenance Window
- **Waktu:** [Jam] - [Jam], [Hari]
- **Frekuensi:** [Bulanan / kuartalan]
- **Notifikasi:** Minimal [X] hari sebelumnya

---

## 6. Biaya & Termin

| Komponen | Biaya | Catatan |
|----------|-------|---------|
| Garansi ([X] bulan) | Termasuk SOW | - |
| Maintenance per tahun | Rp | Bisa dicicil per bulan |
| Time & material | Rp/jam | Minimum [X] jam |
| Hosting & infrastruktur | Rp/bulan | Ditagihkan terpisah |

---

## 7. Pelaporan & Review

| Report | Frekuensi | Isi |
|--------|-----------|-----|
| Laporan bulanan | Per bulan | Uptime, incident, resolution time |
| Review SLA | Per kuartal | Evaluasi SLA, improvement plan |
| Incident report | Per insiden (P1/P2) | Root cause, timeline, action item |

---

## 8. Escalation Matrix

| Level | Contact | Response Time |
|-------|---------|--------------|
| **L1 Support** | [Nama / Team] | Sesuai severity matrix |
| **L2 Engineer** | [Nama] | Jika L1 tidak resolve dalam [X] jam |
| **L3 Tech Lead** | [Nama] | Jika L2 tidak resolve dalam [X] jam |
| **Management** | [Nama] | Eskalasi komersial / kontrak |

---

## 9. Pengecualian

SLA ini **tidak berlaku** untuk:
1. Masalah yang disebabkan oleh modifikasi kode oleh pihak ketiga tanpa persetujuan
2. Masalah yang disebabkan oleh hosting/infrastruktur di luar kendali Pihak Kedua
3. Gangguan akibat force majeure
4. Masalah yang timbul dari penggunaan sistem di luar dokumentasi resmi
5. Fitur yang sudah di-out-of-scope-kan di SOW/PRD

---

## 10. Sign-Off

Dengan menandatangani dokumen ini, kedua belah pihak menyetujui standar layanan dan cakupan pemeliharaan sebagaimana didefinisikan di atas.

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
