class Form{

 constructor(){

    this.form = createInput("Name");
    this.button = createButton();
    this.button2 = createButton("PLAYER1"); 
    this.button3 = createButton("PLAYER2"); 
    this.button4 = createButton("PLAYER3"); 
    this.button5 = createButton("PLAYER4"); 
    this.button6 = createButton("PLAYER5");  

 }

 display(){
   
   this.button2.position(displayWidth/8,displayHeight/2+200);
   this.button3.position(displayWidth/4+25,displayHeight/2+200);
   this.button4.position(displayWidth/2,displayHeight/2+200);
   this.button5.position(displayWidth/2+300,displayHeight/2+200);
   this.button6.position(displayWidth/2+600,displayHeight/2+200);

   this.button2.mousePressed(()=>{
      background("yellow")
      image(hunter,displayWidth/8,displayHeight/2,45,130);
      this.hide();
      
   });

   image(hunter,displayWidth/8,displayHeight/2,45,130);
   image(hunter2,displayWidth/4+25,displayHeight/2);
   image(hunter3,displayWidth/2,displayHeight/2);
   image(hunter4,displayWidth/2+300,displayHeight/2);
   image(hunter5,displayWidth/2+600,displayHeight/2,90,150);

   

 }

hide(){

   this.button3.hide();
   this.button4.hide();
   this.button5.hide();
   this.button6.hide();
   this.button2.hide();
   this.button.hide();
   tint(255,0);
   this.form.hide();




}


}