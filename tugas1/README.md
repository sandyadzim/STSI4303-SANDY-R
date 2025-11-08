# Tugas 1 STSI4303

## Deskripsi
Program TypeScript untuk menyelesaikan 3 soal berdasarkan NIM 049234875

## Analisis NIM
- **Digit terakhir**: 5 → Tinggi segitiga = 5
- **2 digit terakhir**: 75 → Angka awal deret aritmatika = 75
- **Digit ke-3 dari belakang**: 8 → Step = 8 + 1 = 9
- **Batas prima**: 75 + 10 = 85

## Cara Menjalankan

### Instalasi di Local Machine
```bash
npm install --save-dev typescript ts-node @types/node
```

### Menjalankan Program

**Soal 1 - Pola Segitiga:**
```bash
ts-node soal1.ts
```
Output:
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

**Soal 2 - Deret Aritmatika:**
```bash
ts-node soal2.ts
```
Output:
```
75, 84, 93, 102, 111, 120, 129, 138, 147, 156
```

**Soal 3 - Bilangan Prima:**
```bash
ts-node soal3.ts
```
Output:
```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83
```
