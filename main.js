 // Input Angka
 const elemenPanjang = document.querySelector(".panjang");
 const elemenLebar   = document.querySelector(".lebar");
 const elemenTinggi  = document.querySelector(".tinggi");

 // Button
 const elemenLuas     = document.querySelector(".tombol-luas");
 const elemenKeliling = document.querySelector(".tombol-keliling");
 const elemenVolume   = document.querySelector(".tombol-volume");
 
 // hasil
 const elemenHasilLuas      = document.querySelector(".hasil-perhitungan-luas");
 const elemenHasilKeliling  = document.querySelector(".hasil-perhitungan-keliling");
 const elemenHasilVolume    = document.querySelector(".hasil-perhitungan-volume");

 elemenLuas.addEventListener('click', function (){
     const nilaiPanjang = Number(elemenPanjang.value);
     const nilaiLebar   = Number(elemenLebar.value);
     
     const hasil = nilaiPanjang * nilaiLebar;
     elemenHasilLuas.textContent = `Luas Persegi Panjang adalah ${hasil}`;
 })

 elemenKeliling.addEventListener('click', function (){
     const nilaiPanjang = Number(elemenPanjang.value);
     const nilaiLebar   = Number(elemenLebar.value);
     
     const hasil = 2 * (nilaiPanjang + nilaiLebar);
     elemenHasilKeliling.textContent = `Keliling Persegi Panjang adalah ${hasil}`;
 })

 elemenVolume.addEventListener('click', function (){
     const nilaiPanjang = Number(elemenPanjang.value);
     const nilaiLebar   = Number(elemenLebar.value);
     const nilaiTinggi  = Number(elemenTinggi.value);
     
     const hasil = (nilaiPanjang * nilaiLebar * nilaiTinggi);
     elemenHasilVolume.textContent = `Volume Balok adalah ${hasil}`;
 })
