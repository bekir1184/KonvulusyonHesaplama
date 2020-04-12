
class Nokta{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.x1=5;
        this.y1=5;
        this.renk=255;   
        this.duzlem=y;
        this.tiklama=false;
        this.sayi=0;
    }

    ciz(){
        fill(this.renk);

        ellipse(this.x,this.y,this.x1,this.y1);
        stroke(200);
        line(this.x,this.duzlem,this.x,this.y);
        noStroke();
        if(this.sayi!=0){
            text(this.sayi,this.x-5,this.y-8);
        }
    }
    ustundeMi(){
        if(mouseX >this.x-5 && mouseX<this.x+this.x1+5
            &&mouseY >this.y-5 && mouseY<this.y+this.y1+5){
                return true;
        }   
        return false;
    }
    buyut(){
        this.x1=13;
        this.y1=13;
    }
    kucult(){
        this.x1=5;
        this.y1=5;
    }
    tiklandi(){
        this.tiklama=true;
        this.renk="red";
    }
    tiklanmaBitti(){   
        this.tiklama=false;
        this.renk=255;
    }
    
    yukariKaydir(){
        this.sayi=(this.duzlem-this.y)/10;
        if(this.tiklama){
            this.y=mouseY;
            //---------------            
            if(this.y>this.duzlem+50){
                this.y=this.duzlem+50;
            }                   // Noktanin max ve min kordinatlarini belirledik
            if(this.y<this.duzlem-50){
                this.y=this.duzlem-50;
            }
            //----------------
            

            
        }
        else{
            this.y=this.y;
        }
    }
    setY(yeniY){
        this.y=yeniY;

        this.sayi=(this.duzlem-this.y)/10;
        this.sayi=this.sayi.toFixed(1);
    }

}


