# BUSINESS REQUIREMENTS DOCUMENT (BRD)

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | |
| **Kode Dokumen** | BRD-[PROJECT]-[VERSI] |
| **Versi** | 1.0 |
| **Tanggal** | |
| **Disusun Oleh** | [Nama / Role] |
| **Disetujui Oleh** | [Nama / Role] |
| **Status** | Draft / Review / Approved |

---

## Revision History

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|-----------|
| 0.1 | | | Draft awal |
| 1.0 | | | Approved |

---

## Daftar Isi

- [1. Executive Summary](#1-executive-summary)
- [2. Problem Statement](#2-problem-statement)
- [3. Business Objectives & Success Metrics](#3-business-objectives--success-metrics)
- [4. Stakeholder Analysis](#4-stakeholder-analysis)
- [5. User Roles & Personas](#5-user-roles--personas)
- [6. Project Scope](#6-project-scope)
- [7. Business Process & Workflow](#7-business-process--workflow)
- [8. Data Requirements](#8-data-requirements)
- [9. Integration Points](#9-integration-points)
- [10. Constraints & Assumptions](#10-constraints--assumptions)
- [11. Risk Assessment](#11-risk-assessment)
- [12. Glossary](#12-glossary)
- [13. Document References](#13-document-references)
- [14. Sign-Off](#14-sign-off)

---

## 1. Executive Summary

> Ringkasan eksekutif untuk audiens manajemen / C-level. Fokus pada: kondisi saat ini, masalah, solusi, dan nilai bisnis.

### 1.1 Latar Belakang
[Jelaskan kondisi bisnis saat ini, sistem yang berjalan, dan mengapa perubahan diperlukan.]

### 1.2 Ringkasan Solusi
[Jelaskan secara singkat solusi yang diusulkan — apa yang akan dibangun/diubah.]

### 1.3 Nilai Bisnis
[Apa dampaknya bagi bisnis? Efisiensi? Revenue? Compliance?]

---

## 2. Problem Statement

> Masalah spesifik yang ingin diselesaikan. Bukan "kami mau bikin aplikasi", tapi "kami mengalami masalah X yang menyebabkan kerugian Y".

| Aspek | Deskripsi |
|-------|-----------|
| **Problem** | |
| **Dampak** | |
| **Frekuensi** | |
| **Stakeholder Terdampak** | |
| **Akar Masalah** | |
| **Dampak Finansial** | (jika bisa diestimasi) |

---

## 3. Business Objectives & Success Metrics

> Tujuan bisnis yang **SMART** (Specific, Measurable, Achievable, Relevant, Time-bound).

### 3.1 Business Objectives

| # | Objective | Metrik | Baseline | Target | Timeline |
|---|-----------|--------|----------|--------|----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

### 3.2 Success Criteria (Kriteria Sukses)

- [Criterion 1]
- [Criterion 2]

### 3.3 Business KPIs

| KPI | Current Value | Target Value | Measurement Method |
|-----|---------------|--------------|-------------------|
| | | | |

---

## 4. Stakeholder Analysis

> Stakeholder yang terlibat, level pengaruh, dan kepentingan mereka.

| Stakeholder | Role | Kepentingan | Pengaruh | Ekspektasi |
|-------------|------|-------------|----------|------------|
| | Sponsor | | High | |
| | Business Owner | | High | |
| | IT Lead | | Medium | |
| | End User | | Low | |
| | | | | |

---

## 5. User Roles & Personas

> Siapa yang akan menggunakan sistem ini? Bedakan per-user type.

### 5.1 User Roles

| Role | Deskripsi | Frekuensi Pakai | Prioritas Fitur |
|------|-----------|-----------------|-----------------|
| | | | |
| | | | |

### 5.2 Personas (Opsional)

**Persona 1: [Nama]**
- Latar Belakang:
- Tujuan:
- Pain Points:
- Teknologi yang dikuasai:

**Persona 2: [Nama]**
- Latar Belakang:
- Tujuan:
- Pain Points:
- Teknologi yang dikuasai:

---

## 6. Project Scope

> Batasan proyek yang jelas untuk menghindari scope creep.

### 6.1 In-Scope

| # | Fitur / Modul | Deskripsi Singkat | Prioritas |
|---|---------------|-------------------|-----------|
| 1 | | | High/Med/Low |
| 2 | | | |
| 3 | | | |

### 6.2 Out-of-Scope

| # | Item | Alasan |
|---|------|--------|
| 1 | | |
| 2 | | |

### 6.3 Assumptions for Scope

- [Asumsi yang mendasari scope ini, misal: "API pihak ketiga sudah tersedia"]

---

## 7. Business Process & Workflow

> Alur bisnis utama. Fokus ke **business process**, BUKAN technical flow.

### 7.1 Current Process (As-Is)

[Deskripsi proses yang berjalan saat ini, termasuk pain points.]

### 7.2 Proposed Process (To-Be)

[Deskripsi proses yang diusulkan.]

### 7.3 Process Flow

```
[Mermaid / diagram — opsional, bisa ditambahkan nanti]

flowchart TD
    A[Start] --> B[Step 1]
    B --> C{Decision}
    C -->|Yes| D[Step 2]
    C -->|No| E[Step 3]
```

### 7.4 Business Rules

| # | Rule | Keterangan |
|---|------|------------|
| 1 | | |
| 2 | | |

---

## 8. Data Requirements

> Data apa saja yang dibutuhkan sistem untuk berfungsi.

| Data | Sumber | Format | Volume Estimasi | Kebutuhan Khusus |
|------|--------|--------|-----------------|------------------|
| | | | | (privacy, retention, dll) |
| | | | | |

---

## 9. Integration Points

> Sistem lain yang perlu diintegrasi.

| Sistem | Arah | Data | Method | Timeline |
|--------|------|------|--------|----------|
| | In/Out/Both | | API/File/DB | |
| | | | | |

---

## 10. Constraints & Assumptions

### 10.1 Constraints (Kendala)

| # | Constraint | Dampak |
|---|------------|--------|
| 1 | | |
| 2 | | |

### 10.2 Assumptions (Asumsi)

| # | Assumption | Jika Salah? |
|---|------------|-------------|
| 1 | | |
| 2 | | |

### 10.3 Dependencies (Ketergantungan)

| # | Dependency | Owner | Status |
|---|------------|-------|--------|
| 1 | | | Open/In Progress/Done |
| 2 | | | |

---

## 11. Risk Assessment

> Identifikasi risiko proyek dari sisi bisnis (bukan teknis).

| # | Risiko | Probabilitas | Dampak | Mitigasi | Owner |
|---|--------|--------------|--------|----------|-------|
| 1 | | H/M/L | H/M/L | | |
| 2 | | | | | |

---

## 12. Glossary

> Daftar istilah yang digunakan dalam dokumen ini.

| Istilah | Definisi |
|---------|----------|
| | |
| | |

---

## 13. Document References

> Dokumen lain yang terkait.

| Dokumen | Kode | Versi | Lokasi |
|---------|------|-------|--------|
| SOW | | | |
| PRD | | | (akan dibuat setelah BRD) |
| TSD | | | (akan dibuat setelah PRD) |

---

## 14. Sign-Off

Dengan menandatangani dokumen ini, para pihak menyetujui ruang lingkup bisnis yang tertulis di atas.

| Role | Nama | Jabatan | Tanggal | Tanda Tangan |
|------|------|---------|---------|--------------|
| **Project Sponsor** | | | | |
| **Business Owner** | | | | |
| **Project Manager** | | | | |
| **IT Lead** | | | | |
| **Analyst** | | | | |
