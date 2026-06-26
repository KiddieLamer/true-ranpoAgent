# BUSINESS SCENARIO TEST (BST)

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | |
| **Kode Dokumen** | BST-[PROJECT]-[VERSI] |
| **Versi** | 1.0 |
| **Tanggal Pengujian** | |
| **Business Analyst** | |
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
- [2. Skenario Bisnis](#2-skenario-bisnis)
- [3. Evaluasi Dampak Bisnis](#3-evaluasi-dampak-bisnis)
- [4. Rekomendasi](#4-rekomendasi)
- [5. Sign-Off](#5-sign-off)

---

## 1. Pendahuluan

### 1.1 Apa itu BST?
BST berbeda dengan UAT. UAT fokus pada **fungsionalitas teknis** ("apakah tombolnya berfungsi?"). BST fokus pada **proses bisnis** ("apakah alur kerjanya mendukung operasional sehari-hari?").

### 1.2 Tujuan
Memastikan bahwa sistem baru benar-benar mendukung proses bisnis dan selaras dengan tujuan strategis yang didefinisikan di BRD.

### 1.3 Skenario vs UAT

| Aspek | UAT | BST |
|-------|-----|-----|
| **Penguji** | Klien / End User | Business Owner / Operational Team |
| **Fokus** | "Apakah fitur berfungsi?" | "Apakah proses bisnis berjalan?" |
| **Data** | Test data | Data riil / mendekati riil |
| **Output** | Bug report | Business impact assessment |

---

## 2. Skenario Bisnis

> Skenario berdasarkan **proses bisnis nyata**, bukan berdasarkan fitur teknis.

### 2.1 Skenario: [Nama Proses Bisnis]
**BRD Ref:** §X | **Risk:** [High/Medium/Low]

**Konteks Bisnis:**
[Deskripsi situasi bisnis yang mensimulasikan kondisi riil.]

**Preconditions:**
- [Kondisi yang harus dipenuhi sebelum skenario dimulai]
- [Data atau akses yang diperlukan]

| # | Langkah Proses Bisnis | Ekspektasi Bisnis | Status | Catatan |
|---|----------------------|-------------------|--------|---------|
| 1 | | | [ ] / [ ] | |
| 2 | | | [ ] / [ ] | |
| 3 | | | [ ] / [ ] | |

**Success Criteria:**
- [Kriteria yang menandakan proses bisnis ini sukses]
- [Metrik bisnis yang terpenuhi]

### 2.2 Skenario: [Nama Proses Bisnis]
**BRD Ref:** §X | **Risk:** [High/Medium/Low]

**Konteks Bisnis:**
[Deskripsi situasi bisnis.]

| # | Langkah Proses Bisnis | Ekspektasi Bisnis | Status | Catatan |
|---|----------------------|-------------------|--------|---------|
| 1 | | | [ ] / [ ] | |

---

## 3. Evaluasi Dampak Bisnis

### 3.1 Business Process Impact

| Proses | Sebelum | Sesudah | Improvement |
|--------|---------|---------|-------------|
| | [waktu/biaya/manual] | [waktu/biaya/otomatis] | |
| | | | |

### 3.2 KPI Validation

| KPI (dari BRD) | Target | Actual | Gap | Keterangan |
|----------------|--------|--------|-----|------------|
| | | | | |

### 3.3 Operational Readiness
- [ ] SOP / pedoman operasional sudah siap
- [ ] Tim internal sudah dilatih
- [ ] Data migrasi sudah tervalidasi
- [ ] Backup & disaster recovery plan sudah siap

### 3.4 Issues Found

| # | Issue | Impact | Recommendation |
|---|-------|--------|---------------|
| | | | |

---

## 4. Rekomendasi

Berdasarkan hasil pengujian skenario bisnis di atas, tim Business Analyst merekomendasikan:

- ✅ **Lanjut ke Production** — sistem siap mendukung operasional bisnis
- ⏸️ **Perbaikan Minor** — ada beberapa temuan yang perlu diperbaiki sebelum Go Live
- ❌ **Tunda** — sistem belum siap, diperlukan perbaikan mayor

**Detail Rekomendasi:**
[Penjelasan lengkap rekomendasi dan timeline jika ada perbaikan.]

---

## 5. Sign-Off

Dengan menandatangani dokumen ini, Business Owner menyatakan bahwa sistem telah dievaluasi berdasarkan skenario bisnis nyata.

**Business Owner / Perwakilan Klien:**
- Nama: _______________________
- Jabatan: _______________________
- Tanggal: _______________________
- Tanda Tangan: _______________________

**Business Analyst:**
- Nama: _______________________
- Tanggal: _______________________
- Tanda Tangan: _______________________
