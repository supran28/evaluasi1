//var password = prompt("Nama Mahasiswa dan Nilai");
//
//        if(Nilai > 70 == "asa"){
//            document.write("<h2>Selamat datang bos!</h2>");
//        } else {
//            document.write("<p>Password salah, coba lagi!</p>");
//        }
//
//        document.write("<p>Terima kasih sudah menggunakan aplikasi ini!</p>");



//var nilai = prompt("Inputkan nilai akhir:");
//        var grade = "";
//
//        if(nilai >= 90) grade = "A"
//        else if(nilai >= 80) grade = "B+"
//        else if(nilai >= 70) grade = "B"
//        else if(nilai >= 60) grade = "C+"
//        else if(nilai >= 50) grade = "C"
//        else if(nilai >= 40) grade = "D"
//        else if(nilai >= 30) grade = "E"
//        else grade = "F";
//
//        document.write(`<p>Grade anda: ${grade}</p>`);


for (var y = 60; y<=100; y++){
       if(y%2 ==0){
           document.write(y + ":" +"genap")
       }
        else{
            document.write(y + ":" + "ganjil")
       }
        document.write("</br>")
    }