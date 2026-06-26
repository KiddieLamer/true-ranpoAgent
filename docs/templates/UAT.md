# USER ACCEPTANCE TEST (UAT)

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | |
| **Kode Dokumen** | UAT-[PROJECT]-[VERSI] |
| **Versi** | 1.0 |
| **Tanggal Pengujian** | |
| **Fasilitator** | |
| **Penguji (Klien)** | |
| **PRD Reference** | PRD-[PROJECT]-[VERSI] |

---

## Revision History

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|-----------|
| 0.1 | | | Draft awal |
| 1.0 | | | Approved |

---

## Daftar Isi

- [1. Pendahuluan](#1-pendahuluan)
- [2. Lingkungan Pengujian](#2-lingkungan-pengujian)
- [3. Skenario Pengujian](#3-skenario-pengujian)
- [4. Kriteria Kelulusan](#4-kriteria-kelulusan)
- [5. Hasil Pengujian](#5-hasil-pengujian)
- [6. Catatan & Temuan](#6-catatan--temuan)
- [7. Sign-Off](#7-sign-off)

---

## 1. Pendahuluan

### 1.1 Tujuan
UAT adalah pengujian akhir yang dilakukan langsung oleh perwakilan klien untuk memvalidasi bahwa sistem telah dibangun sesuai dengan PRD.

### 1.2 Scope Pengujian
- **In-scope:** Seluruh fitur yang tercantum di PRD section [X]
- **Out-of-scope:** Performa, load test (di-handle oleh QA Engineer)

### 1.3 Referensi

| Dokumen | Kode | Versi |
|---------|------|-------|
| PRD | PRD-[PROJECT] | |
| TSD | TSD-[PROJECT] | |

---

## 2. Lingkungan Pengujian

### 2.1 Environment
- **URL Staging:** [URL]
- **Database:** Data anonim dari production / seed data
- **Browser yang digunakan:** [Chrome/Firefox/Safari, versi]

### 2.2 Prasyarat

- [ ] Sistem sudah di-deploy ke staging
- [ ] Data sample sudah dimasukkan
- [ ] User test sudah dibuat
- [ ] Klien sudah mendapatkan akses + credentials

---

## 3. Skenario Pengujian

> Test case per fitur, ditandai Pass/Fail oleh klien.

### 3.1 Modul/Fitur: [Nama Fitur]
**PRD Ref:** §X | **Priority:** [High/Medium/Low]

| # | Langkah Pengujian | Expected Result | Status | Catatan |
|---|-------------------|-----------------|--------|---------|
| 1 | | | [ ] / [ ] | |
| 2 | | | [ ] / [ ] | |
| 3 | | | [ ] / [ ] | |

### 3.2 Modul/Fitur: [Nama Fitur]
**PRD Ref:** §X | **Priority:** [High/Medium/Low]

| # | Langkah Pengujian | Expected Result | Status | Catatan |
|---|-------------------|-----------------|--------|---------|
| 1 | | | [ ] / [ ] | |
| 2 | | | [ ] / [ ] | |

### 3.3 Edge Cases

| # | Skenario | Expected Result | Status | Catatan |
|---|----------|-----------------|--------|---------|
| EC-1 | Input kosong pada field wajib | Muncul error validasi | [ ] / [ ] | |
| EC-2 | Koneksi internet terputus | Tampilkan pesan error yang informatif | [ ] / [ ] | |

---

## 4. Kriteria Kelulusan

Sistem dinyatakan **lulus UAT** jika:
- ✅ 100% test case **Must-have** berstatus Pass
- ✅ ≥ 90% test case total berstatus Pass
- ✅ Tidak ada **Critical** bug yang belum terfix

**Jika gagal:** Perbaikan akan dilakukan dalam [X] hari kerja, lalu dijadwalkan UAT ulang.

---

## 5. Hasil Pengujian

| Modul | Total Test | Pass | Fail | Pass Rate |
|-------|------------|------|------|-----------|
| | | | | % |
| **Total** | | | | % |

---

## 6. Catatan & Temuan

| # | Modul | Temuan | Severity | Status |
|---|-------|--------|----------|--------|
| 1 | | | Critical/High/Med/Low | Fixed / Open |
| 2 | | | | |

---

## 7. Sign-Off

Dengan menandatangani dokumen ini, Pihak Klien menyatakan bahwa sistem telah diuji dan siap untuk dipindahkan ke lingkungan production.

**Penguji (Klien):**
- Nama: _______________________
- Jabatan: _______________________
- Tanggal: _______________________
- Tanda Tangan: _______________________

**Fasilitator (Developer):**
- Nama: _______________________
- Jabatan: _______________________
- Tanggal: _______________________
- Tanda Tangan: _______________________
