for (i = 10; i >= 0; i--){
    if( (i == 9) || (i == 7) || (i == 3 )){
        continue;
    }
    num = i * 10;
    document.write('Число: ' + '<b>' + num + '</b>' + '<br>');
}