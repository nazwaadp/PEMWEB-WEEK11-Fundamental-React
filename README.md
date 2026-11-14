# Manajemen Produk (Tugas 3)

## Identitas

- Nama : Nazwa Aulia Dwi Purnomo
- NRP : 5027251018
- Mata Kuliah : Pemrograman Web - A

## Deskripsi

Aplikasi web manajemen produk yang dibuat dengan React (Create React App). Pengguna dapat melihat daftar produk, mencari produk, menambah, mengubah, dan menghapus produk melalui pop-up. Data disimpan di state React (di memori), sehingga kembali ke data awal saat halaman dimuat ulang.

## Fitur

- Halaman utama berisi daftar produk dalam bentuk kartu (ID, nama, harga).
- Pencarian produk berdasarkan nama, lengkap dengan penghitung jumlah produk.
- Pop-up **Tambah Produk** dengan validasi (nama wajib diisi, harga harus bilangan bulat lebih dari 0).
- Pop-up **Edit Produk** dengan form yang sudah terisi data produk.
- Pop-up konfirmasi **Hapus Produk**.
- Pop-up dapat ditutup dengan tombol Batal, tombol silang, tombol Escape, atau klik area di luar pop-up.

## Cara Menjalankan

1. Pasang Node.js (versi 20.19 ke atas).
2. Clone repository ini, lalu masuk ke foldernya.
3. Pasang dependensi: `npm install`
4. Jalankan: `npm start`
5. Browser terbuka otomatis ke `http://localhost:3000`.

## Struktur Proyek

```text
PEMWEB-WEEK11-Fundamental-React/
├── public/
│   └── index.html                      # Template HTML utama
├── src/
│   ├── components/
│   │   ├── ConfirmDeleteModal.css
│   │   ├── ConfirmDeleteModal.js       # Pop-up konfirmasi hapus
│   │   ├── Header.css
│   │   ├── Header.js                   # Judul dan tombol Tambah Produk
│   │   ├── Modal.css
│   │   ├── Modal.js                    # Kerangka dasar pop-up
│   │   ├── ProductCard.css
│   │   ├── ProductCard.js              # Satu kartu produk
│   │   ├── ProductFormModal.css
│   │   ├── ProductFormModal.js         # Pop-up Tambah dan Edit
│   │   ├── ProductList.css
│   │   ├── ProductList.js              # Daftar kartu produk
│   │   ├── SearchBar.css
│   │   └── SearchBar.js                # Kolom pencarian dan penghitung produk
│   ├── data/
│   │   └── products.js                 # Data awal produk
│   ├── utils/
│   │   └── formatRupiah.js             # Format harga: 5000 -> Rp5.000
│   ├── App.css                         # Gaya tata letak utama
│   ├── App.js                          # State utama dan penghubung antar komponen
│   ├── index.css                       # Gaya dasar dan tema warna pink
│   └── index.js                        # Titik awal aplikasi
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
