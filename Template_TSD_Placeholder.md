# TECHNICAL SPECIFICATION DOCUMENT (TSD)

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | [Masukkan Nama Proyek Sistem / Aplikasi] |
| **Versi Dokumen** | [Contoh: 1.0 Draft] |
| **Tanggal Dibuat** | [Tanggal Pembuatan] |
| **Lead Engineer** | [Nama Lengkap Anda] |
| **Status** | [Draft / In Review / Approved] |

---

## 1. System Architecture (Arsitektur Sistem)
> 💡 **Petunjuk Pengisian:** Gambarkan bagaimana sistem saling terhubung. Apakah menggunakan arsitektur *monolith*, *microservices*, atau *headless CMS*?

Sistem ini akan dibangun menggunakan pendekatan *Headless* (memisahkan *frontend* dari *backend/CMS*). 
* **Frontend (Client-side):** Aplikasi web statis/dinamis yang mengkonsumsi API untuk menampilkan halaman "Collection" dan "Story".
* **Backend (Server-side & CMS):** Panel admin terpusat untuk mengelola konten dan inventaris katalog.
* **Database:** Basis data relasional/NoSQL untuk menyimpan relasi katalog produk dan aset editorial.

## 2. Tech Stack & Environment (Teknologi & Lingkungan)
> 💡 **Petunjuk Pengisian:** Tuliskan spesifikasi teknologi yang akan dipakai oleh tim *developer*.

### 2.1 Core Stack
* **Frontend Framework:** [Contoh: Next.js / Vue.js]
* **Backend / API Framework:** [Contoh: Node.js (Express) / Laravel]
* **Database:** [Contoh: PostgreSQL / MongoDB]

### 2.2 Development Environment & CLI
* **OS Environment:** macOS (Spesifikasi *host*: RazorCrest atau setara)
* **Package Manager & Dependencies:** `npm` dan Homebrew (`brew`)
* **Automation & Workflow Tools:** Menggunakan KiloCode (`kilo-auto`) untuk *script* otomasi dan OpenClaw untuk manajemen CLI/terminal selama tahap *development*.

## 3. Data Model (Skema Database)
> 💡 **Petunjuk Pengisian:** Jabarkan entitas utama di dalam *database* (hindari tabel POS/transaksi fisik sesuai kesepakatan *out-of-scope*).

* **Tabel `products` (Collection):**
    * `id` (UUID, Primary Key)
    * `product_name` (String)
    * `description` (Text)
    * `high_res_image_url` (String)
* **Tabel `pages` (Story):**
    * `id` (UUID, Primary Key)
    * `title` (String)
    * `editorial_content` (Text/HTML)
    * `layout_type` (Enum: 'asymmetrical', 'standard')

## 4. API Specifications (Spesifikasi API)
> 💡 **Petunjuk Pengisian:** Daftar *endpoint* utama yang akan diakses oleh *frontend*.

* `GET /api/v1/collection`
    * **Fungsi:** Mengambil daftar produk katalog untuk halaman "Collection".
    * **Response:** Array of JSON objects.
* `GET /api/v1/story`
    * **Fungsi:** Mengambil konten narasi dan identitas perusahaan.

## 5. Integrations (Integrasi Pihak Ketiga)
> 💡 **Petunjuk Pengisian:** Sistem eksternal apa yang akan dihubungkan lewat API/Webhook?

* **Payment Gateway:** Integrasi API Midtrans untuk pembuatan *invoice* atau pembayaran digital dasar (opsional/sesuai kebutuhan bisnis).
* **Omnichannel / E-commerce Sync (Future Phase):** Struktur *database* disiapkan agar ke depannya *webhook* dapat dihubungkan dengan API Shopee atau Tokopedia untuk sinkronisasi inventaris multi-platform dalam satu *dashboard*.

## 6. Security, Performance & QA
> 💡 **Petunjuk Pengisian:** Batasan performa teknis dan perangkat pengujian.

* **Security:** Implementasi JWT (*JSON Web Tokens*) untuk autentikasi halaman Admin. Sanitasi input form untuk mencegah XSS & SQL Injection.
* **Testing Environment:** Selain *testing mobile/desktop* standar, antarmuka *grid* asimetris wajib lolos uji visual saat dirender dan diekspansi pada layar monitor eksternal ultrawide (seperti spesifikasi Lenovo L29w-30) untuk memastikan proporsi *whitespace* tidak terdistorsi.
* **Performance:** Optimasi ukuran gambar (*lazy loading*) agar sesuai dengan target *load time* < 3 detik.

## 7. Deployment Strategy (Strategi Rilis)
> 💡 **Petunjuk Pengisian:** Cara kode dipindahkan ke *server*.

* **Version Control:** Git (GitHub/GitLab) dengan *branching* standar (`main`, `staging`, `dev`).
* **CI/CD:** Menggunakan GitHub Actions untuk otomatisasi *build* dan *deployment* ke *server production*.
* **Domain & DNS:** Konfigurasi *records* (A, CNAME) dikelola melalui panel *registrar* domain terkait (rumahweb/exabytes atau setara).
