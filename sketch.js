var noktalarX=[];
var noktalarH=[];  // Sinyallerimize ait degerleri tutacak diziler
var noktalarY=[];


function setup(){

    createCanvas(1400,600);    

    //Dizilerin icini olusturdugumuz nokta sinifinin nesneleri ile dolduruyoruz.
    for(var i =40 ; i<420 ;i+=35 ){
        noktalarX.push(new Nokta(i+5,200));
    }
    for(var i =540 ; i<920 ;i+=35 ){
        noktalarH.push(new Nokta(i+5,200));
    }
    for(var i =110 ; i<840 ;i+=35 ){
        noktalarY.push(new Nokta(i+5,450));
    }
}

function draw(){
    background(255);

    fill(51);
    rect(0,0,1000,600);

    textSize(40);
    text("Nasil Kullanilir ?", 1020,30);
    
    textSize(15);
    text("Sinyali ayarlamak icin ilgili noktanin", 1020,60);
    text("ustune fare imlecini ile tiklayip ",1025,75)
    text("istedigimiz degere cikariyoruz.",1025,90);   
    textSize(15);
    fill(255);
    stroke(200);
    text("x[n]",30,30);
    text("h[n]",530,30);
    text("y[n]",30,330);

    //x sinyalininin duzlemi
    line(30,200,420,200);
    triangle(420, 195, 420, 205, 430, 200);
    //h sinyalininin duzlemi
    line(530,200,920,200);
    triangle(920, 195, 920, 205, 930, 200);
    //y sinyalininin duzlemi
    line(100,450,850,450);
    triangle(850, 445, 850, 455, 860, 450);
    
    noStroke();

    var sayilarX = 0;
    //x sinyalinin noktalarini ciziyoruz
    for(var i =40 ; i<420 ;i+=35 ){
        fill(255);
        text(sayilarX,i,220);
        noktalarX[sayilarX].ciz();

        //Fare x noktalarindan harhangi biri uzerine gelirse o noktanin capini buyutuyoruz
        if(noktalarX[sayilarX].ustundeMi()){
            noktalarX[sayilarX].buyut();
        }
        else{
            noktalarX[sayilarX].kucult();
        }
        sayilarX++;
    }
    //h sinyalinin noktalarini ciziyoruz
    var sayilarH = 0;
    for(var i =540 ; i<920 ;i+=35 ){
        fill(255);
        text(sayilarH,i,220);
        noktalarH[sayilarH].ciz();

        //Fare h noktalarindan harhangi biri uzerine gelirse o noktanin capini buyutuyoruz
        if(noktalarH[sayilarH].ustundeMi()){
            noktalarH[sayilarH].buyut();
        }
        else{
            noktalarH[sayilarH].kucult();
        }
        sayilarH++;
    }

    //y sinyalinin noktalarini ciziyoruz
    var sayilarY = 0;
    for(var i =110 ; i<840 ;i+=35 ){
        fill(255);
        text(sayilarY,i,470);
        noktalarY[sayilarY].ciz();
        sayilarY++;
    }

    hesapla();
}
function mousePressed() {
    for(var i =0 ; i<11 ;i++ ){
        if(noktalarX[i].ustundeMi()){
            noktalarX[i].tiklandi();
            
        }
        if(noktalarH[i].ustundeMi()){
            noktalarH[i].tiklandi();
        }
        
    }
}
function mouseDragged() {
    for(var i =0 ; i<11 ;i++ ){
        noktalarX[i].yukariKaydir();
        noktalarH[i].yukariKaydir();
    }
}
function mouseReleased() {
    for(var i =0 ; i<11 ;i++ ){
        
            noktalarX[i].tiklanmaBitti();
        
        
            noktalarH[i].tiklanmaBitti();
        
    }
}

function hesapla(){
    //H sinyalini ceviriyoruz 
    var cevirNoktaH=[];
    for(var i=noktalarH.length-1 ; i>=0 ; i--){
        cevirNoktaH.push(noktalarH[i]);
    }
    //----

    var index =0;
    for(var a= 0 ,b =cevirNoktaH.length -1; a< noktalarX.length ; b--,a++){
        var toplam=0 ;
        for(var i =0 , j=b; i<=a ; i++,j++){
            toplam += noktalarX[i].sayi*cevirNoktaH[j].sayi;//Cakisan x ve h noktalarini topluyoruz 
        }
        //Elde etdigimiz toplami , nokta sinifi y kordinatina gore sayiyi ayarladigi icin y kordinati haline getiriyoruz
        //boylece toplam hem y kordinatini aylarliyor hem de y sinyalinin sayisini.
        noktalarY[index].setY(450-(toplam*10));

        index++;
    }
}

    