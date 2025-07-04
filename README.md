# 📝 Aplikasi Catatan - React SPA

Aplikasi pencatatan sederhana berbasis React yang mendukung pencatatan aktif, pengarsipan, pencarian, serta penanganan halaman tidak ditemukan. Dibangun dengan pendekatan **Single Page Application (SPA)** menggunakan **ReactJS** dan tool modern seperti **Vite**.

---

## 🚀 Fitur Utama

- ✅ Menambahkan catatan baru
- 🔍 Mencari catatan berdasarkan judul
- 📥 Mengarsipkan dan membuka arsip catatan
- 🗑️ Menghapus catatan
- 📄 Melihat detail isi catatan
- 🚫 Halaman 404 jika rute tidak ditemukan

---

## 🧑‍💻 Teknologi yang Digunakan

- ⚛️ React
- ⚡ Vite
- 📦 Local Storage
- 🧭 React Router DOM

---

## 📦 Cara Instalasi

1. **Clone repository ini:**

   ```bash
   git clone <repository-url>
   cd singlepage-aplication
   ```

2. **Install dependensi:**

   ```bash
   npm install
   ```

3. **Jalankan aplikasi:**

   ```bash
   npm run dev
   ```

4. Buka browser dan akses `http://localhost:5173`

---

## 🧭 Struktur Halaman (Routing)

| Path              | Komponen            | Deskripsi                         |
|-------------------|---------------------|-----------------------------------|
| `/`               | `NotesPage`         | Halaman utama catatan aktif       |
| `/archives`       | `ArchivesPage`      | Halaman catatan yang diarsipkan   |
| `/notes/:id`      | `NoteDetailPage`    | Detail catatan tertentu           |
| `/new`            | `NewNotePage`       | Form tambah catatan baru          |
| `*`               | `NotFoundPage`      | Halaman tidak ditemukan (404)     |

---

## 📁 Struktur Proyek (Singkat)

```bash
src/
├── components/        # Komponen UI: Header, Footer, NoteCard, dll.
├── pages/             # Halaman berdasarkan route (SPA)
├── utils/             # Helper seperti penyimpanan local dan formatter tanggal
├── styles/            # File CSS untuk styling
├── App.jsx            # Routing utama aplikasi
└── index.jsx          # Entry point React
```

---

## ⚖️ Lisensi

Proyek ini dirilis dengan lisensi **MIT**. Silakan gunakan, modifikasi, dan distribusikan dengan menyertakan atribusi.

---

## 🙌 Kontributor

- bays
- Dibuat untuk keperluan pembelajaran dan pengembangan aplikasi frontend modern.
