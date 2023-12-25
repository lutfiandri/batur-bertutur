---
title: ASL Handy
slug: asl-handy
desc: Sebuah website untuk mendeteksi American Sign Language.
external: false
tags: Machine Learning, Frontend
hero:
  - hero-lutfi-asl.mp4
thumbnail: asl-u.png
---

Sebuah website untuk mendeteksi American Sign Language (ASL). Mendapatkan peringkat 2 pada Summer School DTETI 2022. Team up with [Aulia Nur Fajriyah] as gorgeous UI designer.

# Links

- Github: [github.com/lutfiandri/asl-handy](https://github.com/lutfiandri/asl-handy)
- The site: [aslhandy.netlify.app](https://aslhandy.netlify.app/)

# Tech Stack

- Vanilla JS
- Mediapipe
- Tenfsorflowjs

# Features

## ASL Recognition

ASL Handy akan mendeteksi bahasa isyarat (American Sign Language) dan menampilkan hurufnya secara realtime.

![ASL Recognition](/portfolio/asl-handy/asl-u.png)

Berikut alur deteksi bahasa isyarat di ASL Handy.

![Flow App](/portfolio/asl-handy/flow-app.png)

Untuk mengklasifikasikan foto tangan ke alphabet (ASL), app ini menggunakan 2 library utama.

1. **Mediapipe:** Framework dari Google untuk mendeteksi titik-titik (vertices) pada tangan. FYI, Mediapipe ini masih memiliki banyak fitur lain.
2. **Tensorflow:** Framework Deep Learning. Digunakan untuk mendeteksi vertices hasil mediapipe menjadi klasifikasi alfabet ASL.

> **Note:** Deployment fitur ini di website cukup rumit karena dokumentasi Mediapipe yang sangat minim. Tidak adanya contoh penggunaan membuatku harus membaca kode di github Mediapipe untuk akhirnya bisa digunakan.

## ASL Translator

ASL Handy akan menalkuan terjemahan dari teks ke kumpulan gambar ASL. ASL Handy juga memiliki fitur speech-to-text sehingga pengguna hanya perlu mengucapkan kalimat yang ingin diterjemahkan ke kumpulan gambar ASL.

![ASL Translator](/portfolio/asl-handy/asl-translator.png)

---

Maklumi implementasi UI-nya ke website yang lumayan berantakan karena semua fiturnya cuma dibuat 3 hari aja hehe :D

<!-- def -->

[aulia nur fajriyah]: https://www.linkedin.com/in/aulianurfajriyah
