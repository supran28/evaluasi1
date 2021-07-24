//for (var y = 1; y<=9; y++){
//    if(y%2 ==0){
//        document.write(y + ":" +"genap")
//    }
//    else{
//        document.write(y + ":" + "ganjil")
//    }
//    document.write("</br>")
//}
     // intro logic 

//for( y = 1; y < 10; y++){
//    for ( x = 1; x <10; x++){
//        document.write('*')
//    }
//      document.write("<br/>")
//}


//for(var y= 1; y<10; y++){  // 1...9
//    for(var x= 1; x<10; x++){  // 1...9
//        document.write("*")
//    }
//     document.write("<br/>")
//}

for(var y = 1; y < 10; y++){
    for(var x = 1; x < 10; x++){
        if(y == x || x==9 - (y - 1)){
            document.write("*")
        }else{
            document.write("_")
        }
    }
    document.write("<br/>")
}