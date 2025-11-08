# 🌤️ Weather Forecast Jakarta - Ionic Vue App

Aplikasi mobile untuk menampilkan prakiraan cuaca Jakarta secara real-time menggunakan Ionic Framework dan Vue 3 dengan Composition API.

## 📱 Tentang Aplikasi

Aplikasi ini menampilkan data prakiraan cuaca per jam untuk wilayah Jakarta, Indonesia. Data cuaca diambil dari **Open-Meteo API** yang menyediakan informasi meteorologi gratis dan open-source.

### ✨ Fitur Utama

- 📊 **Prakiraan Cuaca Per Jam** - Menampilkan temperatur setiap jam
- 🎨 **UI Modern & Responsif** - Desain yang clean dan mudah dibaca
- 🔄 **Refresh Data** - Tombol untuk memperbarui data cuaca
- 🌡️ **Indikator Suhu Berwarna** - Visualisasi suhu dengan warna yang berbeda:
  - 🔴 Merah: ≥ 30°C (Panas)
  - 🟠 Orange: 25-29°C (Hangat)
  - 🟢 Hijau: 20-24°C (Sejuk)
  - 🔵 Biru: < 20°C (Dingin)
- ⚡ **Loading & Error State** - User experience yang optimal
- 📍 **Lokasi Jakarta** - Koordinat: -6.2°S, 106.8°E

## 🏗️ Arsitektur Aplikasi

Aplikasi ini dibangun dengan struktur yang clean dan modular:

```
src/
├── services/
│   ├── axiosInstance.ts       # Konfigurasi Axios dengan interceptors
│   └── weatherService.ts      # Service untuk API weather
├── utils/
│   ├── dateFormatter.ts       # Utility untuk format tanggal & waktu
│   └── weatherTransformer.ts  # Transform data API ke format UI
├── types/
│   └── weather.ts             # TypeScript interfaces & types
├── views/
│   └── HomePage.vue           # Komponen utama aplikasi
└── router/
    └── index.ts               # Vue Router configuration
```

## 🛠️ Tech Stack

- **Framework**: [Ionic Framework](https://ionicframework.com/) v8
- **UI Library**: [Vue.js](https://vuejs.org/) v3
- **Language**: [TypeScript](https://www.typescriptlang.org/) v5
- **HTTP Client**: [Axios](https://axios-http.com/) v1.13
- **Build Tool**: [Vite](https://vitejs.dev/) v5
- **Mobile Runtime**: [Capacitor](https://capacitorjs.com/) v7
- **Testing**: Cypress (E2E) & Vitest (Unit)

## 📡 API Integration

Aplikasi ini menggunakan [Open-Meteo API](https://open-meteo.com/):

**Endpoint:**
```
GET https://api.open-meteo.com/v1/forecast
```

**Parameters:**
- `latitude`: -6.2 (Jakarta)
- `longitude`: 106.8 (Jakarta)
- `hourly`: temperature_2m

**Response Data:**
- `time`: Array waktu pengukuran (ISO 8601)
- `temperature_2m`: Array suhu dalam °C

---
