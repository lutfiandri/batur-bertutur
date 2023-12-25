---
title: Tutur
slug: tutur
desc: Sebuah website untuk membantu komunikasi dengan disabilitas tunarungu.
external: false
tags: Machine Learning, Frontend
thumbnail: dictionary.png
---

> Tutur - Help Communicate for Better Future!

Tutur mendapatan juara 1 di INTENTION IFEST UNPAD 2022.

# Links

- Github: [github.com/lutfiandri/bisindo-ifest](https://github.com/lutfiandri/bisindo-ifest)
- The site: [bisindo-ifest.vercel.app](https://bisindo-ifest.vercel.app)

# Tech Stack

- Next.js
- Mediapipe
- Tensorflowjs

# Presentation

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/W5K7v6cJqBY?si=yuQUhb-5Wp83rI65&amp;start=3630" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

# Features (and What I've Done)

## Recognition ⭐

![Dictionary](/portfolio/tutur/recognition.webm 'arti bahasa isyarat: perkenalkan nama saya lutfi')

Fitur ini mengambil video dari webcam dan akan diterjemahkan dadi BISINDO ke Bahasa Indonesia. Hal yang menarik di sini adalah Machine Learning yang kami kembangkan **mendeteksi gesture, tidak hanya gambar**. Namun, performa dari Machine Learning yang kami gunakan masih belum terlalu bagus dan bisa dibilang memiliki banyak noise.

Berikut adalah alur dari fitur Recognition.

![Dictionary](/portfolio/tutur/recognition-flow.png 'alur recognition')

## Dictionary

![Dictionary](/portfolio/tutur/dictionary.png)

Fitur ini berisikan kosakata BISINDO (video) ke Bahasa Indonesia. Belum ada optimasi seperti Lazy Loading di fitur ini yang menyebabkan load video lumayan berat di awal.

## Translate

![Translate](/portfolio/tutur/translate.webm)

Fitur ini memberikan input teks ke user, lalu akan diubah menjadi rangkaian video BISINDO. Sama seperti fitur Dictionary, belum ada optimasi loading video.

# Meet the Team

- Me, Lutfi Andriyanto, as Frontend Developer. Created Recognition and Dictionary features.
- [Haikal Hilmi] as Frontend Developer. Created Translate feature.
- [Aulia Nur Fajriyah] as UI/UX Designer. Created all designs for this app.
- [Daniyal Kautsar] as Machine Learning Developer. Created all Machine Learning model for BISINDO gesture detection.
- [Annisa Uswa Sofia] as Data Miner. Created dataset needed for Machine Learning model.

<!-- def -->

[aulia nur fajriyah]: https://www.linkedin.com/in/aulianurfajriyah
[daniyal kautsar]: https://www.linkedin.com/in/mdaniyalk
[haikal hilmi]: https://www.linkedin.com/in/haikalhilmi
[annisa uswa sofia]: https://www.linkedin.com/in/annisauswa
