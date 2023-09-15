class Train {
    constructor() {
      this.maxPenumpang = 11;
      this.penumpang = ['masinis'];
    }
  
    tambahPenumpang(nama) {
      if (this.penumpang.length < this.maxPenumpang) {
        if (!this.penumpang.includes(nama)) {
          this.penumpang.push(nama); // Menggunakan push agar urutan ascending
          console.log(`${nama} telah naik ke dalam kereta.`);
        } else {
          console.log(`${nama} sudah ada di dalam kereta.`);
        }
      } else {
        console.log('Kereta sudah penuh.');
      }
    }
  
    keluarPenumpang(nama) {
      const index = this.penumpang.indexOf(nama);
      if (index !== -1) {
        this.penumpang.splice(index, 1);
        console.log(`${nama} telah turun dari kereta.`);
      } else {
        console.log(`${nama} tidak ada di dalam kereta.`);
      }
    }
  
    daftarPenumpang() {
      console.log('Daftar Penumpang:');
      this.penumpang.forEach((nama, index) => {
        console.log(`${index + 1}. ${nama}`);
      });
    }
  
    getDaftarPenumpang() {
      return this.penumpang;
    }
  }
  
  // Contoh penggunaan class Train
  const keretaApi = new Train();
  
  keretaApi.tambahPenumpang('Penumpang 1');
  keretaApi.tambahPenumpang('Penumpang 2');
  keretaApi.tambahPenumpang('Penumpang 3');
  keretaApi.tambahPenumpang('Penumpang 4');
  keretaApi.tambahPenumpang('Penumpang 5');
  keretaApi.tambahPenumpang('Penumpang 6');
  keretaApi.tambahPenumpang('Penumpang 7');
  keretaApi.tambahPenumpang('Penumpang 8');
  keretaApi.tambahPenumpang('Penumpang 9');
  keretaApi.tambahPenumpang('Penumpang 10');
  
  keretaApi.keluarPenumpang('penumpang 3')

  keretaApi.daftarPenumpang();
  
  // Mendapatkan daftar penumpang dalam bentuk array
  const daftarPenumpangArray = keretaApi.getDaftarPenumpang();
  console.log(daftarPenumpangArray);
  